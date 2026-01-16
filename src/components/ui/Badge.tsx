'use client';

type BadgeVariant = 'new' | 'special' | 'city' | 'environment' | 'climate' | 'research' | 'review' | 'essay';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  new: 'badge-new',
  special: 'badge-special',
  city: 'badge-city',
  environment: 'badge-environment',
  climate: 'badge-climate',
  research: 'badge-research',
  review: 'badge-review',
  essay: 'badge-essay',
};

export default function Badge({ variant, children, className = '' }: BadgeProps) {
  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
