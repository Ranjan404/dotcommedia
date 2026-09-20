export function AnimatedBackground({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative overflow-hidden grid-motion ${className}`}>{children}</div>;
}
