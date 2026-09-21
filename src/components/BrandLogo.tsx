type BrandIconProps = {
  className?: string;
  size?: number;
};

/**
 * Custom brand icon for "مكتبتي" — represents digital knowledge + library.
 * Stacked layers evoke book spines / library shelves, with a digital accent line.
 */
export function BrandIcon({ className = '', size = 24 }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bottom layer — widest, like a book base */}
      <rect x="5" y="20" width="22" height="7" rx="2" fill="currentColor" opacity="0.4" />
      {/* Middle layer */}
      <rect x="5" y="12" width="22" height="7" rx="2" fill="currentColor" opacity="0.7" />
      {/* Top layer — the "cover" */}
      <rect x="5" y="4" width="22" height="7" rx="2" fill="currentColor" />
      {/* Digital accent — a small bright line on the top layer */}
      <rect x="9" y="6.5" width="6" height="2" rx="1" fill="#60a5fa" />
    </svg>
  );
}

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
};

const sizeConfig = {
  sm: { iconBox: 'w-8 h-8', icon: 18, text: 'text-lg' },
  md: { iconBox: 'w-10 h-10', icon: 22, text: 'text-xl' },
  lg: { iconBox: 'w-12 h-12', icon: 26, text: 'text-2xl' },
};

export function BrandLogo({
  className = '',
  iconClassName = '',
  variant = 'light',
  size = 'md',
}: BrandLogoProps) {
  const cfg = sizeConfig[size];
  const textColor = variant === 'dark' ? 'text-white' : 'text-navy-900';
  const iconColor = variant === 'dark' ? 'text-white' : 'text-navy-800';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`${cfg.iconBox} rounded-xl bg-navy-800 flex items-center justify-center shadow-soft ${iconClassName}`}>
        <BrandIcon size={cfg.icon} className={iconColor} />
      </span>
      <span className={`${cfg.text} font-bold ${textColor}`}>مكتبتي</span>
    </span>
  );
}
