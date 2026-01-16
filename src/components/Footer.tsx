'use client';

import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-[#0A1742] text-white">
        <div className="container py-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Editor Info */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon name="author" size={18} className="invert opacity-80" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 mb-0.5">Dergi Editörü</p>
                <p className="text-sm font-medium">Prof. Dr. Elif Başkaya Acar</p>
                <p className="text-[10px] text-white/60 mt-0.5">editor@profuture.com</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon name="email" size={18} className="invert opacity-80" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 mb-0.5">Mail Adresi</p>
                <p className="text-sm font-medium">profuture@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon name="location" size={18} className="invert opacity-80" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 mb-0.5">Profuture Teknoloji Yayınevi</p>
                <p className="text-sm font-medium">Ahmet Kemal Mahallesi 1345, Cadde No: 10</p>
                <p className="text-xs text-white/80">Çankaya/Ankara</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--accent-red)] text-white">
        <div className="container py-2.5">
          <p className="text-[9px] text-white/90 leading-relaxed">
            Bu sitenin yeli olan tüm yazılı, görsel ve sayısal içeriklerin haklar Profuture&apos;nun korunmaktadır. Skor içeriklerde yer alan bilgilerim öğretim amaçlı kullanılması amacıyla hazırlanmış olup, Ticari faaliyetlerde için sora düşünülmelerde kullanılmaması rica olunur. Daha detaylı bilgi, düzeltme, istimna ve benzer konuları sayı irtik aracı.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0A1742] text-white border-t border-white/10">
        <div className="container py-3 flex flex-col md:flex-row items-center justify-center gap-2">
          <p className="text-[10px] text-white/60">
            Profuture Teknoloji - Tüm Hakları Saklıdır © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
