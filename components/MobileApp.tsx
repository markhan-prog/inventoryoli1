
import React from 'react';

const MobileApp: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-slate-900 rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
          </svg>
        </div>

        <div className="md:w-1/2 text-white z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            MOBİL ERİŞİM
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Inventory Oli <br/><span className="text-blue-400">Her An Yanınızda.</span></h3>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Kliniğinizin deposuna girdiğinizde bilgisayar başında olmanıza gerek yok. <strong>Hap Sayacı</strong> özelliğimizle ürünleri telefon kamerasından okutun, adetleri güncelleyin ve eksik listesini yoldayken kontrol edin.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-white text-slate-900 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-100 transition-all shadow-lg">
              <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.22-.312L12.51 12 3.39 2.126a1.01 1.01 0 01.219-.312zM14.735 12.947l3.959-3.959c.586-.586.586-1.535 0-2.121a1.503 1.503 0 00-2.122 0l-3.958 3.958 2.121 2.122zM12.51 12l2.121 2.121-1.06 1.061-2.122-2.122L12.51 12z" />
              </svg>
              Google Play
            </a>
            <a href="#" className="bg-slate-800 text-white px-6 py-4 rounded-2xl font-bold border border-slate-700 flex items-center gap-3 hover:bg-slate-700 transition-all shadow-lg">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.11 1.09-3.33-1.04.04-2.3.69-3.05 1.56-.67.77-1.26 2.03-1.1 3.21 1.16.09 2.34-.55 3.06-1.44z" />
              </svg>
              App Store
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center z-10">
          <div className="relative w-64 md:w-80 h-[500px] md:h-[600px] bg-slate-800 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-800 rounded-b-2xl z-20"></div>
            <img src="https://images.unsplash.com/photo-1512428559083-a400a6bf5954?q=80&w=800&auto=format&fit=crop" alt="Mobile UI" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
              <div className="bg-blue-600 p-5 rounded-2xl mb-4 transform translate-y-0 shadow-lg border border-blue-400/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-100">Hap Sayacı Modu</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-black text-white">142 Adet</div>
                <div className="text-[10px] text-blue-100 font-medium">Antibiyotik - Tablet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs text-white/70">
                Envanter anlık olarak güncellendi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
