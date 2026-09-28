import React from 'react';
import { FileQuestion } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  onReset?: () => void;
  resetLabel?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'لم يتم العثور على نتائج',
  message = 'جرّب كتابة كلمات بحث أخرى مثل "الأعداد"، "الجمع"، أو اختر ترمًا مختلفًا.',
  onReset,
  resetLabel = 'إعادة ضبط البحث والتصفيات',
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-white rounded-2xl border border-slate-100 shadow-soft my-6 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
        <FileQuestion className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-md">{message}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-xl transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          {resetLabel}
        </button>
      )}
    </div>
  );
};
