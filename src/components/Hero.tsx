'use client';

import Icon from './Icon';
import ToggleGroup from './ui/ToggleGroup';

const filterOptions = [
  { id: 'all', label: 'Tümü' },
  { id: 'research', label: 'Araştırma Makalesi' },
  { id: 'review', label: 'İnceleme Makalesi' },
  { id: 'essay', label: 'Deneme' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0A1742 0%, #273D89 50%, #3d5aa9 100%)',
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Left Content */}
        <div className="flex-1 text-white opacity-0 animate-fade-in-up">
          <div className="space-y-6 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Yeni Sayı Yayında</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Profuture Teknoloji Dergisi
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Teknoloji mekanizmaları ve dijital dönüşüm alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="cilt" size={18} className="invert opacity-70" />
                <span>Cilt: 2</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Number" size={18} className="invert opacity-70" />
                <span>Sayı: 7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="calendar" size={18} className="invert opacity-70" />
                <span>Haziran 2025</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="btn-view">
                <Icon name="eye" size={18} className="invert" />
                Dergiyi Görüntüle
              </button>
              <button className="btn-submit">
                Gönder
                <Icon name="arrow-right" size={18} className="invert" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Magazine Cover */}
        <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-slide-in-right delay-300">
          <div className="relative">
            {/* Magazine Shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 blur-2xl rounded-full"></div>
            
            {/* Magazine Cover */}
            <div className="relative w-[300px] md:w-[340px] h-[420px] md:h-[480px] bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-2xl overflow-hidden">
              {/* Magazine Header */}
              <div className="bg-[var(--primary-blue-dark)] text-white p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                    <span className="text-[var(--primary-blue)] text-xs font-bold">P</span>
                  </div>
                  <span className="text-lg font-bold">profuture</span>
                </div>
                <p className="text-xs opacity-70">Teknoloji ve Dijital Dergisi</p>
              </div>
              
              {/* Magazine Content */}
              <div className="p-5 space-y-4">
                <div className="h-32 bg-gradient-to-br from-[var(--primary-blue)]/10 to-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-[var(--primary-blue)]/10 flex items-center justify-center">
                      <Icon name="World" size={28} />
                    </div>
                    <p className="text-sm font-medium text-[var(--primary-blue)]">DİJİTAL DÖNÜŞÜM</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                  <div className="h-2.5 bg-slate-200 rounded-full w-4/5"></div>
                  <div className="h-2.5 bg-slate-200 rounded-full w-3/5"></div>
                </div>
                
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Icon name="cilt" size={14} />
                    <span>Cilt: 2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Number" size={14} />
                    <span>Sayı: 7</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="calendar" size={14} />
                    <span>Haz 2025</span>
                  </div>
                </div>
              </div>
              
              {/* Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--accent-red)]"></div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-3 -right-3 bg-[var(--accent-green)] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              YENİ
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--background)] py-6">
        <div className="container">
          <ToggleGroup options={filterOptions} defaultValue="all" />
        </div>
      </div>
    </section>
  );
}
