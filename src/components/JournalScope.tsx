'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function JournalScope() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <p className="text-[14px] text-[#DB0D15] font-semibold mb-3 tracking-wide">
              Dergi Amacı ve Kapsamı
            </p>
            <h2 className="text-[32px] font-bold text-[#111B2B] mb-6">
              Profuture Teknoloji Dergisi
            </h2>
            <p className="text-[16px] text-[#676A73] leading-[1.8] mb-8">
              Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
            </p>
            
            <button className="inline-flex items-center gap-3 border border-gray-200 px-6 py-3 rounded-full text-[14px] font-semibold text-[#111B2B] hover:border-[#273D89] hover:text-[#273D89] transition-all">
              Detay
              <Icon name="arrow-right" size={18} />
            </button>
          </div>

          {/* Right - Magazine Preview */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Magazine Card */}
              <div className="relative w-[320px] h-[420px] bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 rotate-[4deg]">
                {/* Header */}
                <div className="bg-[#111B2B] text-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-white flex items-center justify-center">
                      <span className="text-[#111B2B] text-xs font-bold">P</span>
                    </div>
                    <span className="text-[16px] font-bold">profuture</span>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="relative h-[250px] bg-gradient-to-br from-[#111B2B] to-[#273D89] flex items-center justify-center overflow-hidden">
                   <Image src="/icons/Mask group.svg" alt="Cover Visual" fill className="object-cover opacity-80" />
                </div>

                {/* Title */}
                <div className="p-4 bg-white">
                  <div className="bg-[#111B2B] rounded-lg py-4 px-2 text-white text-center">
                    <p className="text-[12px] font-bold tracking-wider">VERİ ODAKLI MEKANİZMALARI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
