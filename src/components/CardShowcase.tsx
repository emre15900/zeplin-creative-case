'use client';

import ArticleCard from './ui/ArticleCard';
import JournalCard from './ui/JournalCard';
import CookieBanner from './ui/CookieBanner';

export default function CardShowcase() {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container">
        <h2 className="text-[28px] font-bold text-[#111B2B] mb-10 border-b-2 border-[var(--primary-blue)] w-fit">
          Cards
        </h2>
        
        <div className="space-y-6 max-w-[900px]">
          {/* Article Card */}
          <ArticleCard
            title="Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi"
            pages="12-28"
            authors="Elif Başkaya Acar,  Emre Taran,  Halil Başar"
            badges={[
              { label: 'İklim', type: 'climate' },
              { label: 'Araştırma Makalesi', type: 'research' },
            ]}
          />

          {/* Journal Card */}
          <JournalCard
            title="Teknoloji ve Dijital Dergisi"
            volume={1}
            issue={1}
            date="Aralık 2022"
            issueNumber="01"
            isNew={true}
          />

          {/* Cookie Banner */}
          <CookieBanner />
        </div>
      </div>
    </section>
  );
}
