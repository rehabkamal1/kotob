import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileCheck,
  Smartphone,
  Sparkles,
  ArrowLeft,
  Calendar,
  Layers,
  Award,
  CheckCircle2,
  FileText,
  FileCheck2
} from 'lucide-react';
import lessonsData from '../data/lessons.json';
import { Lesson } from '../types';
import { LessonCard } from '../components/cards/LessonCard';
import { TopAd } from '../components/ads/TopAd';
import { ContentAd } from '../components/ads/ContentAd';
import { BottomAd } from '../components/ads/BottomAd';
import { updateSEO } from '../lib/seo';

const lessons = lessonsData as Lesson[];

export const Home: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'تحضير رياضيات الصف الأول الابتدائي | المنهج المصري PDF كامل',
      description: 'دليل شامل لتحضير مادة الرياضيات للصف الأول الابتدائي في مصر (الترم الأول والثاني). خطط دروس نموذجية جاهزة للطباعة والتحميل بصيغة PDF تتوافق مع نظام التعليم الجديد.',
      canonical: '/',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'تحضير رياضيات الصف الأول الابتدائي',
        url: window.location.origin,
        description: 'موقع تعليمي متخصص في توفير تحضير مادة الرياضيات للصف الأول الابتدائي للمنهج المصري.',
        inLanguage: 'ar-EG',
      },
    });
  }, []);

  const latestLessons = lessons.slice(0, 6);
  const term1Count = lessons.filter((l) => l.termSlug === 'term-1').length;
  const term2Count = lessons.filter((l) => l.termSlug === 'term-2').length;

  return (
    <div className="space-y-12">
      {/* Top Banner Ad Area */}
      <TopAd />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-800 text-white shadow-xl">
        {/* Abstract background decorative shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-violet-400/20 blur-2xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs sm:text-sm font-medium mb-6 text-indigo-100 border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>المنهج المصري الحديث - الصف الأول الابتدائي والأول الإعدادي</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            تحضير وكتب الرياضيات <br className="hidden sm:inline" />
            <span className="text-amber-300">الابتدائي والإعدادي</span>
          </h1>

          <p className="text-base sm:text-xl text-indigo-100 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            كل ما تحتاجه من خطط دروس يومية، الكتب المدرسية الرسمية، وحل كتب التقييمات والواجبات الأسبوعية بصيغة PDF مجانية للترمين الأول والثاني.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <Link
              to="/preparation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>تصفح ملفات التحضير</span>
              <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
            </Link>

            <Link
              to="/search"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-500/40 hover:bg-indigo-500/60 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>البحث السريع في الدروس</span>
            </Link>
          </div>

          {/* Quick Features List */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/15 text-xs sm:text-sm font-medium">
            <div className="flex items-center justify-center gap-2">
              <Layers className="w-4 h-4 text-amber-300" />
              <span>ملفات منظمة ومفصلة</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-300" />
              <span>ملفات PDF جاهزة</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Smartphone className="w-4 h-4 text-cyan-300" />
              <span>تصميم مناسب للموبايل</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-rose-300" />
              <span>وصول مجاني وسهل</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Big Documents: Full Prep & Evaluations Book Solutions */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              أهم الملفات المطلوبة للعام الدراسي الحالي
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-2">
              دفتر التحضير الكامل &amp; حل كتاب التقييمات والأداءات
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Evaluations Solutions */}
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white rounded-3xl p-6 sm:p-7 border-2 border-amber-300 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
              الأعلى طلباً ⭐
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-2">
                <FileCheck2 className="w-4 h-4 text-amber-600" />
                <span>كتاب الأداءات والتقييمات الأسبوعية 2026/2027</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                حل كتاب التقييمات والأداءات الصفية والمنزلية رياضيات
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                الحلول النموذجية الكاملة لكافة التقييمات الأسبوعية والواجبات المنزلية والمهام الأدائية لمادة الرياضيات للصف الأول الابتدائي (الترم الأول).
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-amber-200/60">
                <span className="font-semibold text-slate-700">📄 96 صفحة</span>
                <span>•</span>
                <span className="font-semibold text-slate-700">💾 حجم: 29.6 MB</span>
                <span>•</span>
                <span className="text-emerald-700 font-bold">PDF عالي الجودة</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/preparation/term-1/evaluations-solutions-grade-1"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>مشاهدة وتحميل حل كتاب التقييمات</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Card 2: Full Prep Binder */}
          <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-white rounded-3xl p-6 sm:p-7 border-2 border-indigo-200 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
              المنهج كاملاً 📚
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 mb-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>دفتر التحضير النموذجي 2025/2026</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                دفتر تحضير رياضيات الصف الأول الابتدائي كامل الترم الأول
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                دفتر التحضير الإلكتروني المعتمد والشامل لكافة دروس ووحدات الفصل الدراسي الأول مع توزيع الخطة الزمنية ونواتج التعلم واستراتيجيات التدريس.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-indigo-100">
                <span className="font-semibold text-slate-700">📄 142 صفحة</span>
                <span>•</span>
                <span className="font-semibold text-slate-700">💾 حجم: 22.5 MB</span>
                <span>•</span>
                <span className="text-indigo-700 font-bold">جاهز للطباعة A4</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/preparation/term-1/full-prep-math-grade-1-2025-2026"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>مشاهدة وتحميل دفتر التحضير كامل</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grade 7 / Prep 1 Special Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              جديد: مرحلة التعليم الإعدادي
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-2">
              رياضيات الصف الأول الإعدادي (كتاب المدرسة &amp; كتاب التقييمات)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: School Book */}
          <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-white rounded-3xl p-6 sm:p-7 border-2 border-blue-300 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
              كتاب الوزارة 📘
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 mb-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>الصف الأول الإعدادي - الترم الأول</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                كتاب المدرسة رياضيات الصف الأول الإعدادي المنهج الجديد
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                كتاب الطالب المدرسي المعتمد والكامل لمادة الرياضيات يشمل وحدات الجبر والإحصاء والهندسة مع كافة الشروحات والتدريبات الرسمية.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-blue-200/60">
                <span className="font-semibold text-slate-700">📄 168 صفحة</span>
                <span>•</span>
                <span className="font-semibold text-slate-700">💾 حجم: 34 MB</span>
                <span>•</span>
                <span className="text-blue-700 font-bold">المنهج الكامل</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/preparation/term-1/math-prep-1-school-book-term-1"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>مشاهدة وتحميل كتاب المدرسة</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Card 2: Evaluations Book */}
          <div className="bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-white rounded-3xl p-6 sm:p-7 border-2 border-teal-300 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-teal-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
              التقييمات الأسبوعية 📝
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-800 mb-2">
                <FileCheck2 className="w-4 h-4 text-teal-600" />
                <span>المهام الأدائية وأعمال السنة 2026/2027</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                كتاب التقييمات والأداءات الأسبوعية أولى إعدادي الترم الأول
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                كراسة الواجبات المنزلية والتقييمات الأسبوعية والمهام المعتمدة لقياس نواتج التعلم التراكمية لمادة الرياضيات للمرحلة الإعدادية.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-teal-200/60">
                <span className="font-semibold text-slate-700">📄 112 صفحة</span>
                <span>•</span>
                <span className="font-semibold text-slate-700">💾 حجم: 28 MB</span>
                <span>•</span>
                <span className="text-teal-700 font-bold">PDF عالي الجودة</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/preparation/term-1/math-prep-1-evaluations-book-term-1"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>مشاهدة وتحميل كتاب التقييمات</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Showcase (حسب الترم) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            تصفح التحضير حسب الفصل الدراسي
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            اختر الفصل الدراسي المطلوب للوصول المباشر إلى خطط الدروس والوحدات التعليمية المحددة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Term 1 Card */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-hover transition-all flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-indigo-700" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">
                  <Calendar className="w-3.5 h-3.5" />
                  الفصل الدراسي الأول
                </span>
                <span className="text-xs text-slate-400 font-medium">{term1Count} ملفات جاهزة</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                تحضير رياضيات الصف الأول - الترم الأول
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                يشمل استكشاف الأعداد حتى 10، مقارنة وترتيب الأعداد، ومفاهيم الجمع والطرح الأساسية بالإضافة إلى الأشكال الهندسية والمجسمات.
              </p>
            </div>
            <Link
              to="/preparation/term-1"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <span>تصفح تحضير الترم الأول</span>
              <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
            </Link>
          </div>

          {/* Term 2 Card */}
          <div className="relative group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-hover transition-all flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-violet-500 to-violet-700" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-50 text-violet-700">
                  <Calendar className="w-3.5 h-3.5" />
                  الفصل الدراسي الثاني
                </span>
                <span className="text-xs text-slate-400 font-medium">{term2Count} ملفات جاهزة</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                تحضير رياضيات الصف الأول - الترم الثاني
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                يشمل الأعداد حتى 20 والقيمة المكانية (آحاد وعشرات)، استراتيجيات الحساب الذهني للجمع والطرح، قراءة الوقت، والبيانات والنقود.
              </p>
            </div>
            <Link
              to="/preparation/term-2"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <span>تصفح تحضير الترم الثاني</span>
              <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid Content Ad */}
      <ContentAd />

      {/* Latest Uploads / Lessons Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              أحدث ملفات التحضير المضافة
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              تصفح أحدث خطط الدروس التفاعلية المعدّة وفق معايير وزارة التربية والتعليم المصرية.
            </p>
          </div>

          <Link
            to="/preparation"
            className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-700"
          >
            <span>عرض كافة الملفات ({lessons.length})</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      {/* Educational Value Proposition for AdSense Compliance */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            لماذا تختار تحضيراتنا لمادة الرياضيات؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            نحرص على صياغة محتوى تحضيري تربوي متكامل يركز على الفهم العميق ومهارات القرن الحادي والعشرين وليس مجرد تلقين رياضي تقليدي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 text-right space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">استراتيجيات تعلم نشط</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              كل ملف تحضير يشتمل على أنشطة محسوسة (كالمكعبات والصلصال وبطاقات الذاكرة) لتيسير استيعاب المفاهيم المجردة للأطفال.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-violet-50/50 border border-violet-100/60 text-right space-y-2">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">تنسيق مخصص للطباعة</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ملفات PDF منسقة بدقة وفق مقاس الورق القياسي A4 وخطوط عربية واضحة وجداول نواتج تعلم مريحة للعين وقابلة للطباعة المباشرة.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/60 text-right space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">أصالة وجودة المحتوى</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              جميع الشروحات والأوصاف التربوية تم تدقيقها وصياغتها أصلياً لضمان فائدة حقيقية للمعلم وولي الأمر وتوافق تام مع معايير جودة المحتوى.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <BottomAd />
    </div>
  );
};
