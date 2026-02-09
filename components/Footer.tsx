
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold">Inventory Oli</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Veteriner klinikleri için modern stok yönetiminin adresi. Teknolojiyi saha gücüyle birleştirip veteriner hekimlerin hizmetine sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Saha Kurulum Süreci</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Yazılım ve Ücretlendirme</a></li>
              <li><a href="#waitlist" className="hover:text-blue-400 transition-colors">Kurulum Randevusu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Kaynaklar</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Veteriner Lojistiği</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Eğitimler</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">İletişim</h4>
            <div className="space-y-4">
              <a href="#waitlist" className="block w-full bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all text-center">
                Bekleme Listesine Katıl
              </a>
              <button className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all">
                Giriş Yap
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
          </div>
          <div>
            © 2024 Inventory Oli. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
