'use client';

import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="bg-[#161F3C] text-white">
      <div className="max-w-[1443px] mx-auto px-6 pt-[61px]">
        {/* Main Footer Info */}
        <div className="flex flex-wrap items-start gap-x-[177px] gap-y-8">
          {/* Editor Info */}
          <div className="flex items-start gap-[17px]">
            <div className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center flex-shrink-0">
              <Icon name="author" size={24} className="invert" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <p className="text-[14px] text-white leading-[20px]">Dergi Editörü</p>
              <p className="text-[16px] font-bold leading-[22px]">Prof. Dr. Elif Başkaya Acar</p>
              <div className="flex items-center gap-1 mt-[3px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5Z" fill="#DB0D15"/>
                </svg>
                <span className="text-[14px] text-white leading-[19px]">elif@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-[17px]">
            <div className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center flex-shrink-0">
              <Icon name="message" size={21} className="invert" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <p className="text-[14px] text-white leading-[20px]">Mail Adresi</p>
              <p className="text-[16px] font-bold leading-[22px]">profuture@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-[17px]">
            <div className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center flex-shrink-0">
              <Icon name="location" size={21} className="invert" />
            </div>
            <p className="text-[16px] leading-[21px] max-w-[356px]">
              Profuture Teknoloji Yayınevi Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-[0.5px] bg-[#ACB1C6] mt-[40px]" />

        {/* Legal Text */}
        <div className="mt-[40px] pb-[31px]">
          <p className="text-[14px] text-white text-center leading-[20px]">
            Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
          </p>
        </div>
      </div>

      {/* Red Copyright Bar */}
      <div className="bg-[#DB0D15] h-[39px] flex items-center justify-center">
        <p className="text-[14px] font-bold text-center">
          Çevre, Şehircilik ve İklim Değişikliği Bakanlığı - Tüm Hakları Saklıdır. © 2026
        </p>
      </div>
    </footer>
  );
}
