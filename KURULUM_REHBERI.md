# Inventory Oli - Telegram & Google Sheets Kurulum Rehberi

## 1. Telegram Bot Kurulumu

### Adım 1: Bot Oluşturun
1. Telegram'da **@BotFather**'ı arayın ve açın
2. `/newbot` komutunu gönderin
3. Bot için bir isim verin: `Inventory Oli Bildirim`
4. Bot için kullanıcı adı verin: `inventory_oli_bot` (benzersiz olmalı)
5. BotFather size bir **Bot Token** verecek → Kopyalayın

### Adım 2: Chat ID'nizi Bulun
1. Oluşturduğunuz bota gidin ve `/start` yazın
2. Tarayıcınızda şu adresi açın:
   ```
   https://api.telegram.org/bot<BURAYA_TOKEN_YAPISTIRIN>/getUpdates
   ```
3. Açılan JSON'da `"chat":{"id":123456789}` kısmındaki sayı sizin **Chat ID**'niz

### Adım 3: .env.local Dosyasını Güncelleyin
```env
TELEGRAM_BOT_TOKEN=7123456789:AAH...buraya_token_yapistirin
TELEGRAM_CHAT_ID=123456789
```

### Adım 4: Netlify/Cloudflare Ortam Değişkenlerini Ayarlayın
Deploy platformunuzda şu environment variable'ları ekleyin:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

---

## 2. Google Sheets Kurulumu (Ücretsiz)

### Adım 1: Google Sheets Oluşturun
1. [Google Sheets](https://sheets.google.com)'e gidin
2. Yeni bir boş spreadsheet oluşturun
3. İlk satıra şu başlıkları yazın:
   | A | B | C | D | E |
   |---|---|---|---|---|
   | Tarih | Ad Soyad | Klinik | Telefon | Lokasyon |

### Adım 2: Apps Script Ekleyin
1. Menüden **Uzantılar > Apps Script** seçin
2. Mevcut kodu tamamen silin ve aşağıdaki kodu yapıştırın:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('tr-TR'),
      data.fullName,
      data.clinicName,
      data.phone,
      data.location
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Adım 3: Web App Olarak Yayınlayın
1. **Dağıt > Yeni dağıtım** seçin
2. Tür olarak **Web uygulaması** seçin
3. Şu ayarları yapın:
   - **Yürütme hesabı:** Ben (kendi e-postanız)
   - **Erişimi olan kişiler:** Herkes
4. **Dağıt** düğmesine basın
5. Google izin isteyecek → Onaylayın
6. Verilen **URL'yi** kopyalayın

### Adım 4: .env.local Dosyasını Güncelleyin
```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/...buraya_url_yapistirin.../exec
```

### Adım 5: Netlify/Cloudflare Ortam Değişkenini Ekleyin
- `GOOGLE_SHEETS_WEBHOOK_URL`

---

## 3. Test Etme

1. Yerel geliştirme ortamında: `npm run dev`
2. Formu doldurup gönderin
3. Telegram'da bildirim gelip gelmediğini kontrol edin
4. Google Sheets'te yeni satır eklenip eklenmediğini kontrol edin

---

## Ortam Değişkenleri Özeti

| Değişken | Açıklama | Nereden Alınır |
|----------|----------|----------------|
| `TELEGRAM_BOT_TOKEN` | Telegram bot token | @BotFather |
| `TELEGRAM_CHAT_ID` | Telegram sohbet ID | /getUpdates API |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Google Apps Script URL | Apps Script dağıtımı |
| `GEMINI_API_KEY` | Google AI API anahtarı | Google AI Studio |
