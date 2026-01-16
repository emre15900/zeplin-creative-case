'use client';

import Image from 'next/image';
import Icon from './Icon';
import ArticleCard from './ui/ArticleCard';
import JournalCard from './ui/JournalCard';

interface Article {
  id: number;
  title: string;
  pages: string;
  authors: string;
  badges: Array<{ label: string; type: 'climate' | 'research' | 'review' | 'essay' }>;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '10-28',
    authors: 'Elif Başkaya Acar, Girne Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
  {
    id: 2,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '10-28',
    authors: 'Elif Başkaya Acar, Girne Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
  {
    id: 3,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '10-28',
    authors: 'Elif Başkaya Acar, Girne Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
  {
    id: 4,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '10-28',
    authors: 'Elif Başkaya Acar, Girne Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
];

export default function CurrentArticles() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left - Large Journal Card */}
          <div className="lg:w-[380px] flex-shrink-0 relative">
             <div className="relative bg-white border border-gray-100 rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
                {/* Son Sayı Ribbon */}
                <div className="absolute left-0 top-12 z-20">
                  <div className="bg-[#DB0D15] text-white text-[14px] font-bold py-6 px-1.5 rounded-r-xl" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    Son Sayı
                  </div>
                </div>

                {/* Magazine Cover */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                   {/* Header */}
                   <div className="absolute top-0 left-0 right-0 bg-[#111B2B] text-white p-4 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                         <div className="w-7 h-7 rounded bg-white flex items-center justify-center">
                           <span className="text-[#111B2B] text-xs font-bold">P</span>
                         </div>
                         <span className="text-[18px] font-bold">profuture</span>
                      </div>
                      <span className="text-sm font-bold opacity-60">8. SAYI</span>
                   </div>

                   {/* Visual */}
                   <div className="w-full h-full bg-gradient-to-br from-[#111B2B] to-[#273D89] flex items-center justify-center">
                      <Image src="/icons/Mask group-1.svg" alt="Cover Visual" fill className="object-cover opacity-80" />
                   </div>

                   {/* Title Area at bottom */}
                   <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                      <div className="bg-[#111B2B] rounded-xl py-5 px-3 text-white text-center">
                         <p className="text-[14px] font-bold tracking-widest leading-tight">VERİ ODAKLI MEKANİZMALARI</p>
                      </div>
                   </div>
                </div>

                {/* Actions for large card */}
                <div className="flex items-center justify-between mt-4">
                   <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all">
                      <Icon name="download" size={20} />
                   </button>
                   <button className="flex-1 ml-4 bg-[#273D89] text-white py-3.5 rounded-full text-[14px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3">
                      <Icon name="eye" size={18} className="invert" />
                      Görüntüle
                   </button>
                </div>
             </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1">
            <p className="text-[14px] text-[#676A73] mb-1">Profuture Teknoloji Dergisi</p>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[32px] font-bold text-[#111B2B]">Güncel Yazılar</h2>
              <button className="flex items-center gap-2 bg-white border border-gray-100 px-6 py-2.5 rounded-full text-[14px] font-semibold text-[#111B2B] hover:border-[#273D89] transition-all">
                Tümünü görüntüle
                <Icon name="arrow-right" size={16} />
              </button>
            </div>

            {/* Articles */}
            <div className="space-y-4">
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
