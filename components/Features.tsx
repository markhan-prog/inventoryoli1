
import React from 'react';

const Features: React.FC = () => {
  const steps = [
    {
      title: "Saha Ekibiyle Tanışın",
      desc: "Inventory Oli uzmanları kliniğinizi ziyaret eder. Mevcut raf düzeninizi ve depo akışınızı analiz ederiz.",
      icon: "👥"
    },
    {
      title: "Sıfırdan Tam Sayım",
      desc: "Tüm ürünleri tek tek sayıyor, son kullanma tarihlerini kontrol ediyor ve sisteme eksiksiz giriyoruz.",
      icon: "📋"
    },
    {
      title: "Dijital Dönüşüm",
      desc: "Tedarikçi verilerini ve VBYS (Veteriner Bilgi Yönetim Sistemi) entegrasyonlarını saniyeler içinde tamamlıyoruz.",
      icon: "🚀"
    },
    {
      title: "Kusursuz Takip",
      desc: "Siz sadece kliniğinizi yönetin; stok hareketlerini Oli otomatik olarak izler ve kritik seviyelerde sizi uyarır.",
      icon: "📈"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">NASIL ÇALIŞIYORUZ?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Anahtar Teslim Stok Kurulumu</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Biz bir "yazılım satıcısı" değiliz, biz sizin operasyonel ortağınızız. Kurulumu biz yapıyoruz, size sadece yönetmek kalıyor.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start group">
                <div className="z-10 flex-shrink-0 w-16 h-16 bg-white border-2 border-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-6 transition-transform">
                  {step.icon}
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all flex-grow">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
