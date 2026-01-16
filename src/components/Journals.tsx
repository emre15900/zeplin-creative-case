'use client';

import Image from 'next/image';
import Icon from './Icon';

interface JournalItem {
  id: number;
  title: string;
  volume: number;
  issue: number;
  date: string;
  badge: string;
  badgeColor: string;
}

const journals: JournalItem[] = [
  {
    id: 1,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Dergi',
    badgeColor: 'bg-[var(--primary-blue)]',
  },
  {
    id: 2,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Son Sayı',
    badgeColor: 'bg-[var(--accent-red)]',
  },
  {
    id: 3,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Dergi',
    badgeColor: 'bg-[var(--primary-blue)]',
  },
];

function JournalCard({ journal, hasRibbon }: { journal: JournalItem, hasRibbon?: boolean }) {
  return (
    <div className="bg-white border border-gray-100 rounded-[20px] p-4 shadow-sm hover:shadow-md transition-all relative">
      {/* Son Sayı Ribbon */}
      {hasRibbon && (
        <div className="absolute left-0 top-12 z-20">
          <div className="bg-[#DB0D15] text-white text-[12px] font-bold py-4 px-1 rounded-r-lg" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            Son Sayı
          </div>
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative h-[240px] rounded-xl overflow-hidden mb-4 group">
        {/* Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#00C3D0] text-white text-[10px] font-bold px-3 py-1 rounded-full">YENİ</span>
        </div>

        {/* Magazine Header */}
        <div className="absolute top-0 left-0 right-0 bg-[#111B2B]/90 text-white px-3 py-2 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
              <span className="text-[#111B2B] text-[8px] font-bold">P</span>
            </div>
            <span className="text-[10px] font-bold">profuture</span>
          </div>
          <span className="text-[8px] opacity-70">01</span>
        </div>

        {/* Content Visual */}
        <div className="w-full h-full bg-gradient-to-br from-[#111B2B] to-[#273D89] flex items-center justify-center">
          <Image src="/icons/Mask group.svg" alt="Cover Visual" fill className="object-cover opacity-60" />
        </div>

        {/* Title Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#111B2B] text-white text-center py-2">
          <p className="text-[10px] font-bold tracking-widest uppercase">DİJİTAL DÖNÜŞÜM</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-1">
        <div className="mb-2">
          <span className="text-[11px] text-[#676A73] border border-gray-200 px-2 py-0.5 rounded">Dergi</span>
        </div>
        
        <h4 className="text-[16px] font-bold text-[#111B2B] mb-3 leading-tight">
          {journal.title}
        </h4>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-[12px] text-[#676A73] mb-5">
          <div className="flex items-center gap-1">
            <Icon name="cilt" size={14} />
            <span>Cilt: <strong>{journal.volume}</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Number" size={14} />
            <span>Sayı: <strong>{journal.issue}</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="calendar" size={14} />
            <span>{journal.date}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-50">
          <button className="w-9 h-9 rounded-full bg-[#273D89] flex items-center justify-center hover:opacity-90 transition-all">
            <Icon name="eye" size={16} className="invert" />
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#273D89] transition-all">
            <Icon name="download" size={16} />
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#273D89] transition-all">
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Journals() {
  return (
    <section className="py-16 bg-[#FBFBFB]">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[14px] text-[#676A73] mb-1">Sayılar</p>
              <h2 className="text-[32px] font-bold text-[#111B2B]">Dergiler</h2>
            </div>
            {/* Nav Arrows */}
            <div className="flex items-center gap-2 mt-6">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
                <Icon name="arrow-left" size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </div>
          
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-2.5 rounded-full text-[14px] font-semibold text-[#111B2B] hover:border-[#273D89] transition-all">
            Tümünü Görüntüle
            <Icon name="arrow-right" size={16} />
          </button>
        </div>

        {/* Journals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JournalCard journal={journals[0]} />
          <JournalCard journal={journals[1]} />
          <JournalCard journal={journals[2]} hasRibbon={true} />
        </div>
      </div>
    </section>
  );
}
