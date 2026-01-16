'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111B2B] min-h-[550px] flex items-center">
      {/* Background - World Map and Lock */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/img/slider.svg"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Lock Icon */}
      <div className="absolute top-20 right-[20%] z-0 opacity-20">
        <Icon name="Mask group" size={300} className="invert" />
      </div>

      <div className="container relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="max-w-[500px]">
              <h1 className="text-[36px] md:text-[42px] mb-3! text-white! font-bold leading-tight mb-6">
                Profuture Teknoloji Dergisi <br />
                Son Sayı Yayında
              </h1>

              <p className="text-[15px] text-white/80 mb-3! leading-relaxed mb-8">
                Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-10 text-[14px]">
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
              <button className="inline-flex cursor-pointer mt-5! items-center gap-3 bg-[#273D89] text-white px-5! py-2! rounded-full text-[14px] font-semibold hover:bg-[#1a2d6b] transition-all">
                Dergiyi Görüntüle
                <Icon name="arrow-right" size={16} className="invert max-w-4 max-h-4" />
              </button>
            </div>
          </div>

          {/* Right Content - Magazine Cover */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative w-[340px] mt-5 h-[450px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-[-6deg] transition-transform group-hover:rotate-0 duration-500">
                <Image src="/img/dergison.svg" alt="Cover Visual" fill className="object-cover opacity-80" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
