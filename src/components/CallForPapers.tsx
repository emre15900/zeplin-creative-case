'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function CallForPapers() {
  return (
    <section className="py-12 bg-[#E8F4FC]">
      <div className="container">
        <div className="relative bg-white/20 rounded-[32px] p-8 lg:p-12 overflow-hidden border border-white/30 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left - Grid of Topics */}
            <div className="grid grid-cols-2 gap-4 lg:w-[400px]">
               <div className="relative group">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transform transition-transform group-hover:-translate-y-1">
                    <span className="text-[14px] font-bold text-[#273D89]">01</span>
                    <p className="text-[12px] font-bold text-[#111B2B] text-center">YAPAY ZEKA</p>
                  </div>
               </div>
               <div className="relative group mt-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transform transition-transform group-hover:-translate-y-1">
                    <span className="text-[14px] font-bold text-[#273D89]">02</span>
                    <p className="text-[12px] font-bold text-[#111B2B] text-center">BLOCKCHAIN</p>
                  </div>
               </div>
               <div className="relative group">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transform transition-transform group-hover:-translate-y-1">
                    <span className="text-[14px] font-bold text-[#273D89]">03</span>
                    <p className="text-[12px] font-bold text-[#111B2B] text-center">AKILLI SİSTEMLER</p>
                  </div>
               </div>
               <div className="relative group mt-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transform transition-transform group-hover:-translate-y-1">
                    <span className="text-[14px] font-bold text-[#273D89]">04</span>
                    <p className="text-[12px] font-bold text-[#111B2B] text-center">VERİ ANALİTİĞİ</p>
                  </div>
               </div>
            </div>

            {/* Middle - Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-12 h-12 bg-[#DB0D15] rounded-xl flex items-center justify-center transform rotate-12">
                   <Icon name="promotion" size={24} className="invert" />
                </div>
              </div>
              
              <p className="text-[14px] text-[#676A73] font-semibold mb-2">Makale Çağrısı</p>
              <h3 className="text-[28px] lg:text-[34px] font-bold text-[#111B2B] mb-6 leading-tight">
                Türkiye Ulusal Dijital Veri ve <br className="hidden lg:block" /> Altyapıları
              </h3>
              
              <p className="text-[15px] text-[#676A73] leading-relaxed mb-8 max-w-[500px]">
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zeka uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı akademik çalışmalar değerlendirilecektir.
              </p>

              <button className="inline-flex items-center gap-3 bg-[#DB0D15] text-white px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-[#b50a11] transition-all">
                Makale Gönder
                <Icon name="arrow-right" size={18} className="invert" />
              </button>
            </div>

            {/* Right - Cover Image */}
            <div className="lg:w-[300px] flex-shrink-0">
               <div className="relative w-[280px] h-[360px] bg-[#111B2B] rounded-[24px] overflow-hidden shadow-2xl">
                  {/* Magazine Header */}
                  <div className="p-4 flex items-center justify-between text-white border-b border-white/10">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                         <span className="text-[#111B2B] text-[10px] font-bold">P</span>
                       </div>
                       <span className="text-[14px] font-bold">profuture</span>
                    </div>
                    <span className="text-[10px] font-bold opacity-60">8. SAYI</span>
                  </div>

                  {/* Magazine Content */}
                  <div className="p-8 text-center flex flex-col items-center justify-center h-[calc(100%-60px)]">
                     <h4 className="text-[18px] font-bold text-white mb-2 leading-tight">Bilgi ve Teknoloji</h4>
                     <h4 className="text-[18px] font-bold text-white mb-6 leading-tight">Araştırmaları</h4>
                     <div className="bg-[#DB0D15]/20 text-[#DB0D15] px-4 py-1 rounded-full text-[12px] font-bold mb-8">
                        Makale Çağrısı
                     </div>
                     <p className="text-[10px] text-white/40 mt-auto">Makale son gönderi tarihi 1 Aralık 2023</p>
                  </div>
                  
                  {/* Digital Line Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#DB0D15]"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
