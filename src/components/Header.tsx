'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import Image from 'next/image';

const navItems = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Amaç ve Kapsam', href: '/amac-kapsam' },
  { name: 'Etik İlkeler ve Yayın Politikası', href: '/etik-ilkeler' },
  { name: 'Makale Çağrıları', href: '/makale-cagrilari' },
  { name: 'Sayılar', href: '/sayilar' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#111B2B] text-white">
        <div className="container flex items-center justify-between py-2 text-[12px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="email" size={14} className="invert opacity-70" />
              <span className="text-white/80">profuture@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <span><strong>ISSN:</strong> 345-255</span>
            <span><strong>Başlangıç:</strong> 2025</span>
            <span><strong>Periyot:</strong> Yılda 2 Sayı</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <nav className="container flex items-center justify-between py-3">
          {/* Logo and Nav */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className=''>
            <Link href="/" className="flex items-center gap-2 mr-4">
              <div className="bg-[#273D89] p-4 rounded-lg">
                <Image src="/img/logo-white.svg" alt="Logo" width={220} height={220} />
              </div>
            </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Icon name="home" size={20} />
              </Link>
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[14px] font-medium text-[#111B2B] hover:text-[#273D89] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/kurul" className="flex items-center gap-2 bg-[#273D89] text-white px-5 py-2 rounded-lg text-[13px] font-semibold hover:opacity-90 transition-opacity">
              <Icon name="kurul" size={18} className="invert" />
              Dergi Kurulu
            </Link>

            <Link href="/yazar-rehberi" className="flex items-center gap-2 bg-[#A8B95E] text-white px-5 py-2 rounded-lg text-[13px] font-semibold hover:opacity-90 transition-opacity">
              <Icon name="author" size={18} className="invert" />
              Yazar Rehberi
            </Link>

            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#273D89] transition-all">
              <Icon name="search" size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name="menu" size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text-primary)] hover:text-[var(--primary-blue)] py-2 font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/kurul" className="flex items-center justify-center gap-2 bg-[var(--accent-green)] text-white px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="kurul" size={18} className="invert" />
                Dergi Kurulu
              </Link>
              <Link href="/yazar-rehberi" className="flex items-center justify-center gap-2 bg-[var(--accent-green)] text-white px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="author" size={18} className="invert" />
                Yazar Rehberi
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
