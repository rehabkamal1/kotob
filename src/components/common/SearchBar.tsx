import React from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'ابحث عن درس أو وحدة (مثال: الجمع، الأعداد، الأشكال)...',
  className = '',
  autoFocus = false,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
        <SearchIcon className="w-5 h-5 text-indigo-500" />
      </div>

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full pr-11 pl-10 py-3 text-sm md:text-base bg-white border border-slate-200 rounded-xl shadow-soft placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
        aria-label="مربع البحث عن الدروس"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 hover:text-slate-600"
          aria-label="مسح نص البحث"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
