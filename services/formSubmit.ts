// Form Gönderim Servisi - Telegram + Google Sheets Entegrasyonu

interface FormData {
  fullName: string;
  clinicName: string;
  phone: string;
  location: string;
}

// ==========================================
// TELEGRAM BİLDİRİM
// ==========================================
const sendTelegramNotification = async (data: FormData): Promise<boolean> => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId || botToken === 'YOUR_BOT_TOKEN' || chatId === 'YOUR_CHAT_ID') {
    console.warn('Telegram bilgileri ayarlanmamış. .env.local dosyasını kontrol edin.');
    return false;
  }

  const message = `
🏥 *Yeni Bekleme Listesi Başvurusu!*

👤 *Ad Soyad:* ${data.fullName}
🏢 *Klinik:* ${data.clinicName}
📞 *Telefon:* ${data.phone}
📍 *Lokasyon:* ${data.location}
📅 *Tarih:* ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}

_Inventory Oli - Veteriner Stok Yönetimi_
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API hatası:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Telegram bildirimi gönderilemedi:', error);
    return false;
  }
};

// ==========================================
// GOOGLE SHEETS KAYIT
// ==========================================
const sendToGoogleSheets = async (data: FormData): Promise<boolean> => {
  const sheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!sheetUrl || sheetUrl === 'YOUR_GOOGLE_SHEETS_WEBHOOK_URL') {
    console.warn('Google Sheets webhook URL ayarlanmamış. .env.local dosyasını kontrol edin.');
    return false;
  }

  try {
    const response = await fetch(sheetUrl, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script CORS kısıtlaması nedeniyle
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: data.fullName,
        clinicName: data.clinicName,
        phone: data.phone,
        location: data.location,
        timestamp: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      }),
    });

    return true; // no-cors modda response kontrolü yapılamaz
  } catch (error) {
    console.error('Google Sheets kaydı başarısız:', error);
    return false;
  }
};

// ==========================================
// ANA FORM GÖNDERİM FONKSİYONU
// ==========================================
export const submitWaitlistForm = async (data: FormData): Promise<{
  success: boolean;
  telegram: boolean;
  sheets: boolean;
  message: string;
}> => {
  // Her iki servise paralel olarak gönder
  const [telegramResult, sheetsResult] = await Promise.all([
    sendTelegramNotification(data),
    sendToGoogleSheets(data),
  ]);

  // En az birinin başarılı olması yeterli
  const success = telegramResult || sheetsResult;

  return {
    success,
    telegram: telegramResult,
    sheets: sheetsResult,
    message: success
      ? 'Başvurunuz başarıyla alındı!'
      : 'Başvurunuz kaydedildi, ekibimiz en kısa sürede sizinle iletişime geçecektir.',
  };
};

export type { FormData };
