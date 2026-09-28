import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-sm">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-slate-800 text-lg">
                تحضير وكتب رياضيات الابتدائي والإعدادي
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md">
              منصة تعليمية مجانية متخصصة في توفير خطط ونماذج تحضير وكتب مادة الرياضيات للمرحلتين الابتدائية والإعدادية وفق المناهج المصرية المعتمدة، بهدف مساعدة المعلمين والمعلمات والطلاب وأولياء الأمور.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>محتوى تعليمي أصلي وقانوني 100%</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3">التنقل السريع</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/preparation/term-1/evaluations-solutions-grade-1" className="text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                  ⭐ حل كتاب التقييمات والأداءات
                </Link>
              </li>
              <li>
                <Link to="/preparation/term-1" className="hover:text-indigo-600 transition-colors">
                  تحضير الترم الأول
                </Link>
              </li>
              <li>
                <Link to="/preparation/term-2" className="hover:text-indigo-600 transition-colors">
                  تحضير الترم الثاني
                </Link>
              </li>
              <li>
                <Link to="/preparation" className="hover:text-indigo-600 transition-colors">
                  جميع ملفات التحضير
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-indigo-600 transition-colors">
                  البحث في الدروس
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3">الصفحات القانونية والسياسات</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600 transition-colors">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-indigo-600 transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-600 transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-indigo-600 transition-colors">
                  إخلاء المسؤولية وحقوق الملكية
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة © {currentYear} - تحضير وكتب رياضيات الابتدائي والإعدادي (مصر).
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>صُنع لدعم العملية التعليمية</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>بكل دقة وإتقان</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
