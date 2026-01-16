'use client';

import Image from 'next/image';
import Icon from './Icon';

export default function JournalScope() {
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <p className="text-[12px] text-[var(--accent-red)] font-medium mb-2">
              Dergi Amacı ve Kapsamı
            </p>
            <h2 className="text-[26px] font-bold text-[var(--primary-blue)] mb-4">
              Profuture Teknoloji Dergisi
            </h2>
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-6">
              Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan teknoloji, inovasyon, dijital dönüşüm ve gelecekteki iş modelleri sektörlerinde kaynak eserlerle bilimsel çalışmalar yayımlayan ve her türkiye&apos;nin bir dijital dönüşüm ekosisteminin bulunduğu yer olan akademik yayındır.
            </p>
            
            <button className="inline-flex items-center gap-2 border border-[var(--border-light)] px-4 py-2.5 rounded-full text-[13px] font-medium text-[var(--text-primary)] hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] transition-all">
              Detay
              <Icon name="arrow-right" size={16} />
            </button>
          </div>

          {/* Right - Magazine Preview */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[380px]">
              {/* Magazine Card */}
              <div className="absolute right-0 top-2 w-[250px] h-[330px] bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 rotate-[-3deg]">
                {/* Header */}
                <div className="bg-[#0A1742] text-white px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                      <span className="text-[var(--primary-blue)] text-xs font-bold">P</span>
                    </div>
                    <span className="text-sm font-bold">profuture</span>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="relative h-[170px] bg-gradient-to-br from-[#0A1742] via-[#1a2d6b] to-[#273D89] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-cyan-400/15"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-cyan-400/15"></div>
                  </div>
                  <div className="relative z-10 w-[120px] h-[120px]">
                    <Image src="/globe.svg" alt="Dijital küre" fill className="object-contain opacity-90" />
                  </div>
                </div>

                {/* Title */}
                <div className="p-3 bg-white">
                  <div className="bg-[#0A1742] rounded-lg p-2.5 text-white text-center">
                    <p className="text-[8px] uppercase tracking-wider opacity-60 mb-0.5">VERİ ODAKLI</p>
                    <p className="text-xs font-bold">MEKANİZMALAR</p>
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
