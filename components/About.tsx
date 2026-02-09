
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1628154764112-25e60975601d?q=80&w=800&auto=format&fit=crop" alt="Veteriner Klinik Operasyonu" className="rounded-2xl shadow-lg transform translate-y-8 object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" alt="Medikal Stok Yönetimi" className="rounded-2xl shadow-lg object-cover h-64 w-full" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl border-4 border-white">
            <div>
              <div className="text-4xl font-bold">30+</div>
              <div className="text-xs font-medium uppercase tracking-widest">Yıllık Saha Tecrübesi</div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold uppercase text-sm tracking-widest mb-4">VİZYONUMUZ</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Veteriner Kliniklerinde "Kayıp Kaçak" Dönemini Kapatıyoruz.</h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Inventory Oli, sadece bir yazılım değil; veteriner hekimlerin klinik operasyonlarını yönetirken karşılaştıkları en büyük soruna, yani <strong>zaman ve veri kaybına</strong> odaklanan bir çözümdür.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Sektörün içinden gelen uzman kadromuzla, manuel stok takibinin getirdiği yorgunluğu ve finansal belirsizliği ortadan kaldırıyoruz. Teknolojiyi saha gücümüzle birleştirerek, Türkiye'deki veteriner kliniklerinin hak ettiği modern envanter standartlarını kuruyoruz.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="text-left">
              <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Klinik Referansı</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-slate-900 mb-1">₺2M+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Engellenen Zarar</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-slate-900 mb-1">%100</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Saha Desteği</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
