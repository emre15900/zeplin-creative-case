import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';

const issues = [
  {
    id: 1,
    title: 'Teknoloji ve Dijital Dergisi',
    subtitle: 'Dijital Dönüşüm ve Gelecek',
    date: 'Aralık 2022',
    cover: '/img/dergiler.svg',
  },
  {
    id: 2,
    title: 'Teknoloji ve Dijital Dergisi',
    subtitle: 'Akıllı Üretim ve Endüstri 4.0',
    date: 'Ekim 2022',
    cover: '/img/dergiler.svg',
  },
  {
    id: 3,
    title: 'Teknoloji ve Dijital Dergisi',
    subtitle: 'Siber Güvenlik ve Veri Bilimi',
    date: 'Ağustos 2022',
    cover: '/img/dergiler.svg',
  },
  {
    id: 4,
    title: 'Teknoloji ve Dijital Dergisi',
    subtitle: 'Sürdürülebilir Teknoloji',
    date: 'Haziran 2022',
    cover: '/img/dergiler.svg',
  },
];

export default function JournalsListPage() {
  return (
    <div className="bg-[#FBFBFB]">
      <section className="bg-[#0B1A4A] text-white">
        <div className="container py-10 sm:py-14">
          <div className="flex flex-col gap-4">
            <div className="text-[12px] sm:text-[13px]">
              <Link href="/" className="text-white/70 hover:text-white">
                Anasayfa
              </Link>
              <span className="text-white/40 mx-2">/</span>
              <span className="text-white font-semibold">Dergiler</span>
            </div>
            <h1 className="text-[22px] sm:text-[28px] font-bold">Tüm Dergiler</h1>
            <p className="text-[14px] sm:text-[16px] text-white/80 max-w-2xl">
              Profuture Teknoloji Dergisi’nin tüm sayılarına buradan ulaşabilir, detaylarını inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {issues.map((issue) => (
            <Link
              key={issue.id}
              href="/dergiler/detay"
              className="group bg-white border border-[#E9F4F8] rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-[#F7F8FF]">
                <Image src={issue.cover} alt={issue.title} fill className="object-contain p-6" />
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[#676A73]">
                <span className="bg-[#F7F8FF] text-[#112053] text-[11px] sm:text-[12px] font-medium px-[10px] py-[3px] rounded-lg">
                  Dergi
                </span>
                <span>•</span>
                <span>{issue.date}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#112053]">
                  {issue.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#676A73]">
                  {issue.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#273D89] text-[13px] font-medium">
                Detaya Git
                <Icon name="right" size={12} className="text-[#273D89]" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

