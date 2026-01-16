'use client';

import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="bg-[#111B2B] text-white pt-16">
      <div className="container">
        {/* Main Footer Info */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Editor Info */}
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="author" size={24} className="invert opacity-80" />
            </div>
            <div>
              <p className="text-[12px] text-white/40 mb-1">Dergi Editörü</p>
              <p className="text-[16px] font-bold">Prof. Dr. Elif Başkaya Acar</p>
              <p className="text-[12px] text-[#DB0D15] mt-1 flex items-center gap-1">
                 <span className="w-2 h-2 rounded-full bg-[#DB0D15]"></span>
                 elif@gmail.com
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="email" size={24} className="invert opacity-80" />
            </div>
            <div>
              <p className="text-[12px] text-white/40 mb-1">Mail Adresi</p>
              <p className="text-[16px] font-bold">profuture@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="location" size={24} className="invert opacity-80" />
            </div>
            <div>
              <p className="text-[12px] text-white/40 mb-1">Profuture Teknoloji Yayınevi</p>
              <p className="text-[16px] font-bold leading-tight">
                Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text */}
        <div className="border-t border-white/5 py-10">
          <p className="text-[12px] text-white/30 text-center max-w-[1000px] mx-auto leading-relaxed italic">
            Bu sitede yer alan tüm yazılı, görsel ve sayısal içeriklerin hakları Profuture&apos;nun korunmaktadır. Site içeriğinde sunulan bilgilerin yalnızca eğitim bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanıcılarından doğabilecek her türlü sorumculuk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
          </p>
        </div>
      </div>

      {/* Red Copyright Bar */}
      <div className="bg-[#DB0D15] py-3 text-center">
        <p className="text-[12px] font-bold">
          Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
        </p>
      </div>
    </footer>
  );
}
