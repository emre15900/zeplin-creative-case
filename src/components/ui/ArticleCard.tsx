'use client';

import Icon from '../Icon';

interface ArticleCardProps {
  title: string;
  pages: string;
  authors: string;
  badges: Array<{ label: string; type: 'climate' | 'research' | 'review' | 'essay' }>;
  onCopy?: () => void;
  onDownload?: () => void;
  onView?: () => void;
}

const badgeStyles: Record<string, string> = {
  climate: 'bg-[#00C3D0] text-white',
  research: 'bg-transparent border border-[#ACB1C6] text-[#676A73]',
  review: 'bg-transparent border border-[#ACB1C6] text-[#676A73]',
  essay: 'bg-transparent border border-[#ACB1C6] text-[#676A73]',
};

export default function ArticleCard({
  title,
  pages,
  authors,
  badges,
  onCopy,
  onDownload,
  onView,
}: ArticleCardProps) {
  return (
    <div className="bg-white border-2 border-[#E0E4E6] rounded-[20px] p-5 hover:border-[var(--primary-blue)] hover:shadow-lg transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Content */}
        <div className="flex-1">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded text-xs font-medium ${badgeStyles[badge.type]}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Title */}
          <h4 className="flex items-start gap-2 text-base font-semibold text-[#111B2B] mb-2">
            <Icon name="pdf" size={20} className="flex-shrink-0 mt-0.5" />
            {title}
          </h4>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#676A73]">
            <div className="flex items-center gap-1.5">
              <Icon name="pdf" size={16} />
              <span>Sayfa: <strong className="text-[#111B2B]">{pages}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="author" size={16} />
              <span>{authors}</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCopy}
            className="w-12 h-12 rounded-lg border border-[#ACB1C6] flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group"
          >
            <Icon name="copy" size={20} className="group-hover:invert" />
          </button>
          <button
            onClick={onDownload}
            className="w-12 h-12 rounded-lg border border-[#ACB1C6] flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group"
          >
            <Icon name="download" size={20} className="group-hover:invert" />
          </button>
          <button
            onClick={onView}
            className="flex items-center gap-2 bg-[var(--primary-blue)] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[var(--primary-blue-dark)] transition-colors"
          >
            <Icon name="eye" size={18} className="invert" />
            Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}
