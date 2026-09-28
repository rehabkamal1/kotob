import React from 'react';

interface AdPlaceholderProps {
  slotName?: string;
  format?: 'horizontal' | 'rectangle' | 'responsive';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotName = 'مساحة إعلانية',
  format = 'responsive',
  className = '',
}) => {
  // During pre-approval or development, display a clean, non-intrusive container
  // labeled strictly as an advertisement area adhering to Google AdSense policies.
  const formatHeight = format === 'horizontal' ? 'h-24 md:h-28' : format === 'rectangle' ? 'h-64' : 'min-h-[100px] py-4';

  return (
    <aside
      aria-label="مساحة إعلانية متوافقة مع معايير جوجل"
      className={`w-full my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-center transition-colors ${formatHeight} ${className}`}
    >
      <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-400">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-300"></span>
        <span>إعلان معتمد - {slotName}</span>
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-300"></span>
      </div>
      <p className="mt-1 text-[11px] text-slate-400">
        (مساحة مجهزة لشبكة Google AdSense بعد اكتمال المراجعة)
      </p>
    </aside>
  );
};
