export function ContactCard({
  label,
  href,
  value,
  icon,
  external = false,
}: {
  label: string;
  href: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="contact-card flex items-start gap-4 p-5 group"
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-moss transition-colors group-hover:border-moss group-hover:bg-moss group-hover:text-chalk">
        {icon}
      </span>
      <span>
        <span className="label">{label}</span>
        <span className="mt-1 block font-semibold">{value}</span>
      </span>
    </a>
  );
}
