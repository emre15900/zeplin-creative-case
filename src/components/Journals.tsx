'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from './Icon';

import 'swiper/css';
import 'swiper/css/navigation';

interface JournalItem {
  id: number;
  title: string;
  volume: number;
  issue: number;
  date: string;
  badge: string;
  hasRibbon?: boolean;
  image: string;
  description: string;
  downloadUrl: string;
  detailUrl: string;
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
    description:
      'Dijital dönüşüm, yapay zeka ve sürdürülebilir teknoloji üzerine derlenmiş seçkin makaleler.',
    downloadUrl: '/docs/dergi-ornek.pdf',
    detailUrl: '/dergiler/detay',
  },
  {
    id: 2,
    title: 'Teknoloji ve Dijital Dergisi',
    volume: 1,
    issue: 1,
    date: 'Aralık 2022',
    badge: 'Dergi',
    image: '/img/dergiler.svg',
    description:
      'Yeni nesil teknolojiler, endüstri trendleri ve geleceğe dair uzman analizleri.',
    downloadUrl: '/docs/dergi-ornek.pdf',
    detailUrl: '/dergiler/detay',
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
    description:
      'Veri bilimi, siber güvenlik ve ürün tasarımı odağında güncel içerikler.',
    downloadUrl: '/docs/dergi-ornek.pdf',
    detailUrl: '/dergiler/detay',
  },
];

