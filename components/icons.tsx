import type { ServiceIconName } from '@/data/types';

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <span className={`arrow inline-block ${className}`} aria-hidden="true">
      →
    </span>
  );
}

function Svg({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  );
}

export function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </Svg>
  );
}

export function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

export function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M6 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2C10 20 4 14 4 5a2 2 0 0 1 2-2z" />
    </Svg>
  );
}

export function MailIcon({ className = '' }: { className?: string }) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 7l9 7 9-7" />
    </Svg>
  );
}

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 0 0 2.2 12c0 1.73.45 3.35 1.24 4.76L2 22l5.4-1.4A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.08-1.13l-.29-.17-3.2.83.85-3.12-.2-.32A8 8 0 1 1 12 20Zm4.4-5.95c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-.99-.36-1.88-1.16-.7-.62-1.17-1.39-1.3-1.63-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.08-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46a.88.88 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function ServiceGlyph({ name, className = '' }: { name: ServiceIconName; className?: string }) {
  const paths: Record<ServiceIconName, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4-4" />
      </>
    ),
    social: (
      <>
        <circle cx="7" cy="12" r="2.2" />
        <circle cx="16" cy="7" r="2.2" />
        <circle cx="16" cy="17" r="2.2" />
        <path d="M9 11.2 14.2 8.2M9 12.8l5.2 3" />
      </>
    ),
    ads: (
      <>
        <path d="M4 16V8l8-4 8 4v8l-8 4-8-4z" />
        <path d="M12 8v8M8 10.5 16 14.5" />
      </>
    ),
    web: (
      <>
        <rect x="3" y="5" width="18" height="14" />
        <path d="M3 9h18M8 5v4" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" />
        <path d="M16 10l5-3v10l-5-3z" />
      </>
    ),
    creative: (
      <>
        <path d="M12 3l2.2 6.4H21l-5.4 4 2.1 6.6L12 16.6 6.3 20l2.1-6.6L3 9.4h6.8z" />
      </>
    ),
    automation: (
      <>
        <path d="M5 7h6v4H5zM13 13h6v4h-6z" />
        <path d="M8 11v2h5M16 13V9H11" />
      </>
    ),
    landing: (
      <>
        <path d="M5 19V5h14v14" />
        <path d="M5 19h14M9 9h6M9 13h4" />
      </>
    ),
    pr: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7 7l1.5 1.5M15.5 15.5 17 17M17 7l-1.5 1.5M8.5 15.5 7 17" />
      </>
    ),
  };

  return <Svg className={className}>{paths[name]}</Svg>;
}
