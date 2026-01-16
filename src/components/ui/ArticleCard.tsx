'use client';

import Icon from '../Icon';
import Badge from './Badge';

interface ArticleCardProps {
  title: string;
  pages: string;
  authors: string[];
  badges?: Array<{ type: 'climate' | 'city' | 'environment' | 'research' | 'review'; label: string }>;
  onView?: () => void;
  onDownload?: () => void;
}

export default function ArticleCard({ 
  title, 
  pages, 
  authors, 
  badges = [],
  onView,
  onDownload 
}: ArticleCardProps) {
  return (
    <div className="card-article">
      <div className="card-article-content">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex gap-2 mb-3">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.type}>{badge.label}</Badge>
            ))}
          </div>
        )}
        
        {/* Title */}
        <h4 className="card-article-title">{title}</h4>
        
        {/* Meta Info */}
        <div className="card-article-meta">
          <div className="flex items-center gap-2">
            <Icon name="pdf" size={20} />
            <span>Sayfa: {pages}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="author" size={18} />
            <span>{authors.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="card-article-actions">
        <button className="btn-icon" onClick={onDownload}>
          <Icon name="download" size={20} />
        </button>
        <button className="btn-view" onClick={onView}>
          <Icon name="eye" size={18} />
          Görüntüle
        </button>
      </div>
    </div>
  );
}
