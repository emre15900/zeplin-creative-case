'use client';

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
    <div className="bg-white border-2 border-slate-100 rounded-xl overflow-hidden hover:border-[var(--primary-blue)] hover:shadow-lg transition-all">
      {/* Image */}
      <div className="relative h-[160px] bg-gradient-to-br from-[#0A1742] via-[#1a2d6b] to-[#273D89] overflow-hidden">
        {/* Tech decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-cyan-400/20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-cyan-400/15"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-lg">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100/50 to-blue-100/50 border border-slate-300/50"></div>
          </div>
        </div>
        
        {/* Badge */}
        <div className={`absolute top-3 right-3 ${journal.badgeColor} text-white px-2 py-0.5 rounded text-[10px] font-medium`}>
          {journal.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded bg-[var(--primary-blue)] flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">P</span>
          </div>
          <span className="text-[11px] font-semibold text-[var(--primary-blue)]">profuture</span>
          <Icon name="check" size={12} className="text-[var(--accent-green)]" />
        </div>

        {/* Category */}
        <p className="text-[10px] text-[var(--text-secondary)] mb-1">Dergi</p>
        
        {/* Title */}
        <h4 className="text-[13px] font-semibold text-[var(--text-dark)] mb-2.5 leading-tight">{journal.title}</h4>

        {/* Meta */}
        <div className="flex flex-wrap gap-2.5 text-[10px] text-[var(--text-secondary)] mb-3">
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
        <div className="border-t border-slate-100 pt-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[var(--primary-blue)] font-medium">İçeriği Görüntüle</span>
            <div className="flex items-center gap-1.5">
              <button className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white transition-all group">
                <Icon name="eye" size={12} />
              </button>
              <button className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white transition-all group">
                <Icon name="download" size={12} />
              </button>
              <button className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white transition-all group">
                <Icon name="right" size={12} />
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
            <p className="text-[10px] text-[var(--text-secondary)] mb-0.5">Sayılar</p>
            <h2 className="text-lg font-bold text-[var(--text-dark)]">Dergiler</h2>
          </div>
          <button className="flex items-center gap-1.5 text-xs text-[var(--primary-blue)] font-medium hover:underline">
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
