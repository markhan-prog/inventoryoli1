import { GoogleGenAI } from "@google/genai";

// Lazy initialization - sadece kullanıldığında bağlan
let ai: GoogleGenAI | null = null;

const getAi = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
      return null;
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const getAiStockInsights = async (userInput: string) => {
  try {
    const client = getAi();
    if (!client) {
      return "AI servisi şu an yapılandırılmamış. Lütfen yönetici ile iletişime geçin.";
    }

    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sen bir veteriner stok yönetimi uzmanısın. Kullanıcının şu sorusuna veya verisine dayanarak veteriner kliniği için stok optimizasyonu tavsiyesi ver: "${userInput}".
      Cevabını profesyonel bir Türk iş dünyası diliyle ver. Kısa ve öz olsun.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Üzgünüm, şu an bir yanıt oluşturamıyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI servisine bağlanırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
  }
};
