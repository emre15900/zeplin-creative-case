'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function JournalScope() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-0">
          {/* Left Content */}
          <div className="flex-1 max-w-[711px] flex flex-col gap-[13px]">
            {/* Title Group */}
            <div className="flex flex-col gap-3">
              <p className="text-[18px] text-[#676A73] font-normal">
                Dergi Amacı ve Kapsamı
              </p>
              <h2 className="text-[20px] font-semibold text-[#273D89]">
                Profuture Teknoloji Dergisi
              </h2>
            </div>

            {/* Description */}
            <p className="text-[16px] text-[#2A2C31] leading-[1.8] max-w-[711px]">
              Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-[10px] border border-[#ACB1C6] px-[15px] py-[16.5px] rounded-[50px] text-[16px] font-normal text-[#2A2C31] hover:border-[#273D89] hover:text-[#273D89] transition-all w-[150px] h-[55px] justify-center">
              <span>Detay</span>
              <Icon name="right" size={16} />
            </button>
          </div>

          {/* Right - Magazine Image */}
          <div className="flex-1 flex justify-end relative">
            <div className="relative w-[739px] h-[696px]">
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
