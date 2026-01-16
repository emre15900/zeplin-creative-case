'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111B2B] min-h-[550px] flex items-center">
      {/* Background - World Map and Lock */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/icons/World.svg" 
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
              <h1 className="text-[36px] md:text-[42px] font-bold leading-tight mb-6">
                Profuture Teknoloji Dergisi <br />
                Son Sayı Yayında
              </h1>
              
              <p className="text-[15px] text-white/80 leading-relaxed mb-8">
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
              <button className="inline-flex items-center gap-3 bg-[#273D89] text-white px-8 py-3.5 rounded-full text-[14px] font-semibold hover:bg-[#1a2d6b] transition-all">
                Dergiyi Görüntüle
                <Icon name="arrow-right" size={18} className="invert" />
              </button>
            </div>
          </div>

          {/* Right Content - Magazine Cover */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Magazine Cover */}
              <div className="relative w-[340px] h-[450px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-[-6deg] transition-transform group-hover:rotate-0 duration-500">
                {/* Magazine Header */}
                <div className="bg-[#111B2B] text-white px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-white flex items-center justify-center">
                      <span className="text-[#111B2B] text-sm font-bold">P</span>
                    </div>
                    <span className="text-[18px] font-bold">profuture</span>
                  </div>
                  <span className="text-sm font-bold opacity-70">07</span>
                </div>
                
                {/* Magazine Visual */}
                <div className="relative h-[280px] bg-gradient-to-br from-[#111B2B] to-[#273D89] flex items-center justify-center">
                  <div className="relative w-full h-full p-4">
                    <Image src="/icons/Mask group-1.svg" alt="Cover Visual" fill className="object-cover opacity-80" />
                  </div>
                  
                  {/* Digital Glow/Network */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border border-cyan-400/20 rounded-full animate-pulse"></div>
                    <div className="absolute w-32 h-32 border border-cyan-400/30 rounded-full"></div>
                  </div>
                </div>

                {/* Magazine Title Area */}
                <div className="p-5 bg-white">
                  <div className="bg-[#111B2B] rounded-lg py-4 px-2 text-white text-center">
                    <p className="text-[14px] font-bold tracking-[0.1em]">VERİ ODAKLI MEKANİZMALARI</p>
                  </div>
                </div>
              </div>

              {/* Decorative side effect */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-[80%] bg-gray-200 rounded-l-lg opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
