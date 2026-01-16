'use client';

import Icon from './Icon';

export default function CallForPapers() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="bg-gradient-to-r from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Magazine Preview */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Background */}
                <div className="absolute -top-3 -left-3 w-[240px] h-[320px] bg-[var(--primary-blue)]/10 rounded-2xl transform -rotate-3"></div>
                
                {/* Magazine */}
                <div className="relative w-[240px] h-[320px] bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                  <div className="bg-[var(--primary-blue-dark)] p-4 text-white text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
                        <span className="text-[var(--primary-blue)] text-xs font-bold">P</span>
                      </div>
                      <span className="font-bold">profuture</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--accent-red)]/10 flex items-center justify-center mb-3">
                      <Icon name="promotion" size={28} />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-medium">Makale Çağrısı</p>
                    <p className="text-lg font-bold text-[var(--primary-blue)] mt-1">Dijital Veri</p>
                  </div>
                  <div className="h-1.5 bg-[var(--accent-red)]"></div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[var(--accent-red)]/10 px-4 py-2 rounded-full mb-4">
                <Icon name="promotion" size={18} />
                <span className="text-sm font-semibold text-[var(--accent-red)]">Makale Çağrısı</span>
              </div>
              
              <h3 className="h3 mb-4">
                Türkiye Ulusal Dijital Veri ve Altyapıları
              </h3>
              
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg">
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği ve dijital dönüşüm odaklı akademik çalışmalar değerlendirilecektir.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button className="btn-submit">
                  Gönder
                  <Icon name="arrow-right" size={18} className="invert" />
                </button>
                <button className="btn-detail">
                  Detay
                  <Icon name="arrow-right" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
