'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function CallForPapers() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Main Card Container - matching Figma specs */}
        <div 
          className="relative overflow-hidden"
          style={{
            borderRadius: '35px',
            minHeight: '439px',
            backgroundImage: 'url(/img/callforpapaersbg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >

          <div className="relative flex items-center h-full">
            {/* Left - Decorative Image Area */}
            <div className="hidden lg:block w-[514px] h-[439px] flex-shrink-0 relative overflow-hidden">
              <Image
                src="/img/CallForPapersLeft.svg"
                alt="Decorative illustration"
                fill
                className="object-cover object-right"
                priority
              />
            </div>

            {/* Center - Content */}
            <div className="flex-1 py-12 px-8 lg:px-4 text-center">
              {/* Promotion Icon - rotated 30 degrees as per Figma */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ transform: 'rotate(30deg)' }}
                >
                  <Icon name="promotion" size={40} className="text-[#DB0D15]" />
                </div>
              </div>
              
              {/* Subtitle */}
              <p 
                className="text-[16px] font-medium mb-3"
                style={{ color: '#676A73' }}
              >
                Makale Çağrısı
              </p>
              
              {/* Title */}
              <h3 
                className="text-[22px] lg:text-[26px] font-bold mb-8 leading-tight"
                style={{ color: '#273D89' }}
              >
                Türkiye Ulusal Dijital Veri ve Altyapıları
              </h3>
              
              {/* Description */}
              <p 
                className="text-[15px] leading-[25px] mb-8 max-w-[555px] mx-auto"
                style={{ color: '#2A2C31' }}
              >
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
              </p>

              {/* CTA Button - pill shape with 50px radius */}
              <button 
                className="inline-flex items-center cursor-pointer justify-center gap-2.5 text-white px-6 py-4 text-[16px] font-semibold hover:opacity-90 transition-all"
                style={{ 
                  backgroundColor: '#DB0D15',
                  borderRadius: '50px',
                  minWidth: '200px'
                }}
              >
                <span>Makale Gönder</span>
                <Icon name="right" size={16} className="invert" />
              </button>
            </div>

            {/* Right - Magazine Cover */}
            <div className="hidden lg:block w-[306px] flex-shrink-0 relative self-start -mt-[25px]">
              <div 
                className="relative w-[306px] h-[465px] overflow-hidden"
                style={{
                  borderRadius: '27px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)'
                }}
              >
                <Image
                  src="/img/CallForPapersRight.svg"
                  alt="Dergi Kapağı"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Magazine Cover */}
          <div className="lg:hidden flex justify-center pb-8 px-8">
            <div 
              className="relative w-[240px] h-[365px] overflow-hidden"
              style={{
                borderRadius: '27px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)'
              }}
            >
              <Image
                src="/img/CallForPapersRight.svg"
                alt="Dergi Kapağı"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
