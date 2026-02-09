import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>('buyume');

  const handleScrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      id: 'temel',
      name: "Temel Paket",
      spend: "0 - 100.000 TL",
      price: "2.500 TL",
      desc: "Aylık stok harcaması 100.000 TL'ye kadar olan klinikler için ideal.",
      popular: false,
      features: [
        "Otomatik Tedarikçi Entegrasyonu",
        "Sınırsız Kullanıcı ve Hekim",
        "Kritik Stok Uyarıları",
        "7/24 Saha ve Canlı Destek",
        "Temel Raporlar"
      ]
    },
    {
      id: 'buyume',
      name: "Büyüme Paketi",
      spend: "100.001 - 500.000 TL",
      price: "4.500 TL",
      desc: "Aylık stok harcaması 100.001 - 500.000 TL arası olan klinikler için ideal.",
      popular: true,
      features: [
        "Otomatik Tedarikçi Entegrasyonu",
        "Sınırsız Kullanıcı ve Hekim",
        "Kritik Stok Uyarıları",
        "7/24 Saha ve Canlı Destek",
        "Gelişmiş Raporlar & Analitics",
        "AI Stok Asistanı",
        "Mobil Uygulama Erişimi"
      ]
    },
    {
      id: 'profesyonel',
      name: "Profesyonel Paket",
      spend: "500.000 TL +",
      price: "8.500 TL",
      desc: "Aylık stok harcaması 500.000 TL ve üzeri olan büyük ölçekli klinikler için ideal.",
      popular: false,
      features: [
        "Otomatik Tedarikçi Entegrasyonu",
        "Sınırsız Kullanıcı ve Hekim",
        "Kritik Stok Uyarıları",
        "7/24 Saha ve Canlı Destek",
        "Gelişmiş Raporlar & Analitics",
        "AI Stok Asistanı",
        "Mobil Uygulama Erişimi",
        "Özel Entegrasyonlar",
        "Dedicated Account Manager",
        "Priority Support"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
          Harcamanıza Göre Ölçeklenen Şeffaf Fiyatlandırma
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Fiyatlarımız, kliniğinizin aylık ortalama stok harcamasına göre belirlenir. 
          Böylece yazılım maliyeti, iş hacminizle her zaman orantılı kalır. <strong>İlk sayım ve kurulum ücretsizdir.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {tiers.map((tier) => (
          <div 
            key={tier.id}
            onClick={() => setSelectedTier(tier.id)}
            className={`flex flex-col p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              selectedTier === tier.id
                ? tier.popular 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200 scale-105 z-10 ring-2 ring-blue-800' 
                  : 'bg-white border-blue-500 text-slate-900 shadow-xl ring-2 ring-blue-500'
                : tier.popular 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200 scale-105 z-10' 
                  : 'bg-white border-slate-200 text-slate-900 hover:border-blue-300 hover:shadow-lg'
            }`} 
          >
            {tier.popular && (
              <div className={`text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-4 ${
                selectedTier === tier.id 
                  ? 'bg-blue-700 text-blue-100' 
                  : 'bg-white text-blue-600'
              }`}> 
                En Popüler
              </div>
            )} 
            
            <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
            
            <div className={`text-3xl font-black mb-1 ${
              selectedTier === tier.id 
                ? tier.popular ? 'text-white' : 'text-blue-600'
                : tier.popular ? 'text-white' : 'text-blue-600'
            }`}> 
              {tier.price} <span className="text-sm font-normal opacity-70">/ Ay</span>
            </div>
            
            <div className={`text-xs font-bold mb-6 uppercase tracking-wider ${
              selectedTier === tier.id
                ? tier.popular ? 'text-blue-100' : 'text-blue-400'
                : tier.popular ? 'text-blue-100' : 'text-slate-400'
            }`}> 
              Harcama Aralığı: {tier.spend}
            </div>
            
            <p className={`text-sm mb-6 leading-relaxed ${
              selectedTier === tier.id
                ? tier.popular ? 'text-blue-50' : 'text-slate-600'
                : tier.popular ? 'text-blue-50' : 'text-slate-500'
            }`}> 
              {tier.desc}
            </p>

            <div className="mb-8 flex-grow">
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                selectedTier === tier.id
                  ? tier.popular ? 'text-blue-200' : 'text-blue-600'
                  : tier.popular ? 'text-blue-200' : 'text-slate-500'
              }`}> 
                Bu Paket Dahil:
              </p>
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      selectedTier === tier.id
                        ? tier.popular 
                          ? 'bg-blue-400 text-blue-900' 
                          : 'bg-blue-100 text-blue-600'
                        : tier.popular 
                          ? 'bg-blue-400 text-blue-900' 
                          : 'bg-green-100 text-green-600'
                    }`}> 
                      ✓
                    </div>
                    <span className={`text-sm ${
                      selectedTier === tier.id
                        ? tier.popular ? 'text-blue-50' : 'text-slate-700'
                        : tier.popular ? 'text-blue-50' : 'text-slate-600'
                    }`}> 
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-6">
              <a 
                href="#waitlist"
                onClick={handleScrollToWaitlist}
                className={`block w-full py-4 rounded-2xl text-center font-bold transition-all duration-300 ${
                  selectedTier === tier.id
                    ? tier.popular 
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : tier.popular 
                      ? 'bg-white text-blue-600 hover:bg-blue-50' 
                      : 'bg-slate-900 text-white hover:bg-blue-600 shadow-xl'
                }`}
              >
                {selectedTier === tier.id ? '✓ Seçildi - Sırada Yer Al' : 'Paketi Seç'}
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedTier && (
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-[2rem] border border-blue-200 p-8 mb-12 text-center">
          <p className="text-slate-700 mb-2">
            <span className="font-bold text-blue-600">Seçilen Paket:</span> {tiers.find(t => t.id === selectedTier)?.name}
          </p>
          <p className="text-slate-600 text-sm">
            Bekleme listesine katılırken bu paket otomatik seçilecektir.
          </p>
        </div>
      )}

      <div className="mt-12 bg-white rounded-[3rem] border border-slate-100 p-10 md:p-16 shadow-sm max-w-5xl mx-auto">
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