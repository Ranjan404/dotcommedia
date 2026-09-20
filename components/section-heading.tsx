export function SectionHeading({
  label,
  title,
  copy,
  light = false,
}: {
  label: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? 'label text-brass' : 'label'}>{label}</p>
      <h2
        className={`display mt-3 text-3xl leading-tight sm:text-4xl ${light ? 'text-chalk' : 'text-night'}`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`mt-4 text-base leading-7 ${light ? 'text-white/70' : 'text-mist'}`}>{copy}</p>
      ) : null}
    </div>
  );
}
