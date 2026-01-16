'use client';

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
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
    badges: [
      { label: 'İklim', type: 'climate' },
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
  {
    id: 2,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
  {
    id: 3,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
  {
    id: 4,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
    badges: [
      { label: 'Araştırma Makalesi', type: 'research' },
    ],
  },
];

export default function CurrentArticles() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Journal Card */}
          <div className="lg:w-[420px] flex-shrink-0">
            <JournalCard
              title="Teknoloji ve Dijital Dergisi"
              volume={1}
              issue={1}
              date="Aralık 2022"
              issueNumber="01"
              isNew={true}
            />
          </div>

          {/* Right - Articles List */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-[var(--accent-red)] font-medium mb-1">Profuture Teknoloji Dergisi</p>
                <h2 className="text-xl font-bold text-[#111B2B]">Güncel Yazılar</h2>
              </div>
              <button className="flex items-center gap-2 text-sm text-[var(--primary-blue)] font-medium hover:underline">
                Tümünü İnceleyin
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
