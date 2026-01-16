'use client';

import Image from 'next/image';
import Icon from '../Icon';

interface JournalCardProps {
  title: string;
  volume: number;
  issue: number;
  date: string;
  issueNumber?: string;
  isNew?: boolean;
  ribbonText?: string;
  onView?: () => void;
  onDownload?: () => void;
  onNext?: () => void;
}

export default function JournalCard({
  title,
  volume,
  issue,
  date,
  issueNumber = '01',
  isNew = false,
  ribbonText,
  onView,
  onDownload,
  onNext,
}: JournalCardProps) {
  return (
    <div className="bg-white border-2 border-[#E0E4E6] rounded-[20px] p-5 hover:border-[var(--primary-blue)] hover:shadow-lg transition-all">
      <div className="flex gap-5">
        {/* Left - Magazine Cover */}
        <div className="relative w-[160px] h-[210px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
          {ribbonText && (
            <div className="absolute -left-10 top-8 rotate-[-90deg] z-20">
              <span className="bg-[var(--accent-red)] text-white text-[10px] font-semibold px-3 py-1 rounded-full">
                {ribbonText}
              </span>
            </div>
          )}
          {/* Magazine Header */}
          <div className="absolute top-0 left-0 right-0 bg-[#0A1742]/95 text-white px-3 py-2 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
                <span className="text-[var(--primary-blue)] text-[8px] font-bold">P</span>
              </div>
              <span className="text-[10px] font-bold">profuture</span>
            </div>
            <span className="text-[8px] bg-[var(--primary-blue)] px-1.5 py-0.5 rounded font-medium">
              {issueNumber}
            </span>
          </div>

          {/* Magazine Visual - Hourglass Theme */}
          <div className="w-full h-full bg-gradient-to-br from-[#0A1742] via-[#1a2d6b] to-[#273D89] flex items-center justify-center">
            {/* Tech decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-cyan-400/15"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-400/10"></div>
            </div>
            
            {/* Hourglass visual */}
            <div className="relative z-10 w-[120px] h-[120px]">
              <Image src="/globe.svg" alt="Dijital küre" fill className="object-contain opacity-90" />
            </div>
          </div>

          {/* Bottom Label */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0A1742] text-white text-center py-2">
            <p className="text-[9px] font-bold tracking-wider">DİJİTAL DÖNÜŞÜM</p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 flex flex-col">
          {/* Top badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1">
              <Icon name="cilt" size={16} className="text-[#676A73]" />
            </span>
            {isNew && (
              <span className="bg-[#A8B95E] text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                YENİ
              </span>
            )}
          </div>

          {/* Category */}
          <span className="text-xs text-[#676A73] border border-[#ACB1C6] px-2 py-0.5 rounded w-fit mb-2">
            Dergi
          </span>

          {/* Title */}
          <h4 className="text-[17px] font-bold text-[#111B2B] mb-3 leading-tight">{title}</h4>

          {/* Meta */}
          <div className="space-y-1.5 text-[13px] text-[#676A73] mb-4">
            <div className="flex items-center gap-2">
              <Icon name="cilt" size={16} />
              <span>Cilt: <strong className="text-[#111B2B]">{volume}</strong></span>
              <Icon name="Number" size={16} className="ml-2" />
              <span>Sayı: <strong className="text-[#111B2B]">{issue}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="calendar" size={16} />
              <span>{date}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-auto">
            <button
              onClick={onView}
              className="w-11 h-11 rounded-full bg-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue-dark)] transition-colors"
            >
              <Icon name="eye" size={18} className="invert" />
            </button>
            <button
              onClick={onDownload}
              className="w-11 h-11 rounded-full border border-[#ACB1C6] flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group"
            >
              <Icon name="download" size={18} className="group-hover:invert" />
            </button>
            <button
              onClick={onNext}
              className="w-11 h-11 rounded-full border border-[#ACB1C6] flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group"
            >
              <Icon name="arrow-right" size={18} className="group-hover:invert" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
