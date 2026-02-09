
import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">GERÇEKLERLE YÜZLEŞELİM</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Neden Stok Tutamıyorsunuz?</h3>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
          Türkiye'deki kliniklerin %90'ında envanterin düzgün tutulmamasının sebebi yazılım eksikliği değil, <strong>insan ve zaman eksikliğidir.</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 font-bold text-2xl">01</div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">İlk Sayım Bir Eziyettir</h4>
          <p className="text-slate-600 leading-relaxed">
            Binlerce kalem ürünü tek tek sayıp sisteme girmek kliniğinizdeki kimsenin görevi değil. Bu yüzden o sayım hiç başlamıyor veya yarım kalıyor.
          </p>
        </div>
        
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 font-bold text-2xl">02</div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">Personeliniz Yok, Biliyoruz</h4>
          <p className="text-slate-600 leading-relaxed">
            Teknisyenleriniz ve hekimleriniz zaten operasyonda. Stok yönetimi için ayıracakları 4 saatlik bir mesaileri yok.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 font-bold text-2xl">03</div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">WhatsApp Notları ile Yönetilemez</h4>
          <p className="text-slate-600 leading-relaxed">
            "Hocam kedi maması bitti" mesajları, kağıt-kalem notları kaçınılmaz olarak stok kaçaklarına ve finansal zarara yol açıyor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProps;
