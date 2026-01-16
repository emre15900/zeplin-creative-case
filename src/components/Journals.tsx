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
  hasRibbon?: boolean;
  image: string;
}

const journals: JournalItem[] = [
  {
    id: 1,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Dergi',
    image: '/img/dergiler.svg',
  },
  {
    id: 2,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Dergi',
    image: '/img/dergiler.svg',
  },
  {
    id: 3,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Dergi',
    hasRibbon: true,
    image: '/img/dergiler.svg',
  },
];

function JournalCard({ journal }: { journal: JournalItem }) {
  return (
    <div className="bg-white border border-[#E9F4F8] rounded-[20px] p-4 flex gap-[15px] relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Son Sayı Ribbon */}
      {journal.hasRibbon && (
        <div className="absolute -left-[2px] top-[121px] z-20">
          <div 
            className="bg-[#DB0D15] text-white text-[11px] font-bold py-3 px-[6px] rounded-r-lg flex items-center justify-center"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '1px' }}
          >
            Son Sayı
          </div>
        </div>
      )}
      
      {/* Magazine Image */}
      <div className="relative w-[191px] h-[285px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
        <Image 
          src={journal.image} 
          alt={journal.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between py-0 flex-1">
        {/* Top Section */}
        <div className="flex flex-col gap-[11px]">
          {/* Top Row: PDF Icon & YENİ Badge */}
          <div className="flex items-center justify-between">
            <div className="w-[22px] h-[25px] flex items-center justify-center">
              <Icon name="pdf" size={22} className="text-[#676A73]" />
            </div>
            <span className="bg-[#00C3D0] text-white text-[11px] font-bold px-2 py-[2px] rounded-full">
              YENİ
            </span>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="bg-[#F7F8FF] text-[#112053] text-[12px] font-medium px-[10px] py-[3px] rounded-lg">
              Dergi
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[18px] font-bold text-[#112053] leading-[1.35] pr-2">
            {journal.title}
          </h4>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#676A73]">
            <div className="flex items-center gap-1.5">
              <Icon name="cilt" size={16} className="text-[#676A73]" />
              <span>Cilt: <strong className="text-[#112053]">{journal.volume}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="Number" size={16} className="text-[#676A73]" />
              <span>Sayı: <strong className="text-[#112053]">{journal.issue}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="calendar" size={16} className="text-[#676A73]" />
              <span>{journal.date}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4">
          <button className="w-10 h-10 cursor-pointer rounded-[15px] bg-[#273D89] flex items-center justify-center hover:bg-[#1e3070] transition-colors">
            <Icon name="eye" size={18} className="invert" />
          </button>
          <button className="w-10 h-10 cursor-pointer rounded-[15px] bg-[#E8EAF5] flex items-center justify-center hover:bg-[#d8daea] transition-colors">
            <Icon name="download" size={18} className="text-[#676A73]" />
          </button>
          <button className="w-10 h-10 cursor-pointer rounded-[15px] bg-[#E8EAF5] flex items-center justify-center hover:bg-[#d8daea] transition-colors">
            <Icon name="right" size={18} className="text-[#676A73]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Journals() {
  return (
    <section className="pb-16 bg-[#FBFBFB]">
      <div className="container">
        {/* Header */}
        <div className="flex items-end gap-[19px] mb-10">
          {/* Title Section */}
          <div className="flex flex-col gap-3">
            <p className="text-[14px] text-[#676A73]">Sayılar</p>
            <h2 className="text-[20px] font-bold text-[#273D89]">Dergiler</h2>
          </div>
          
          {/* Nav Arrows */}
          <div className="flex items-center gap-3 pb-1">
            <button className="w-10 h-10 cursor-pointer rounded-[15px] bg-[#E8EAF5] flex items-center justify-center hover:bg-[#d8daea] transition-colors group">
              <Icon name="left" size={14} className="text-[#ACB1C6] group-hover:text-[#676A73]" />
            </button>
            <button className="w-10 h-10 cursor-pointer rounded-[15px] bg-[#273D89] flex items-center justify-center hover:bg-[#1e3070] transition-colors">
              <Icon name="right" size={14} className="invert" />
            </button>
          </div>
        </div>

        {/* Journals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {journals.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </div>
      </div>
    </section>
  );
}
