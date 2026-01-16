'use client';

import Icon from '../Icon';

interface ArticleCardProps {
  title: string;
  pages: string;
  authors: string;
  badges: Array<{ label: string; type: 'primary' | 'secondary' }>;
  onEmail?: () => void;
  onDownload?: () => void;
  onView?: () => void;
}

export default function ArticleCard({
  title,
  pages,
  authors,
  badges,
  onEmail,
  onDownload,
  onView,
}: ArticleCardProps) {
  return (
    <div className="bg-white border-2 border-[#E0E3F2] rounded-[16px] p-5 hover:shadow-md hover:border-[#273D89] transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1">
          {/* Top row - Badges and Title */}
          <div className="flex items-start gap-[11px] mb-3">
            {/* Badges */}
            <div className="flex flex-wrap gap-[11px] flex-shrink-0">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-[10px] py-[3px] rounded-[8px] text-[13px] font-medium ${
                    badge.type === 'primary'
                      ? 'bg-[#273D89] text-white'
                      : 'bg-[#F6F8FF] text-[#112053]'
                  }`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Title row with PDF icon */}
          <div className="flex items-center gap-[11px] mb-4">
            <div className="w-[22px] h-[25px] flex-shrink-0">
              <Icon name="pdf" size={22} />
            </div>
            <h4 className="text-[18px] font-semibold text-[#2A2C31] leading-tight">
              {title}
            </h4>
          </div>

          {/* Meta row - Page and Author info */}
          <div className="flex flex-wrap items-center gap-[25px] text-[14px] text-[#676A73]">
            {/* Page info */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[26px] h-[26px] rounded-full bg-[#F0F1F3] flex items-center justify-center">
                <Icon name="copy" size={12} />
              </div>
              <span>Sayfa: <strong className="text-[#676A73] font-semibold">{pages}</strong></span>
            </div>
            
            {/* Author info */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[26px] h-[26px] rounded-full bg-[#F0F1F3] flex items-center justify-center">
                <Icon name="author" size={12} />
              </div>
              <span>{authors}</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-[7px] flex-shrink-0">
          {/* Email button */}
          <button 
            onClick={onEmail}
            className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 hover:border-[#273D89] transition-all"
          >
            <Icon name="email" size={18} />
          </button>
          
          {/* Download button */}
          <button 
            onClick={onDownload}
            className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 hover:border-[#273D89] transition-all"
          >
            <Icon name="download" size={18} />
          </button>
          
          {/* View button */}
          <button 
            onClick={onView}
            className="flex items-center gap-[10px] bg-[#273D89] text-white px-[15px] py-[15.5px] rounded-full text-[16px] font-semibold hover:bg-[#1e3070] transition-all"
          >
            <Icon name="eye" size={24} className="invert brightness-0" />
            Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}
