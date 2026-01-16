'use client';

import Icon from './Icon';

export default function CallForPapers() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#E8F4FC] to-[#D4EDFC]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Left - Magazine Preview */}
          <div className="flex-shrink-0">
            <div className="relative w-[160px] h-[210px] bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#0A1742] text-white px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-white flex items-center justify-center">
                    <span className="text-[var(--primary-blue)] text-[7px] font-bold">P</span>
                  </div>
                  <span className="text-[10px] font-bold">profuture</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center p-3 h-[calc(100%-44px)]">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-red)]/10 flex items-center justify-center mb-2">
                  <Icon name="promotion" size={20} />
                </div>
                <p className="text-[9px] text-[var(--text-secondary)] text-center">Makale Çağrısı</p>
                <p className="text-[10px] font-bold text-[var(--primary-blue)] text-center mt-0.5">Dijital Veri</p>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--accent-red)]"></div>
            </div>
          </div>

          {/* Center - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full mb-3 shadow-sm">
              <Icon name="promotion" size={14} />
              <span className="text-[10px] font-semibold text-[var(--accent-red)]">Makale Çağrısı</span>
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-[var(--text-dark)] mb-3">
              Türkiye Ulusal Dijital Veri ve Altyapıları
            </h3>
            
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 max-w-md">
              Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zeka uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı akademik çalışmalar değerlendirilecektir.
            </p>

            <button className="inline-flex items-center gap-2 bg-[var(--accent-red)] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#b50a11] transition-colors">
              Makaleye Gönderi
              <Icon name="arrow-right" size={14} className="invert" />
            </button>
          </div>

          {/* Right - Second Magazine */}
          <div className="flex-shrink-0">
            <div className="relative w-[180px] h-[230px] bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#0A1742] text-white px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-white flex items-center justify-center">
                    <span className="text-[var(--primary-blue)] text-[7px] font-bold">P</span>
                  </div>
                  <span className="text-[10px] font-bold">profuture</span>
                </div>
                <span className="text-[7px] bg-[var(--accent-green)] px-1.5 py-0.5 rounded font-medium">6. SAYI</span>
              </div>
              
              {/* Visual - Light blue background with tech */}
              <div className="relative h-[90px] bg-gradient-to-br from-[#E8F4FC] to-[#D4EDFC] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-blue)]/10 flex items-center justify-center">
                  <Icon name="Target" size={24} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-3">
                <div className="text-center">
                  <p className="text-[9px] text-[var(--accent-red)] font-semibold mb-0.5">Bilgi ve Teknoloji</p>
                  <p className="text-[9px] text-[var(--accent-red)] font-semibold mb-0.5">Araştırmaları</p>
                  <p className="text-[10px] font-bold text-[var(--primary-blue)]">Makale Çağrısı</p>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--accent-red)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
