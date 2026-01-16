'use client';

import Icon from './Icon';

export default function Hero() {
  return (
    <section 
      className="relative flex items-center z-0 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url(/img/slider.svg)', 
        backgroundPosition: "bottom",
        height: '600px'
      }}
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="max-w-[500px]">
              <h1 className="text-[36px] md:text-[42px] text-white font-bold leading-tight mb-3">
                Profuture Teknoloji Dergisi<br />
                Son Sayı Yayında
              </h1>

              <p className="text-[15px] text-white/80 leading-relaxed mb-6">
                Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-8 text-[14px]">
                <div className="flex items-center gap-2">
                  <Icon name="cilt" size={18} className="invert" />
                  <span>Cilt: <strong>2</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Number" size={18} className="invert" />
                  <span>Sayı: <strong>7</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="calendar" size={18} className="invert" />
                  <span>Haziran 2023</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="inline-flex cursor-pointer items-center gap-3 bg-[#273D89] text-white px-6 py-4 rounded-full text-[14px] font-semibold hover:bg-[#1a2d6b] transition-all">
                Dergiyi Görüntüle
                <Icon name="right" size={16} className="invert max-w-4 max-h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
