import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';

const dummyIssue = {
  title: 'Teknoloji ve Dijital Dergisi',
  subtitle: 'Dijital Dönüşüm ve Gelecek',
  date: 'Aralık 2022',
  volume: 1,
  issue: 1,
  issn: '345-255',
  cover: '/img/dergiler.svg',
  description:
    'Dijital dönüşümün iş dünyasındaki etkileri, yapay zekâ ve veri bilimi ekseninde yeni trendler, sürdürülebilir teknoloji ve ürün tasarımı odağında güncel araştırmalar.',
  summary:
    'Bu sayıda kurumların dijitalleşme yolculuğunu hızlandıran stratejiler, üretken yapay zekânın kullanım alanları, siber güvenlik riskleri ve çözüm önerileri kapsamlı şekilde ele alınmıştır.',
  keywords: ['Yapay Zekâ', 'Veri Bilimi', 'Siber Güvenlik', 'Sürdürülebilirlik'],
  pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
};

const relatedIssues = [
  { id: 1, title: 'Dijital Ekosistemler', date: 'Ekim 2022' },
  { id: 2, title: 'Akıllı Üretim', date: 'Ağustos 2022' },
  { id: 3, title: 'Siber Güvenlik', date: 'Haziran 2022' },
];

export default function JournalDetailPage() {
  return (
    <div className="bg-[#FBFBFB]">
      <section className="bg-[#0B1A4A] text-white">
        <div className="container py-10 sm:py-14">
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-[12px] sm:text-[13px] text-white/70 hover:text-white">
              Anasayfa / Dergiler / Detay
            </Link>
            <h1 className="text-[22px] sm:text-[28px] font-bold">
              {dummyIssue.title}
            </h1>
            <p className="text-[14px] sm:text-[16px] text-white/80">
              {dummyIssue.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[12px] sm:text-[13px] text-white/70">
              <span>Cilt: <strong className="text-white">{dummyIssue.volume}</strong></span>
              <span>Sayı: <strong className="text-white">{dummyIssue.issue}</strong></span>
              <span>Tarih: <strong className="text-white">{dummyIssue.date}</strong></span>
              <span>ISSN: <strong className="text-white">{dummyIssue.issn}</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E9F4F8] p-6 flex flex-col gap-5">
            <div className="relative w-full h-[260px] rounded-xl overflow-hidden bg-[#F7F8FF]">
              <Image src={dummyIssue.cover} alt={dummyIssue.title} fill className="object-contain p-6" />
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#676A73] leading-[1.6]">
              {dummyIssue.description}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={dummyIssue.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full h-[44px] rounded-full bg-[#273D89] text-white text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#1e3070]"
              >
                <Icon name="eye" size={16} className="invert" />
                PDF Görüntüle
              </a>
              <a
                href={dummyIssue.pdfUrl}
                download
                className="w-full h-[44px] rounded-full bg-[#E8EAF5] text-[#273D89] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#d8daea]"
              >
                <Icon name="download" size={16} className="text-[#273D89]" />
                PDF İndir
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {dummyIssue.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="text-[11px] sm:text-[12px] text-[#112053] bg-[#F7F8FF] px-3 py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E9F4F8] p-6 sm:p-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#112053] mb-3">
                Sayı Özeti
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#676A73] leading-[1.75]">
                {dummyIssue.summary}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E9F4F8] p-6 sm:p-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#112053] mb-4">
                İçindekiler
              </h2>
              <div className="flex flex-col gap-3 text-[14px] sm:text-[15px] text-[#273D89]">
                <div className="flex items-center justify-between border-b border-[#F0F2FA] pb-3">
                  <span>01. Yapay Zekâ ile Dönüşüm</span>
                  <span className="text-[#676A73]">s. 12</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#F0F2FA] pb-3">
                  <span>02. Veri Stratejileri ve Analitik</span>
                  <span className="text-[#676A73]">s. 28</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#F0F2FA] pb-3">
                  <span>03. Siber Güvenlikte Yeni Yaklaşımlar</span>
                  <span className="text-[#676A73]">s. 45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>04. Sürdürülebilir Teknoloji Trendleri</span>
                  <span className="text-[#676A73]">s. 60</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E9F4F8] p-6 sm:p-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#112053] mb-4">
                Editör Notu
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#676A73] leading-[1.75]">
                Bu sayımızda, teknoloji dünyasının en sıcak başlıklarını çok yönlü bir perspektifle ele aldık. 
                Makalelerimizin, sektörel dönüşüme katkı sağlamasını ve yeni fikirler üretmenizi desteklemesini dilerim.
              </p>
              <div className="mt-5 text-[14px] text-[#112053] font-semibold">
                Prof. Dr. Elif Başkaya Acar
              </div>
              <div className="text-[12px] text-[#676A73]">Dergi Editörü</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-10 sm:pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] sm:text-[20px] font-bold text-[#112053]">Diğer Sayılar</h2>
          <Link href="/" className="text-[13px] sm:text-[14px] text-[#273D89] hover:underline">
            Tümünü Görüntüle
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedIssues.map((issue) => (
            <div
              key={issue.id}
              className="bg-white border border-[#E9F4F8] rounded-2xl p-5 flex flex-col gap-2"
            >
              <div className="text-[12px] text-[#676A73]">{issue.date}</div>
              <div className="text-[15px] font-semibold text-[#112053]">{issue.title}</div>
              <Link
                href="/dergiler/detay"
                className="text-[13px] text-[#273D89] font-medium hover:underline"
              >
                Detaya Git
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

