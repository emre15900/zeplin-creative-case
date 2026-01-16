'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkında', href: '/hakkinda' },
  { name: 'Sayılar', href: '/sayilar', hasDropdown: true },
  { name: 'Yayın Politikası', href: '/yayin-politikasi' },
  { name: 'Yazarlara Bilgi', href: '/yazarlara-bilgi' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--primary-blue)] flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-base font-semibold text-[var(--primary-blue)]">
              profuture
            </h1>
            <p className="text-xs text-[var(--text-secondary)]">Teknoloji Dergisi</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[var(--text-primary)] hover:text-[var(--primary-blue)] transition-colors flex items-center gap-1 text-sm font-medium"
            >
              {item.name}
              {item.hasDropdown && <Icon name="down" size={16} />}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dergi Kurulu Button */}
          <Link href="/kurul" className="btn-dark">
            <Icon name="kurul" size={20} className="invert" />
            Dergi Kurulu
          </Link>
          
          {/* Yazar Rehberi Button */}
          <Link href="/yazar-rehberi" className="btn-green">
            <Icon name="author" size={20} className="invert" />
            Yazar Rehberi
          </Link>

          {/* Search Button */}
          <button className="btn-icon-circle">
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
              <Link href="/kurul" className="btn-dark text-center">
                <Icon name="kurul" size={20} className="invert" />
                Dergi Kurulu
              </Link>
              <Link href="/yazar-rehberi" className="btn-green text-center">
                <Icon name="author" size={20} className="invert" />
                Yazar Rehberi
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