function JournalCard({
  journal,
  onView,
}: {
  journal: JournalItem;
  onView: () => void;
}) {
  return (
    <div className="bg-white border border-[#E9F4F8] rounded-[20px] p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-[15px] relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Son Sayı Ribbon */}
      {journal.hasRibbon && (
        <div className="absolute -left-[2px] top-[80px] sm:top-[121px] z-20">
          <div 
            className="bg-[#DB0D15] text-white text-[10px] sm:text-[11px] font-bold py-2 sm:py-3 px-[5px] sm:px-[6px] rounded-r-lg flex items-center justify-center"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '1px' }}
          >
            Son Sayı
          </div>
        </div>
      )}
      
      {/* Magazine Image */}
      <div className="relative w-full sm:w-[191px] h-[200px] sm:h-[285px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
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
        <div className="flex flex-col gap-2 sm:gap-[11px]">
          {/* Top Row: PDF Icon & YENİ Badge */}
          <div className="flex items-center justify-between">
            <div className="w-[22px] h-[25px] flex items-center justify-center">
              <Icon name="pdf" size={22} className="text-[#676A73]" />
            </div>
            <span className="bg-[#00C3D0] text-white text-[10px] sm:text-[11px] font-bold px-2 py-[2px] rounded-full">
              YENİ
            </span>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="bg-[#F7F8FF] text-[#112053] text-[11px] sm:text-[12px] font-medium px-[10px] py-[3px] rounded-lg">
              Dergi
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[16px] sm:text-[18px] font-bold text-[#112053] leading-[1.35] pr-2">
            {journal.title}
          </h4>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[11px] sm:text-[12px] text-[#676A73]">
            <div className="flex items-center gap-1.5">
              <Icon name="cilt" size={14} className="text-[#676A73]" />
              <span>Cilt: <strong className="text-[#112053]">{journal.volume}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="Number" size={14} className="text-[#676A73]" />
              <span>Sayı: <strong className="text-[#112053]">{journal.issue}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="calendar" size={14} className="text-[#676A73]" />
              <span>{journal.date}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-auto pt-3 sm:pt-4">
          <button
            type="button"
            onClick={onView}
            aria-label="Gözat"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] sm:rounded-[15px] bg-[#273D89] flex items-center justify-center hover:bg-[#1e3070] transition-colors cursor-pointer"
          >
            <Icon name="eye" size={16} className="invert" />
          </button>
          <a
            href={journal.downloadUrl}
            download
            aria-label="İndir"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] sm:rounded-[15px] bg-[#E8EAF5] flex items-center justify-center hover:bg-[#d8daea] transition-colors"
          >
            <Icon name="download" size={16} className="text-[#676A73]" />
          </a>
          <a
            href={journal.detailUrl}
            aria-label="Detay"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] sm:rounded-[15px] bg-[#E8EAF5] flex items-center justify-center hover:bg-[#d8daea] transition-colors"
          >
            <Icon name="right" size={16} className="text-[#676A73]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Journals() {
  const [activeJournal, setActiveJournal] = useState<JournalItem | null>(null);
  return (
    <section id="sayilar" className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#FBFBFB]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-0 mb-8 sm:mb-10">
          {/* Left - Title Section with Nav Arrows */}
          <div className="flex items-end gap-3 sm:gap-[19px]">
            {/* Title Section */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-[13px] sm:text-[14px] text-[#676A73]">Sayılar</p>
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#273D89]">Dergiler</h2>
            </div>
            
            {/* Nav Arrows */}
            <div className="flex items-center gap-2 sm:gap-3 pb-1">
              <button
                type="button"
                className="journals-swiper-prev w-9 h-9 sm:w-10 sm:h-10 cursor-pointer rounded-[12px] sm:rounded-[15px] bg-[#E8EAF5] flex items-center justify-center hover:bg-[#d8daea] transition-colors group"
              >
                <Icon name="left" size={12} className="text-[#ACB1C6] group-hover:text-[#676A73]" />
              </button>
              <button
                type="button"
                className="journals-swiper-next w-9 h-9 sm:w-10 sm:h-10 cursor-pointer rounded-[12px] sm:rounded-[15px] bg-[#273D89] flex items-center justify-center hover:bg-[#1e3070] transition-colors"
              >
                <Icon name="right" size={12} className="invert" />
              </button>
            </div>
          </div>

          {/* Right - View All Link */}
          <button className="flex items-center gap-2 text-[14px] sm:text-[16px] text-[#273D89] font-medium hover:underline cursor-pointer self-start sm:self-auto">
            Tümünü Görüntüle
            <Icon name="right" size={14} className="text-[#273D89]" />
          </button>
        </div>

        {/* Journals Grid */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.journals-swiper-prev',
            nextEl: '.journals-swiper-next',
            disabledClass: 'opacity-50 pointer-events-none',
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="journals-swiper"
        >
          {journals.map((journal) => (
            <SwiperSlide key={journal.id} className="h-auto">
              <JournalCard
                journal={journal}
                onView={() => setActiveJournal(journal)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {activeJournal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Dergi önizleme"
        >
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => setActiveJournal(null)}
            aria-label="Kapat"
          />
          <div className="bg-white w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden shadow-xl relative z-10 flex flex-col">
            <button
              type="button"
              onClick={() => setActiveJournal(null)}
              className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#E8EAF5] flex items-center justify-center hover:bg-white"
              aria-label="Kapat"
            >
              <span className="text-[#273D89] text-xl leading-none">×</span>
            </button>
            <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8">
              <div className="w-full lg:w-[280px] flex flex-col gap-4">
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-[#F7F8FF]">
                  <Image
                    src={activeJournal.image}
                    alt={activeJournal.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#676A73]">
                  <span className="bg-[#F7F8FF] text-[#112053] text-[11px] sm:text-[12px] font-medium px-[10px] py-[3px] rounded-lg">
                    {activeJournal.badge}
                  </span>
                  <span>•</span>
                  <span>{activeJournal.date}</span>
                </div>
                <div className="flex flex-col gap-2 text-[12px] text-[#676A73]">
                  <div className="flex items-center justify-between">
                    <span>Cilt</span>
                    <strong className="text-[#112053]">{activeJournal.volume}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sayı</span>
                    <strong className="text-[#112053]">{activeJournal.issue}</strong>
                  </div>
                </div>
                <a
                  href={activeJournal.downloadUrl}
                  download
                  className="inline-flex items-center justify-center h-[40px] px-5 rounded-full bg-[#E8EAF5] text-[#273D89] text-[13px] sm:text-[14px] font-medium hover:bg-[#d8daea] transition-colors"
                >
                  PDF İndir
                </a>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#112053]">
                  {activeJournal.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#676A73] leading-[1.7]">
                  {activeJournal.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F7F8FF] rounded-xl p-4">
                    <h4 className="text-[13px] font-semibold text-[#112053] mb-2">
                      Öne Çıkanlar
                    </h4>
                    <ul className="text-[12px] text-[#676A73] space-y-1">
                      <li>• Yapay zekâ ile dönüşüm stratejileri</li>
                      <li>• Veri odaklı karar alma modelleri</li>
                      <li>• Siber güvenlikte yeni yaklaşımlar</li>
                    </ul>
                  </div>
                  <div className="bg-[#F7F8FF] rounded-xl p-4">
                    <h4 className="text-[13px] font-semibold text-[#112053] mb-2">
                      İçerik Özeti
                    </h4>
                    <p className="text-[12px] text-[#676A73] leading-[1.6]">
                      Bu sayıda teknoloji trendleri, sektör analizleri ve uygulama
                      örnekleri kısa, okunabilir formatlarda sunuluyor.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Yapay Zekâ', 'Veri Bilimi', 'Sürdürülebilirlik', 'Tasarım'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-[12px] text-[#112053] bg-[#F7F8FF] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href={activeJournal.detailUrl}
                    className="inline-flex items-center justify-center h-[40px] px-5 rounded-full bg-[#273D89] text-white text-[13px] sm:text-[14px] font-medium hover:bg-[#1e3070] transition-colors"
                  >
                    Detaya Git
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
