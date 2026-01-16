'use client';

import Image from 'next/image';
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
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Large Journal Card */}
          <div className="lg:w-[466px] flex-shrink-0 relative">
            <div className="relative bg-white border-[5px] border-[#FFD9DA] rounded-[25px] p-[10px] shadow-[0_5px_15px_rgba(190,190,190,0.25)] overflow-hidden">
              {/* Son Sayı Ribbon - Vertical rotated text */}
              <div className="absolute -left-[0px] top-1/2 -translate-y-1/2 z-20">
                <div 
                  className="bg-[#DB0D15] text-white text-[20px] font-bold py-4 px-2 rounded-l-xl origin-center rotate-180"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Son Sayı
                </div>
              </div>

              {/* Magazine Cover Image */}
              <div className="relative w-full aspect-[428/641] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="/img/CurrentArticles.svg" 
                  alt="Dergi Kapağı" 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* Actions for large card */}
              <div className="flex items-center justify-center gap-[10px]">
                <button className="w-[55px] h-[55px] rounded-full cursor-pointer border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 transition-all">
                  <Icon name="download" size={20} />
                </button>
                <button className="flex-1 bg-[#273D89] max-w-[170px] cursor-pointer text-white py-4 rounded-full text-[16px] font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-3">
                  <Icon name="eye" size={24} className="invert" />
                  Görüntüle
                </button>
              </div>
            </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex flex-col gap-3">
                <p className="text-[16px] text-[#676A73]">Profuture Teknoloji Dergisi</p>
                <h2 className="text-[20px] font-bold text-[#DB0D15]">Güncel Yazılar</h2>
              </div>
              <button className="flex items-center gap-[10px] cursor-pointer bg-white  border border-[#ACB1C6] px-[15px] py-[16.5px] rounded-full text-[16px] font-semibold text-[#2A2C31] hover:border-[#273D89] transition-all">
                Tümünü Görüntüle
                <Icon name="right" size={16} />
              </button>
            </div>

            {/* Articles */}
            <div className="space-y-5">
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
