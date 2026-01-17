'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const articlePdfUrl = '/docs/dergi-ornek.pdf';

  const handleDownload = () => {
    window.open(articlePdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    window.location.href = 'mailto:profuture@gmail.com';
  };
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
                <button
                  type="button"
                  onClick={handleDownload}
                  className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full cursor-pointer border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 transition-all"
                  aria-label="PDF indir"
                >
                  <Icon name="download" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArticle(articles[0])}
                  className="flex-1 bg-[#273D89] max-w-[150px] sm:max-w-[170px] cursor-pointer text-white py-3 sm:py-4 rounded-full text-[14px] sm:text-[16px] font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 sm:gap-3"
                >
                  <Icon name="eye" size={20} className="invert" />
                  Görüntüle
                </button>
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
                  onEmail={handleEmail}
                  onDownload={handleDownload}
                  onView={() => setActiveArticle(article)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {activeArticle && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Makale detay"
        >
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => setActiveArticle(null)}
            aria-label="Kapat"
          />
          <div className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl relative z-10">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#E8EAF5] flex items-center justify-center hover:bg-white"
              aria-label="Kapat"
            >
              <span className="text-[#273D89] text-xl leading-none">×</span>
            </button>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {activeArticle.badges.map((badge) => (
                  <span
                    key={badge.label}
                    className={
                      badge.type === 'primary'
                        ? 'bg-[#F7F8FF] text-[#112053] text-[11px] sm:text-[12px] font-medium px-[10px] py-[3px] rounded-lg'
                        : 'bg-[#FFE9E9] text-[#DB0D15] text-[11px] sm:text-[12px] font-medium px-[10px] py-[3px] rounded-lg'
                    }
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <h3 className="text-[18px] sm:text-[22px] font-bold text-[#112053]">
                {activeArticle.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#676A73] mt-3 leading-[1.7]">
                Bu çalışma, Türkiye’nin teknoloji politikalarını döngüsel ekonomi perspektifiyle
                ele alarak sürdürülebilir kalkınma için yeni bir çerçeve sunmaktadır.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4 text-[12px] sm:text-[13px] text-[#676A73]">
                <span>Sayfalar: <strong className="text-[#112053]">{activeArticle.pages}</strong></span>
                <span>Yazarlar: <strong className="text-[#112053]">{activeArticle.authors}</strong></span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="h-[40px] px-5 rounded-full bg-[#E8EAF5] text-[#273D89] text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#d8daea] cursor-pointer"
                >
                  <Icon name="download" size={16} className="text-[#273D89]" />
                  İndir
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="h-[40px] px-5 rounded-full bg-white border border-[#ACB1C6] text-[#2A2C31] text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 hover:border-[#273D89] cursor-pointer"
                >
                  <Icon name="email" size={16} className="text-[#2A2C31]" />
                  Yazdır
                </button>
                <Link
                  href="/dergiler/detay"
                  className="h-[40px] px-5 rounded-full bg-[#273D89] text-white text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#1e3070]"
                >
                  Detaya Git
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
