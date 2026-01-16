'use client';

import Link from 'next/link';
import Icon from './Icon';

const footerLinks = {
  hizliErisim: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkında', href: '/hakkinda' },
    { name: 'Sayılar', href: '/sayilar' },
    { name: 'Yazarlara Bilgi', href: '/yazarlara-bilgi' },
    { name: 'İletişim', href: '/iletisim' },
  ],
  politikalar: [
    { name: 'Yayın Politikası', href: '/yayin-politikasi' },
    { name: 'Etik Kurallar', href: '/etik-kurallar' },
    { name: 'Telif Hakları', href: '/telif-haklari' },
    { name: 'Gizlilik Politikası', href: '/gizlilik' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-[var(--primary-blue-dark)] text-white">
        <div className="container py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <span className="text-[var(--primary-blue)] font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">profuture</h3>
                  <p className="text-xs text-white/60">Teknoloji Dergisi</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Türkiye&apos;nin önde gelen hakemli akademik teknoloji dergisi.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-2">
                <a href="#" className="btn-icon-circle border-white/20 hover:bg-white hover:border-white">
                  <Icon name="linkedin" size={18} />
                </a>
                <button className="btn-icon-circle border-white/20 hover:bg-white hover:border-white">
                  <span className="text-lg font-bold">𝕏</span>
                </button>
                <button className="btn-icon-circle border-white/20 hover:bg-white hover:border-white">
                  <span className="text-lg">in</span>
                </button>
                <button className="btn-icon-circle border-white/20 hover:bg-white hover:border-white">
                  <span className="text-lg">f</span>
                </button>
                <button className="btn-icon-circle border-white/20 hover:bg-white hover:border-white">
                  <span className="text-lg">▶</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-5 relative">
                Hızlı Erişim
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[var(--accent-green)]"></span>
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.hizliErisim.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-semibold mb-5 relative">
                Politikalar
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[var(--accent-red)]"></span>
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.politikalar.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-5 relative">
                İletişim
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[var(--primary-blue)]"></span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="email" size={18} className="invert opacity-70 mt-0.5" />
                  <div>
                    <p className="text-xs text-white/50">Dergi Editörü</p>
                    <p className="text-sm">Prof. Dr. Elif Başkaya Acar</p>
                    <a href="mailto:editor@profuture.com" className="text-sm text-[var(--accent-green)]">
                      editor@profuture.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="phone" size={18} className="invert opacity-70 mt-0.5" />
                  <div>
                    <p className="text-xs text-white/50">Telefon</p>
                    <p className="text-sm">+90 (312) 000 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="location" size={18} className="invert opacity-70 mt-0.5" />
                  <div>
                    <p className="text-xs text-white/50">Adres</p>
                    <p className="text-sm">Ankara, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--accent-red)] text-white">
        <div className="container py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/90">
            © 2025 Profuture Teknoloji Dergisi. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-5 text-sm text-white/80">
            <span>ISSN: 2792-0000</span>
            <span>DOI: 10.12345/profuture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
