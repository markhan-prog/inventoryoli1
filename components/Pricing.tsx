
import React from 'react';

const Pricing: React.FC = () => {
  const handleScrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      name: "Temel Paket",
      spend: "0 - 15.000 TL",
      price: "1.490 TL",
      desc: "Aylık stok harcaması 15.000 TL'ye kadar olan klinikler için ideal.",
      popular: false
    },
    {
      name: "Büyüme Paketi",
      spend: "15.001 - 35.000 TL",
      price: "1.990 TL",
      desc: "Operasyon hacmi artan, kontrolü sıkılaştırmak isteyen poliklinikler için.",
      popular: true
    },
    {
      name: "Profesyonel Paket",
      spend: "35.001 - 75.000 TL",
      price: "2.490 TL",
      desc: "Yüksek operasyon hacmine sahip hastaneler ve büyük klinikler için.",
      popular: false
    },
    {
      name: "Kurumsal",
      spend: "75.000 TL +",
      price: "2.990 TL",
      desc: "Geniş envanter yönetimi ve çoklu şube desteği arayan kurumlar için.",
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
          Harcamanıza Göre Ölçeklenen Şeffaf Fiyatlandırma
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Fiyatlarımız, kliniğinizin aylık ortalama stok harcamasına (3 aylık hareketli ortalama) göre belirlenir. 
          Böylece yazılım maliyeti, iş hacminizle her zaman orantılı kalır. <strong>İlk sayım ve kurulum ücretsizdir.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col p-8 rounded-[2.5rem] border transition-all duration-300 ${
              tier.popular 
                ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200 scale-105 z-10' 
                : 'bg-white border-slate-200 text-slate-900 hover:border-blue-300'
            }`}
          >
            {tier.popular && (
              <div className="bg-white text-blue-600 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-4">
                En Popüler
              </div>
            )}
            <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
            <div className={`text-3xl font-black mb-1 ${tier.popular ? 'text-white' : 'text-blue-600'}`}>
              {tier.price} <span className="text-sm font-normal opacity-70">/ Ay</span>
            </div>
            <div className={`text-xs font-bold mb-6 uppercase tracking-wider ${tier.popular ? 'text-blue-100' : 'text-slate-400'}`}>
              Harcama Aralığı: {tier.spend}
            </div>
            <p className={`text-sm mb-8 leading-relaxed ${tier.popular ? 'text-blue-50' : 'text-slate-500'}`}>
              {tier.desc}
            </p>
            
            <div className="mt-auto">
              <a 
                href="#waitlist"
                onClick={handleScrollToWaitlist}
                className={`block w-full py-4 rounded-2xl text-center font-bold transition-all ${
                  tier.popular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-slate-900 text-white hover:bg-blue-600 shadow-xl'
                }`}
              >
                Hemen Başlayın
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-white rounded-[3rem] border border-slate-100 p-10 md:p-16 shadow-sm max-w-5xl mx-auto">
        <h5 className="text-2xl font-bold text-slate-900 mb-10 text-center">Tüm Paketlere Dahil Olan Standart Özellikler:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 text-xs">✓</div>
            <div>
              <p className="font-bold text-slate-900">Otomatik Tedarikçi Entegrasyonu</p>
              <p className="text-sm text-slate-500">Faturalar ve siparişler otomatik sisteme işlenir.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 text-xs">✓</div>
            <div>
              <p className="font-bold text-slate-900">Sınırsız Kullanıcı ve Hekim</p>
              <p className="text-sm text-slate-500">Tüm ekibiniz ek ücret ödemeden erişim sağlayabilir.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 text-xs">✓</div>
            <div>
              <p className="font-bold text-slate-900">Kritik Stok Uyarıları</p>
              <p className="text-sm text-slate-500">Ürünleriniz bitmeden bildirim alırsınız.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 text-xs">✓</div>
            <div>
              <p className="font-bold text-slate-900">7/24 Saha ve Canlı Destek</p>
              <p className="text-sm text-slate-500">Herhangi bir sorunda Oli ekibi bir telefon uzağınızda.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
