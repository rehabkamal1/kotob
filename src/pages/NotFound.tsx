import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen, AlertTriangle } from 'lucide-react';
import { updateSEO } from '../lib/seo';

export const NotFound: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'الصفحة غير موجودة 404 | تحضير رياضيات الصف الأول الابتدائي',
      description: 'عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تصفح دروس تحضير الرياضيات من الصفحة الرئيسية.',
      canonical: '/404',
    });
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-soft space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-extrabold text-indigo-600 block mb-2">404</span>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
            الصفحة غير موجودة
          </h1>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            يبدو أن الرابط الذي اتبعته غير صحيح، أو ربما تم تغيير مسار ملف التحضير.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>الصفحة الرئيسية</span>
          </Link>
          <Link
            to="/search"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span>البحث في الدروس</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link
            to="/preparation"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>تصفح كافة ملفات التحضير</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
