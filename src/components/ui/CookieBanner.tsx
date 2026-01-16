'use client';

import { useState } from 'react';
import Icon from '../Icon';

interface CookieBannerProps {
  onDecline?: () => void;
  onAllow?: () => void;
}

export default function CookieBanner({ onDecline, onAllow }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDecline = () => {
    setIsVisible(false);
    onDecline?.();
  };

  const handleAllow = () => {
    setIsVisible(false);
    onAllow?.();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#F5F5F5] border border-[#E0E4E6] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-white border border-[#E0E4E6] flex items-center justify-center flex-shrink-0">
        <Icon name="info" size={20} />
      </div>

      {/* Text */}
      <div className="flex-1 text-sm text-[#676A73]">
        We use cookies to ensure that we give you the best experience on our website.{' '}
        <a href="/cookies" className="text-[var(--primary-blue)] hover:underline">
          Read cookies policies.
        </a>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleDecline}
          className="px-5 py-2.5 rounded-lg border border-[#ACB1C6] text-sm font-medium text-[#2A2C31] hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] transition-all"
        >
          Decline
        </button>
        <button
          onClick={handleAllow}
          className="px-5 py-2.5 rounded-lg bg-[var(--primary-blue)] text-white text-sm font-medium hover:bg-[var(--primary-blue-dark)] transition-colors"
        >
          Allow
        </button>
      </div>
    </div>
  );
}
