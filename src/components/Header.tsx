'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const navItems = [
  { name: 'Amaç ve Kapsam', href: '/amac-kapsam' },
  { name: 'Etik İlkeler ve Yayın Politikası', href: '/etik-ilkeler' },
  { name: 'Makale Çağrıları', href: '/makale-cagrilari' },
  { name: 'Sayılar', href: '/sayilar' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0A1742] text-white">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="email" size={16} className="invert opacity-70" />
              <span className="text-white/80">profuture@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <span><strong className="text-[var(--accent-red)]">ISSN:</strong> 045-295</span>
            <span><strong className="text-white">Başlangıç:</strong> 2025</span>
            <span><strong className="text-white">Periyot:</strong> Yılda 2 Sayı</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <nav className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--primary-blue)] flex items-center justify-center">
              <span className="text-white font-bold text-base">P</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-[var(--primary-blue)]">
                profuture
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text-primary)] hover:text-[var(--primary-blue)] transition-colors text-[13px] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Dergi Kurulu Button */}
            <Link href="/kurul" className="flex items-center gap-2 bg-[var(--accent-green)] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              <Icon name="kurul" size={18} className="invert" />
              Dergi Kurulu
            </Link>
            
            {/* Yazar Rehberi Button */}
            <Link href="/yazar-rehberi" className="flex items-center gap-2 bg-[var(--accent-green)] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              <Icon name="author" size={18} className="invert" />
              Yazar Rehberi
            </Link>

            {/* Search Button */}
            <button className="w-9 h-9 rounded-full border border-[var(--border-light)] flex items-center justify-center hover:border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white transition-all group">
              <Icon name="search" size={16} />
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
