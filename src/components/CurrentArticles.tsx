'use client';

import Icon from './Icon';

interface Article {
  id: number;
  category: string;
  title: string;
  pages: string;
  authors: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: 'Araştırma Makalesi',
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
  },
  {
    id: 2,
    category: 'Araştırma Makalesi',
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
  },
  {
    id: 3,
    category: 'Araştırma Makalesi',
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
  },
  {
    id: 4,
    category: 'Araştırma Makalesi',
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    pages: '12-28',
    authors: 'Elif Başkaya Acar, Emre Taran, Halil Başar',
  },
];

function ArticleRow({ article }: { article: Article }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-3.5 hover:border-[var(--primary-blue)] hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex-1">
          {/* Category Badge */}
          <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)] mb-1.5">
            <span className="text-[var(--accent-teal)] font-medium px-2 py-0.5 bg-[var(--accent-teal)]/10 rounded">{article.category}</span>
          </div>
          
          {/* Title */}
          <h4 className="flex items-start gap-2 text-[13px] font-semibold text-[var(--text-dark)] mb-1.5 leading-tight">
            <Icon name="pdf" size={16} className="flex-shrink-0 mt-0.5 text-[var(--accent-red)]" />
            {article.title}
          </h4>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] text-[var(--text-secondary)]">
            <div className="flex items-center gap-1">
              <span className="font-medium">Sayfa:</span>
              <span>{article.pages}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="author" size={12} />
              <span>{article.authors}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white transition-all group">
            <Icon name="download" size={14} />
          </button>
          <button className="flex items-center gap-1.5 bg-[var(--primary-blue)] text-white px-3.5 py-1.5 rounded-lg text-[10px] font-medium hover:bg-[var(--primary-blue-dark)] transition-colors">
            <Icon name="eye" size={12} className="invert" />
            Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CurrentArticles() {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left - Magazine Stack */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            {/* Main Magazine */}
            <div className="relative w-[180px] h-[230px] bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100">
              {/* Header */}
              <div className="bg-[#0A1742] text-white px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-white flex items-center justify-center">
                    <span className="text-[var(--primary-blue)] text-[7px] font-bold">P</span>
                  </div>
                  <span className="text-[10px] font-bold">profuture</span>
                </div>
                <span className="text-[7px] bg-[var(--accent-green)] px-1.5 py-0.5 rounded font-medium">6. SAYI</span>
              </div>
              
              {/* Visual */}
              <div className="relative h-[100px] bg-gradient-to-br from-[#0A1742] via-[#1a2d6b] to-[#273D89] flex items-center justify-center">
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-cyan-400/20"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-md">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-100/50 to-blue-100/50 border border-slate-300/50"></div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-2.5 text-center">
                <p className="text-[7px] text-[var(--accent-red)] font-medium mb-0.5">VERİ ODAKLI</p>
                <p className="text-[9px] font-bold text-[var(--primary-blue)]">MEKANİZMALAR</p>
              </div>
              
              {/* View Button */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <button className="w-full flex items-center justify-center gap-1 bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] px-2.5 py-1.5 rounded-md text-[9px] font-medium hover:bg-[var(--primary-blue)] hover:text-white transition-all">
                  <Icon name="eye" size={10} />
                  Görüntüle
                </button>
              </div>
              
              {/* Badge */}
              <div className="absolute top-11 -left-2 bg-[var(--accent-red)] text-white px-1.5 py-0.5 rounded text-[7px] font-medium transform -rotate-12">
                Son Sayı
              </div>
            </div>

            {/* Second Magazine (smaller) */}
            <div className="relative w-[140px] h-[180px] bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 opacity-80">
              {/* Header */}
              <div className="bg-[#0A1742] text-white px-2 py-1.5">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded bg-white flex items-center justify-center">
                    <span className="text-[var(--primary-blue)] text-[6px] font-bold">P</span>
                  </div>
                  <span className="text-[9px] font-bold">profuture</span>
                </div>
              </div>
              
              {/* Visual */}
              <div className="relative h-[80px] bg-gradient-to-br from-[#0A1742] to-[#273D89] flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-100/50 to-blue-100/50 border border-slate-300/50"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-2 text-center">
                <p className="text-[6px] text-[var(--accent-red)] font-medium mb-0.5">VERİ ODAKLI</p>
                <p className="text-[7px] font-bold text-[var(--primary-blue)]">MEKANİZMALAR</p>
              </div>
            </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[10px] text-[var(--accent-red)] font-medium mb-0.5">Profuture Teknoloji Dergisi</p>
                <h2 className="text-lg font-bold text-[var(--text-dark)]">Güncel Yazılar</h2>
              </div>
              <button className="flex items-center gap-1.5 text-xs text-[var(--primary-blue)] font-medium hover:underline">
                Tümünü İnceleyin
                <Icon name="arrow-right" size={14} />
              </button>
            </div>

            {/* Articles */}
            <div className="space-y-2.5">
              {articles.map((article) => (
                <ArticleRow key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
