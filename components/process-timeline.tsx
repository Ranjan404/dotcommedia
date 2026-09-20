export function ProcessTimeline({
  steps,
}: {
  steps: { step: string; detail: string }[];
}) {
  return (
    <ol className="grid gap-0">
      {steps.map((item, index) => (
        <li key={item.step} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-5">
          <span className="font-semibold text-moss">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-semibold">{item.step}</h3>
            <p className="mt-1 text-sm leading-6 text-mist">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
