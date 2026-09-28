import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, BookOpen, FileCheck2, Sparkles } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors duration-150 ${
      isActive
        ? 'bg-indigo-50 text-indigo-700'
        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl p-1">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base md:text-lg text-slate-800 tracking-tight leading-tight">
                  تحضير رياضيات
                </span>
                <span className="text-[11px] md:text-xs text-indigo-600 font-medium">
                  الصف الأول الابتدائي - مصر
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="شريط التنقل الرئيسي">
              <NavLink to="/" className={navClass} end>
                الرئيسية
              </NavLink>
              <NavLink to="/preparation/term-1" className={navClass}>
                تحضير الترم الأول
              </NavLink>
              <NavLink to="/preparation/term-2" className={navClass}>
                تحضير الترم الثاني
              </NavLink>
              <NavLink to="/preparation" className={navClass}>
                كافة الملفات
              </NavLink>
              <NavLink
                to="/preparation/term-1/evaluations-solutions-grade-1"
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>حل كتاب التقييمات 2026/2027</span>
              </NavLink>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <Search className="w-4 h-4 text-indigo-500" />
                <span>بحث...</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/preparation/term-1/evaluations-solutions-grade-1"
                className="p-2 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors text-xs font-bold flex items-center gap-1"
                aria-label="حل التقييمات"
              >
                <FileCheck2 className="w-4 h-4 text-amber-600" />
                <span className="text-[11px]">حل التقييمات</span>
              </Link>
              <Link
                to="/search"
                className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                aria-label="البحث"
              >
                <Search className="w-5 h-5" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="فتح القائمة الرئيسية"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
