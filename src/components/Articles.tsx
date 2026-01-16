'use client';

import Icon from './Icon';
import Badge from './ui/Badge';
import Pagination from './ui/Pagination';
import JournalCard from './ui/JournalCard';

interface Article {
  id: number;
  title: string;
  authors: string[];
  pages: string;
  badges: Array<{ type: 'climate' | 'research'; label: string }>;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
    authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    pages: "12-28",
    badges: [{ type: 'climate', label: 'İklim' }, { type: 'research', label: 'Araştırma Makalesi' }],
  },
  {
    id: 2,
    title: "Yapay Zeka Destekli Sağlık Sistemlerinin Etik Boyutları",
    authors: ["Dr. Ayşe Kaya", "Prof. Dr. Fatma Demir"],
    pages: "29-48",
    badges: [{ type: 'research', label: 'Araştırma Makalesi' }],
  },
  {
    id: 3,
    title: "Büyük Veri Analitiğinde Yeni Yaklaşımlar: Türkiye Örneği",
    authors: ["Doç. Dr. Can Öztürk"],
    pages: "49-72",
    badges: [{ type: 'research', label: 'İnceleme Makalesi' }],
  },
];

export default function Articles() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="h2 text-[var(--text-dark)]">Makaleler</h2>
            <p className="text-[var(--text-secondary)] mt-2">Son sayıdaki akademik çalışmalar</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="btn-arrow">
              <Icon name="left" size={16} />
            </button>
            <button className="btn-arrow">
              <Icon name="right" size={16} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Articles List */}
          <div className="lg:col-span-8 space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="card-article">
                <div className="card-article-content">
                  {/* Badges */}
                  <div className="flex gap-2 mb-3">
                    {article.badges.map((badge, index) => (
                      <Badge key={index} variant={badge.type}>{badge.label}</Badge>
                    ))}
                  </div>
                  
                  {/* Title */}
                  <h4 className="card-article-title flex items-start gap-2">
                    <Icon name="pdf" size={20} className="flex-shrink-0 mt-1" />
                    {article.title}
                  </h4>
                  
                  {/* Meta Info */}
                  <div className="card-article-meta">
                    <div className="flex items-center gap-2">
                      <Icon name="pdf" size={16} />
                      <span>Sayfa: {article.pages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="author" size={16} />
                      <span>{article.authors.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="card-article-actions">
                  <button className="btn-icon">
                    <Icon name="download" size={20} />
                  </button>
                  <button className="btn-view">
                    <Icon name="eye" size={18} className="invert" />
                    Görüntüle
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <Pagination totalPages={99} currentPage={1} />
            </div>
          </div>

          {/* Right - Journal Card */}
          <div className="lg:col-span-4">
            <JournalCard
              title="Teknoloji ve Dijital Dergisi"
              volume={1}
              issue={1}
              date="Aralık 2022"
              isNew={true}
            />

            {/* Cookie Banner */}
            <div className="cookie-banner mt-6">
              <div className="cookie-banner-icon">
                <Icon name="info" size={24} />
              </div>
              <div className="cookie-banner-text">
                We use cookies to ensure that we give you the best experience on our website. <a href="#">Read cookies policies.</a>
              </div>
              <div className="cookie-banner-actions">
                <button className="btn text-sm py-2 px-4">Decline</button>
                <button className="btn-primary text-sm py-2 px-4">Allow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
