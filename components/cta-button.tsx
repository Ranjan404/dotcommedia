import Link from 'next/link';
import { Arrow } from './icons';

type Variant = 'primary' | 'ghost' | 'light';

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    primary: 'button-primary',
    ghost: 'button-ghost',
    light: 'button-light',
  };

  return (
    <Link className={`button ${styles[variant]} ${className}`} href={href}>
      {children} <Arrow />
    </Link>
  );
}
