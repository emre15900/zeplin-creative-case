'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function JournalScope() {
  return (
    <section id="amac-kapsam" className="relative pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 bg-white overflow-hidden lg:overflow-visible lg:-mt-8 z-10">
      {/* Anchor for Etik İlkeler */}
      <div id="etik-ilkeler" className="absolute -top-[135px]" />
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="flex-1 max-w-full lg:max-w-[711px] flex flex-col gap-[13px]">
            {/* Title Group */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-[16px] sm:text-[18px] text-[#676A73] font-normal">
                Dergi Amacı ve Kapsamı
              </p>
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#273D89]">
                Profuture Teknoloji Dergisi
              </h2>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] text-[#2A2C31] leading-[1.7] sm:leading-[1.8]">
              Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
            </p>

            {/* Button */}
            <button className="inline-flex mt-6 sm:mt-10 items-center gap-[10px] border border-[#ACB1C6] px-[15px] py-[14px] sm:py-[16.5px] rounded-[50px] text-[14px] sm:text-[16px] font-normal text-[#2A2C31] hover:border-[#273D89] hover:text-[#273D89] transition-all w-[130px] sm:w-[150px] h-[50px] sm:h-[55px] justify-center cursor-pointer">
              <span>Detay</span>
              <Icon name="right" size={16} />
            </button>
          </div>

          {/* Right - Magazine Image - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:flex flex-1 justify-end relative">
            <div className="relative w-[739px] h-[696px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.18)] -mt-[280px]">
              <Image
                src="/img/journal-scope.svg"
                alt="Profuture Teknoloji Dergisi"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
