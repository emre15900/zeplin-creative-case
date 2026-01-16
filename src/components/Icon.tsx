'use client';

import Image from 'next/image';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

// public/icons klasöründeki SVG ikonlarını kullanır
export default function Icon({ name, size = 24, className = '' }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
}

// Yaygın kullanılan ikonlar için özel componentler
export const Icons = {
  // Navigation & Actions
  Menu: (props: Omit<IconProps, 'name'>) => <Icon name="menu" {...props} />,
  Home: (props: Omit<IconProps, 'name'>) => <Icon name="home" {...props} />,
  Search: (props: Omit<IconProps, 'name'>) => <Icon name="search" {...props} />,
  Copy: (props: Omit<IconProps, 'name'>) => <Icon name="copy" {...props} />,
  Link: (props: Omit<IconProps, 'name'>) => <Icon name="link" {...props} />,
  Eye: (props: Omit<IconProps, 'name'>) => <Icon name="eye" {...props} />,
  
  // Arrows
  ArrowUp: (props: Omit<IconProps, 'name'>) => <Icon name="arrow-up" {...props} />,
  ArrowDown: (props: Omit<IconProps, 'name'>) => <Icon name="arrow-down" {...props} />,
  ArrowLeft: (props: Omit<IconProps, 'name'>) => <Icon name="left" {...props} />,
  ArrowRight: (props: Omit<IconProps, 'name'>) => <Icon name="right" {...props} />,
  Left: (props: Omit<IconProps, 'name'>) => <Icon name="left" {...props} />,
  Right: (props: Omit<IconProps, 'name'>) => <Icon name="right" {...props} />,
  Up: (props: Omit<IconProps, 'name'>) => <Icon name="up" {...props} />,
  Down: (props: Omit<IconProps, 'name'>) => <Icon name="down" {...props} />,
  
  // Files & Documents
  Pdf: (props: Omit<IconProps, 'name'>) => <Icon name="pdf" {...props} />,
  Download: (props: Omit<IconProps, 'name'>) => <Icon name="download" {...props} />,
  Upload: (props: Omit<IconProps, 'name'>) => <Icon name="upload" {...props} />,
  
  // Status & Info
  Check: (props: Omit<IconProps, 'name'>) => <Icon name="check" {...props} />,
  Error: (props: Omit<IconProps, 'name'>) => <Icon name="error" {...props} />,
  Warning: (props: Omit<IconProps, 'name'>) => <Icon name="warning" {...props} />,
  Info: (props: Omit<IconProps, 'name'>) => <Icon name="info" {...props} />,
  
  // Categories
  Climate: (props: Omit<IconProps, 'name'>) => <Icon name="climate" {...props} />,
  City: (props: Omit<IconProps, 'name'>) => <Icon name="city" {...props} />,
  Nature: (props: Omit<IconProps, 'name'>) => <Icon name="nature" {...props} />,
  World: (props: Omit<IconProps, 'name'>) => <Icon name="World" {...props} />,
  
  // Contact & Social
  Email: (props: Omit<IconProps, 'name'>) => <Icon name="email" {...props} />,
  Phone: (props: Omit<IconProps, 'name'>) => <Icon name="phone" {...props} />,
  Location: (props: Omit<IconProps, 'name'>) => <Icon name="location" {...props} />,
  Linkedin: (props: Omit<IconProps, 'name'>) => <Icon name="linkedin" {...props} />,
  
  // Journal specific
  Calendar: (props: Omit<IconProps, 'name'>) => <Icon name="calendar" {...props} />,
  Cilt: (props: Omit<IconProps, 'name'>) => <Icon name="cilt" {...props} />,
  Number: (props: Omit<IconProps, 'name'>) => <Icon name="Number" {...props} />,
  Kurul: (props: Omit<IconProps, 'name'>) => <Icon name="kurul" {...props} />,
  Author: (props: Omit<IconProps, 'name'>) => <Icon name="author" {...props} />,
  Promotion: (props: Omit<IconProps, 'name'>) => <Icon name="promotion" {...props} />,
  
  // Dashboard & Analytics
  Dashboard: (props: Omit<IconProps, 'name'>) => <Icon name="dashboard" {...props} />,
  Analytic: (props: Omit<IconProps, 'name'>) => <Icon name="analytic" {...props} />,
  Stats: (props: Omit<IconProps, 'name'>) => <Icon name="stats" {...props} />,
  PieChart: (props: Omit<IconProps, 'name'>) => <Icon name="pie chart" {...props} />,
  Presentation: (props: Omit<IconProps, 'name'>) => <Icon name="presentation" {...props} />,
  Target: (props: Omit<IconProps, 'name'>) => <Icon name="Target" {...props} />,
  Focus: (props: Omit<IconProps, 'name'>) => <Icon name="Focus" {...props} />,
};
