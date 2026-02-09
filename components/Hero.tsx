import React from 'react';

const Hero: React.FC = () => {
  const waitDate = new Date();
  waitDate.setMonth(waitDate.getMonth() + 2);
  const formattedDate = waitDate.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });

  const handleScrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Dekoratif Arka Plan */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold mb-8">
          <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
          İLK SAYIM BİZDEN: KAPASİTE SINIRLI
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 max-w-5xl mx-auto text-balance">
          Stok Saymayı Sizden İstemiyoruz. <br/>
          <span className="text-blue-600">Biz Gelip Sayıyoruz.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Envanter tutacak personeliniz yok, biliyoruz. <strong>Inventory Oli</strong> ekibi kliniğinize gelir, tüm ilaç ve sarf malzemelerinizi sayar, sisteme girer. İlk sayım ve kurulum tamamen ücretsizdir.
        </p>
        
        <div className="bg-slate-900 text-white p-6 rounded-3xl max-w-2xl mx-auto mb-12 shadow-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Kurulum Takvimi Durumu</span>
              <p className="text-xl font-bold text-orange-400">En Yakın Kurulum: {formattedDate}</p>
            </div>
            <a 
              href="#waitlist" 
              onClick={handleScrollToWaitlist}
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Bekleme Listesine Katıl
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm font-medium text-slate-500">
          <div className="flex items-center justify-center gap-2">✓ Saha Ekibi Desteği</div>
          <div className="flex items-center justify-center gap-2">✓ Ücretsiz İlk Sayım</div>
          <div className="flex items-center justify-center gap-2">✓ Depo API Entegrasyonu</div>
          <div className="flex items-center justify-center gap-2">✓ Sıfır Manuel Veri Girişi</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;