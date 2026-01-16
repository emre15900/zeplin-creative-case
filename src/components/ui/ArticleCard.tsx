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
    <div className="bg-white border border-gray-100 rounded-[16px] p-4 hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Content */}
        <div className="flex-1">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-[#111B2B] text-white px-3 py-1 rounded text-[10px] font-bold">İsim</span>
            <span className="bg-[#E8F4FC] text-[#273D89] px-3 py-1 rounded text-[10px] font-bold border border-[#273D89]/10">Araştırma Makalesi</span>
          </div>

          {/* Title */}
          <h4 className="text-[15px] font-bold text-[#111B2B] mb-2">
            {title}
          </h4>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#676A73]">
            <div className="flex items-center gap-1.5">
               <Icon name="copy" size={14} />
               <span>Sayfa: <strong className="text-[#111B2B]">{pages}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
               <Icon name="author" size={14} />
               <span>{authors}</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all">
            <Icon name="eye" size={18} />
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all">
            <Icon name="download" size={18} />
          </button>
          <button className="flex items-center gap-2 bg-[#273D89] text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:opacity-90 transition-all">
            <Icon name="eye" size={16} className="invert" />
            Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}
