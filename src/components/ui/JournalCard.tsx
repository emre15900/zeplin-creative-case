'use client';

import Image from 'next/image';
import Icon from '../Icon';
import Badge from './Badge';

interface JournalCardProps {
  title: string;
  volume: number;
  issue: number;
  date: string;
  imageUrl?: string;
  isNew?: boolean;
  onView?: () => void;
  onDownload?: () => void;
}

export default function JournalCard({ 
  title, 
  volume, 
  issue, 
  date,
  imageUrl,
  isNew = false,
  onView,
  onDownload 
}: JournalCardProps) {
  return (
    <div className="card-journal">
      {/* Image */}
      <div className="card-journal-image">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
                <Icon name="cilt" size={40} className="opacity-50" />
              </div>
              <p className="text-sm opacity-70">DİJİTAL DÖNÜŞÜM</p>
            </div>
          </div>
        )}
        
        {/* Badge */}
        {isNew && (
          <div className="card-journal-badge">
            <Badge variant="new">YENİ</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="card-journal-content">
        {/* Header with logo */}
        <div className="card-journal-header">
          <div className="w-8 h-8 rounded bg-[var(--primary-blue)] flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="text-sm font-medium text-[var(--primary-blue)]">profuture</span>
          <Icon name="check" size={16} />
          <span className="ml-auto text-xs text-[var(--text-secondary)]">Dergi</span>
        </div>

        {/* Title */}
        <h4 className="card-journal-title">{title}</h4>

        {/* Meta Info */}
        <div className="card-journal-meta">
          <div className="card-journal-meta-item">
            <Icon name="cilt" size={16} />
            <span>Cilt: {volume}</span>
          </div>
          <div className="card-journal-meta-item">
            <Icon name="Number" size={16} />
            <span>Sayı: {issue}</span>
          </div>
          <div className="card-journal-meta-item">
            <Icon name="calendar" size={16} />
            <span>{date}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="card-journal-actions">
          <button className="btn-icon-circle bg-[var(--primary-blue)]" onClick={onView}>
            <Icon name="eye" size={18} className="invert" />
          </button>
          <button className="btn-icon-circle" onClick={onDownload}>
            <Icon name="download" size={18} />
          </button>
          <button className="btn-icon-circle">
            <Icon name="right" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
