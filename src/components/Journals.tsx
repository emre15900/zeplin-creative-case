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

function JournalCard({ journal }: { journal: JournalItem }) {
  return (
    <div className="bg-white border-2 border-slate-100 rounded-[18px] overflow-hidden hover:border-[var(--primary-blue)] hover:shadow-lg transition-all">
      {/* Image */}
      <div className="relative h-[170px] bg-gradient-to-br from-[#0A1742] via-[#1a2d6b] to-[#273D89] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-6 left-6 flex items-center gap-1.5 text-white">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
              <span className="text-[var(--primary-blue)] text-[8px] font-bold">P</span>
            </div>
            <span className="text-[10px] font-bold">profuture</span>
          </div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="relative w-[120px] h-[120px]">
            <Image src="/globe.svg" alt="Dijital küre" fill className="object-contain opacity-90" />
          </div>
        </div>
        
        {/* Badge */}
        <div className={`absolute top-3 right-3 ${journal.badgeColor} text-white px-2 py-0.5 rounded text-[10px] font-medium`}>
          {journal.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] text-[var(--text-secondary)] border border-[var(--border-light)] px-2 py-0.5 rounded">Dergi</span>
        </div>
        
        {/* Title */}
        <h4 className="text-[14px] font-semibold text-[var(--text-dark)] mb-2.5 leading-tight">{journal.title}</h4>

        {/* Meta */}
        <div className="flex flex-wrap gap-2.5 text-[11px] text-[var(--text-secondary)] mb-4">
          <div className="flex items-center gap-1">
            <Icon name="cilt" size={11} />
            <span>Cilt: {journal.volume}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Number" size={11} />
            <span>Sayı: {journal.issue}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="calendar" size={11} />
            <span>{journal.date}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[var(--primary-blue)] font-medium">İçeriği Görüntüle</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group">
                <Icon name="eye" size={12} className="group-hover:invert" />
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group">
                <Icon name="download" size={12} className="group-hover:invert" />
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] transition-all group">
                <Icon name="right" size={12} className="group-hover:invert" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Journals() {
  return (
    <section className="py-10 bg-[#FAFAFA]">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[11px] text-[var(--text-secondary)] mb-0.5">Sayılar</p>
            <h2 className="text-[18px] font-bold text-[var(--text-dark)]">Dergiler</h2>
          </div>
          <button className="flex items-center gap-1.5 text-[12px] text-[var(--primary-blue)] font-medium hover:underline">
            Tümünü Görüntüle
            <Icon name="arrow-right" size={14} />
          </button>
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
