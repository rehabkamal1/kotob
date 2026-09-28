import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, BookOpen, Search, Info, ShieldCheck, HelpCircle, FileCheck2, Sparkles } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navLinks = [
    { to: '/', label: 'الرئيسية', icon: Home },
    { to: '/preparation/term-1/evaluations-solutions-grade-1', label: 'حل كتاب التقييمات والأداءات 2026/2027', icon: FileCheck2, isFeatured: true },
    { to: '/preparation/term-1/full-prep-math-grade-1-2025-2026', label: 'دفتر التحضير الكامل (الترم الأول)', icon: BookOpen },
    { to: '/preparation/term-1', label: 'تحضير الترم الأول', icon: BookOpen },
    { to: '/preparation/term-2', label: 'تحضير الترم الثاني', icon: BookOpen },
    { to: '/preparation/term-1/math-prep-1-school-book-term-1', label: 'كتاب المدرسة (أولى إعدادي)', icon: BookOpen },
    { to: '/preparation/term-1/math-prep-1-evaluations-book-term-1', label: 'كتاب التقييمات (أولى إعدادي)', icon: FileCheck2 },
    { to: '/preparation', label: 'كافة ملفات التحضير', icon: BookOpen },
    { to: '/search', label: 'البحث عن درس', icon: Search },
    { to: '/about', label: 'من نحن', icon: Info },
    { to: '/contact', label: 'اتصل بنا', icon: HelpCircle },
    { to: '/privacy-policy', label: 'سياسة الخصوصية', icon: ShieldCheck },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl flex flex-col z-50 p-6 animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-100">
              <span className="text-lg">📐</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 text-base block">تحضير رياضيات</span>
              <span className="text-[11px] text-indigo-600 block">الصف الأول الابتدائي</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="إغلاق القائمة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6 flex-1 overflow-y-auto space-y-1.5" aria-label="قائمة الموبايل">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    link.isFeatured
                      ? 'bg-amber-50 text-amber-900 border border-amber-200 font-bold'
                      : isActive
                      ? 'bg-indigo-50 text-indigo-700 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <Icon className={`w-4 h-4 ${link.isFeatured ? 'text-amber-600' : 'text-indigo-500'}`} />
                <span className="flex-1">{link.label}</span>
                {link.isFeatured && (
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            محتوى تعليمي أصلي متوافق مع المنهج المصري الحديث
          </p>
        </div>
      </div>
    </div>
  );
};
