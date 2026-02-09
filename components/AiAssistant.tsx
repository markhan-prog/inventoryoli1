
import React, { useState } from 'react';
import { getAiStockInsights } from '../services/gemini';

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await getAiStockInsights(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 text-white">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              AI ÖZELLİĞİ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stok Asistanı ile Akıllı Analiz</h2>
            <p className="text-blue-100 mb-8 opacity-80 leading-relaxed">
              Verilerinizdeki kalıpları görmek için AI asistanımıza sorular sorun. Örneğin: "Yaz aylarında kene ilacı stoklarımı nasıl optimize edebilirim?"
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Bir soru sorun..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-white text-blue-900 px-6 rounded-xl font-bold hover:bg-blue-50 transition-all disabled:opacity-50"
              >
                {loading ? 'Analiz Ediliyor...' : 'Gönder'}
              </button>
            </form>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-slate-900/50 rounded-2xl p-6 min-h-[250px] border border-white/10 relative overflow-hidden">
              {!response && !loading && (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-40">
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <p>AI Analizi burada görünecek</p>
                </div>
              )}
              {loading && (
                <div className="flex flex-col gap-4">
                  <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/5 rounded-full w-full animate-pulse"></div>
                  <div className="h-4 bg-white/5 rounded-full w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-white/5 rounded-full w-1/2 animate-pulse"></div>
                </div>
              )}
              {response && (
                <div className="prose prose-invert max-w-none">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold">AI</div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Analiz Sonucu</span>
                  </div>
                  <p className="text-blue-50 leading-relaxed whitespace-pre-wrap">{response}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
