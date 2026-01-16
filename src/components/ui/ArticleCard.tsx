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
    <div className="bg-white border-2 border-[#E0E3F2] rounded-[12px] sm:rounded-[16px] p-4 sm:p-5 hover:shadow-md hover:border-[#273D89] transition-all">
      {/* Desktop: Horizontal layout | Mobile: Vertical layout */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
        {/* Left Content */}
        <div className="flex-1">
          {/* Top row - Badges */}
          <div className="flex items-start gap-2 sm:gap-[11px] mb-3">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-[11px]">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-2 sm:px-[10px] py-[2px] sm:py-[3px] rounded-[6px] sm:rounded-[8px] text-[11px] sm:text-[13px] font-medium ${
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
          <div className="flex items-start sm:items-center gap-2 sm:gap-[11px] mb-3 sm:mb-4">
            <div className="w-[18px] sm:w-[22px] h-[20px] sm:h-[25px] flex-shrink-0 mt-0.5 sm:mt-0">
              <Icon name="pdf" size={18} />
            </div>
            <h4 className="text-[15px] sm:text-[18px] font-semibold text-[#2A2C31] leading-tight">
              {title}
            </h4>
          </div>

          {/* Meta row - Page and Author info */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-[25px] text-[12px] sm:text-[14px] text-[#676A73]">
            {/* Page info */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[22px] sm:w-[26px] h-[22px] sm:h-[26px] rounded-full bg-[#F0F1F3] flex items-center justify-center">
                <Icon name="copy" size={10} />
              </div>
              <span>Sayfa: <strong className="text-[#676A73] font-semibold">{pages}</strong></span>
            </div>
            
            {/* Author info */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[22px] sm:w-[26px] h-[22px] sm:h-[26px] rounded-full bg-[#F0F1F3] flex items-center justify-center">
                <Icon name="author" size={10} />
              </div>
              <span className="text-[11px] sm:text-[14px] break-words">{authors}</span>
            </div>
          </div>
        </div>

        {/* Right Actions - stays on right for desktop, bottom for mobile */}
        <div className="flex items-center gap-2 sm:gap-[7px] pt-3 md:pt-0 border-t md:border-t-0 border-gray-100 flex-shrink-0">
          {/* Email button */}
          <button 
            onClick={onEmail}
            className="w-[42px] sm:w-[55px] h-[42px] sm:h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 hover:border-[#273D89] transition-all cursor-pointer"
          >
            <Icon name="email" size={16} />
          </button>
          
          {/* Download button */}
          <button 
            onClick={onDownload}
            className="w-[42px] sm:w-[55px] h-[42px] sm:h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center hover:bg-gray-50 hover:border-[#273D89] transition-all cursor-pointer"
          >
            <Icon name="download" size={16} />
          </button>
          
          {/* View button */}
          <button 
            onClick={onView}
            className="flex items-center gap-2 sm:gap-[10px] bg-[#273D89] text-white px-3 sm:px-[15px] py-3 sm:py-[15.5px] rounded-full text-[13px] sm:text-[16px] font-semibold hover:bg-[#1e3070] transition-all cursor-pointer"
          >
            <Icon name="eye" size={20} className="invert brightness-0" />
            Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}
