'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="relative pt-[108px] overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0A1742 0%, #1a2d6b 40%, #273D89 80%, #3d5aa9 100%)',
        }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full border border-cyan-400/10 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full border border-cyan-400/10 opacity-30"></div>
        
        {/* Glow effects */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-cyan-400/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-10 lg:py-14 min-h-[520px]">
        {/* Left Content */}
        <div className="flex-1 text-white opacity-0 animate-fade-in-up">
          <div className="space-y-4 max-w-[430px]">
            <p className="text-[13px] text-white/80 font-medium">
              Profuture Teknoloji Dergisi
            </p>
            <h1 className="text-[34px] md:text-[38px] font-bold leading-[44px] text-white">
              Son Sayı Yayında
            </h1>
            
            <p className="text-[13px] text-white/60 leading-relaxed">
              Profuture teknoloji mekanizmaları ve dijital dönüşüm alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-white/50 text-[12px] pt-2">
              <div className="flex items-center gap-1.5">
                <Icon name="cilt" size={14} className="invert opacity-60" />
                <span>Cilt: 2</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="Number" size={14} className="invert opacity-60" />
                <span>Sayı: 7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="calendar" size={14} className="invert opacity-60" />
                <span>Haziran 2025</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-full text-[13px] font-medium hover:bg-white/20 transition-all">
                <Icon name="eye" size={16} className="invert" />
                Dergiyi Görüntüle
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Magazine Cover */}
        <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-slide-in-right delay-300">
          <div className="relative">
            {/* Magazine Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/40 blur-2xl rounded-full"></div>
            
            {/* Magazine Cover */}
            <div className="relative w-[260px] md:w-[310px] h-[360px] md:h-[410px] bg-white rounded-xl shadow-2xl overflow-hidden rotate-[-4deg]">
              {/* Magazine Header */}
              <div className="bg-[#0A1742] text-white px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                    <span className="text-[var(--primary-blue)] text-xs font-bold">P</span>
                  </div>
                  <span className="text-sm font-bold">profuture</span>
                </div>
              </div>
              
              {/* Magazine Content - Tech visual */}
              <div className="relative h-[210px] md:h-[240px] bg-gradient-to-br from-[#0A1742] via-[#1a2d6b] to-[#273D89] flex items-center justify-center overflow-hidden">
                {/* Tech decoration - hourglass/globe */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-cyan-400/15"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-cyan-400/15"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-cyan-400/10"></div>
                </div>

                {/* Globe visual */}
                <div className="relative z-10 w-[160px] h-[160px]">
                  <Image src="/globe.svg" alt="Dijital küre" fill className="object-contain opacity-90" />
                </div>
              </div>

              {/* Magazine Title Area */}
              <div className="p-4 bg-white">
                <div className="bg-[#0A1742] rounded-lg p-3 text-white text-center">
                  <p className="text-[9px] uppercase tracking-wider opacity-60 mb-0.5">VERİ ODAKLI</p>
                  <p className="text-sm font-bold tracking-wide">MEKANİZMALAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
