import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly as a named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAiStockInsights = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sen bir veteriner stok yönetimi uzmanısın. Kullanıcının şu sorusuna veya verisine dayanarak veteriner kliniği için stok optimizasyonu tavsiyesi ver: "${userInput}". 
      Cevabını profesyonel bir Türk iş dünyası diliyle ver. Kısa ve öz olsun.`,
      config: {
        temperature: 0.7,
        // Recommendation: Avoid setting maxOutputTokens if not required to prevent blocked responses
      }
    });

    // response.text is a property, not a method
    return response.text || "Üzgünüm, şu an bir yanıt oluşturamıyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI servisine bağlanırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
  }
};