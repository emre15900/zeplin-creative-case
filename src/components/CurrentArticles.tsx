'use client';

import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import ArticleCard from './ui/ArticleCard';

interface Article {
  id: number;
  title: string;
  pages: string;
  authors: string;
  badges: Array<{ label: string; type: 'primary' | 'secondary' }>;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar,  Emre Taran,  Halil Başar',
    badges: [
      { label: 'İsim', type: 'primary' },
      { label: 'Araştırma Makalesi', type: 'secondary' },
    ],
  },
  {
    id: 2,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar,  Emre Taran,  Halil Başar',
    badges: [
      { label: 'İsim', type: 'primary' },
      { label: 'Araştırma Makalesi', type: 'secondary' },
    ],
  },
  {
    id: 3,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar,  Emre Taran,  Halil Başar',
    badges: [
      { label: 'İsim', type: 'primary' },
      { label: 'Araştırma Makalesi', type: 'secondary' },
    ],
  },
  {
    id: 4,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar,  Emre Taran,  Halil Başar',
    badges: [
      { label: 'İsim', type: 'primary' },
      { label: 'Araştırma Makalesi', type: 'secondary' },
    ],
  },
];

export default function CurrentArticles() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left - Large Journal Card */}
          <div className="w-full lg:w-[466px] flex-shrink-0 relative order-2 lg:order-1">
            <div className="relative bg-white border-[4px] sm:border-[5px] border-[#FFD9DA] rounded-[20px] sm:rounded-[25px] p-2 sm:p-[10px] shadow-[0_5px_15px_rgba(190,190,190,0.25)] overflow-hidden max-w-[400px] mx-auto lg:max-w-none">
              {/* Son Sayı Ribbon - Vertical rotated text */}
              <div className="absolute -left-[0px] top-1/2 -translate-y-1/2 z-20">
                <div 
                  className="bg-[#DB0D15] text-white text-[16px] sm:text-[20px] font-bold py-3 sm:py-4 px-1.5 sm:px-2 rounded-l-xl origin-center rotate-180"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Son Sayı
                </div>
              </div>

              {/* Magazine Cover Image */}
              <div className="relative w-full aspect-[428/641] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <Image 
                  src="/img/CurrentArticles.svg" 
                  alt="Dergi Kapağı" 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* Actions for large card */}
              <div className="flex items-center justify-center gap-2 sm:gap-[10px]">
                <a
                  href="/docs/dergi-ornek.pdf"
                  download
                  className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full cursor-pointer border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 transition-all"
                  aria-label="PDF indir"
                >
                  <Icon name="download" size={18} />
                </a>
                <Link
                  href="/dergiler/detay"
                  className="flex-1 bg-[#273D89] max-w-[150px] sm:max-w-[170px] cursor-pointer text-white py-3 sm:py-4 rounded-full text-[14px] sm:text-[16px] font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 sm:gap-3"
                >
                  <Icon name="eye" size={20} className="invert" />
                  Görüntüle
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className="text-[14px] sm:text-[16px] text-[#676A73]">Profuture Teknoloji Dergisi</p>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#DB0D15]">Güncel Yazılar</h2>
              </div>
              <Link
                href="/dergiler"
                className="flex items-center gap-2 sm:gap-[10px] cursor-pointer bg-white border border-[#ACB1C6] px-3 sm:px-[15px] py-3 sm:py-[16.5px] rounded-full text-[14px] sm:text-[16px] font-semibold text-[#2A2C31] hover:border-[#273D89] transition-all self-start"
              >
                Tümünü Görüntüle
                <Icon name="right" size={14} />
              </Link>
            </div>

            {/* Articles */}
            <div className="space-y-4 sm:space-y-5">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  pages={article.pages}
                  authors={article.authors}
                  badges={article.badges}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
