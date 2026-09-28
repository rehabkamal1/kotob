import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Eye,
  Download,
  FileText,
  Calendar,
  Layers,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Share2
} from 'lucide-react';
import lessonsData from '../data/lessons.json';
import { Lesson } from '../types';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { LessonCard } from '../components/cards/LessonCard';
import { ContentAd } from '../components/ads/ContentAd';
import { BottomAd } from '../components/ads/BottomAd';
import { updateSEO } from '../lib/seo';
import { formatDateArabic } from '../lib/utils';
import { trackEvent } from '../lib/analytics';
import { NotFound } from './NotFound';

const lessons = lessonsData as Lesson[];

export const LessonDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string; termSlug?: string }>();

  // Support finding lesson by slug
  const lesson = lessons.find((l) => l.slug === slug);

  useEffect(() => {
    if (lesson) {
      const canonicalPath = `/preparation/${lesson.termSlug}/${lesson.slug}`;
      const pageTitle = `${lesson.title} للصف الأول الابتدائي PDF`;
      const metaDescription = `${lesson.description} تحميل ومشاهدة مباشرة لملف تحضير مادة الرياضيات للصف الأول الابتدائي (${lesson.term}) بصيغة PDF.`;

      // Structured Data for Google (BreadcrumbList + Article Schema)
      const schema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'الرئيسية',
                item: window.location.origin,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: lesson.term,
                item: `${window.location.origin}/preparation/${lesson.termSlug}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: lesson.title,
                item: `${window.location.origin}${canonicalPath}`,
              },
            ],
          },
          {
            '@type': 'Article',
            headline: pageTitle,
            description: metaDescription,
            datePublished: lesson.publishedAt,
            inLanguage: 'ar-EG',
            mainEntityOfPage: `${window.location.origin}${canonicalPath}`,
            author: {
              '@type': 'Organization',
              name: 'تحضير رياضيات الصف الأول الابتدائي',
            },
            publisher: {
              '@type': 'Organization',
              name: 'تحضير رياضيات الصف الأول الابتدائي',
            },
          },
        ],
      };

      updateSEO({
        title: pageTitle,
        description: metaDescription,
        canonical: canonicalPath,
        ogType: 'article',
        publishedTime: lesson.publishedAt,
        schema,
      });

      trackEvent({
        action: 'page_view',
        page_path: canonicalPath,
        page_title: pageTitle,
      });
    }
  }, [lesson]);

  if (!lesson) {
    return <NotFound />;
  }

  // Related lessons: same term, excluding current lesson, up to 3
  const relatedLessons = lessons
    .filter((l) => l.id !== lesson.id && l.termSlug === lesson.termSlug)
    .slice(0, 3);

  const handleDownloadClick = () => {
    trackEvent({
      action: 'download_pdf',
      lesson_id: lesson.id,
      lesson_title: lesson.title,
      term: lesson.term,
    });
  };

  const handleViewClick = () => {
    trackEvent({
      action: 'view_pdf',
      lesson_id: lesson.id,
      lesson_title: lesson.title,
      term: lesson.term,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: lesson.title,
        text: lesson.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الدرس إلى الحافظة بنجاح!');
    }
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'كافة التحضيرات', href: '/preparation' },
          { label: lesson.term, href: `/preparation/${lesson.termSlug}` },
          { label: lesson.title },
        ]}
      />

      {/* Main Article Container */}
      <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
        {/* Header Tags & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">
              <GraduationCap className="w-3.5 h-3.5" />
              {lesson.grade}
            </span>
            <Link
              to={`/preparation/${lesson.termSlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              {lesson.term}
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              <Layers className="w-3.5 h-3.5" />
              {lesson.unit}
            </span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-slate-100 py-1.5 px-3 rounded-lg border border-slate-200 transition-colors"
            aria-label="مشاركة رابط الدرس"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>مشاركة</span>
          </button>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
          {lesson.title}
        </h1>

        {/* Original Pedagogical Description */}
        <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/70 mb-8">
          <h2 className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>نبذة تربوية عن ملف التحضير</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {lesson.description}
          </p>
        </div>

        {/* File Information Table / Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">بطاقة بيانات الملف الفنية</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block mb-1">المادة الدراسية</span>
              <strong className="text-sm text-slate-800 font-semibold">{lesson.subject}</strong>
            </div>
            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block mb-1">الصف المستهدف</span>
              <strong className="text-sm text-slate-800 font-semibold">{lesson.grade}</strong>
            </div>
            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block mb-1">صيغة الملف</span>
              <strong className="text-sm text-slate-800 font-semibold flex items-center gap-1">
                <FileText className="w-4 h-4 text-rose-500" />
                <span>PDF عالي الجودة</span>
              </strong>
            </div>
            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 block mb-1">عدد الصفحات والحجم</span>
              <strong className="text-sm text-slate-800 font-semibold">
                {lesson.pages} صفحة ({lesson.fileSize})
              </strong>
            </div>
          </div>
        </div>

        {/* Clear Action Buttons (Clearly distinguished from ads) */}
        <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-bold text-slate-800 text-base mb-1">
              الوصول المباشر لملف التحضير عبر Google Drive
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              الملف متاح للقراءة الفورية أو التنزيل المباشر بصيغة PDF قابلة للطباعة فورًا.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href={lesson.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleViewClick}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow focus:ring-4 focus:ring-indigo-300"
            >
              <Eye className="w-4 h-4" />
              <span>مشاهدة الملف (Viewer)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={lesson.downloadUrl || lesson.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-indigo-700 border border-indigo-200 font-bold text-sm transition-all shadow-xs focus:ring-4 focus:ring-indigo-100"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              <span>تحميل PDF</span>
            </a>
          </div>
        </div>

        {/* Mid Page Ad Placement */}
        <ContentAd />

        {/* Educational Objectives Section */}
        {lesson.objectives && lesson.objectives.length > 0 && (
          <section className="mb-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              <span>نواتج التعلم والأهداف السلوكية للدرس</span>
            </h2>
            <ul className="space-y-2.5">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Concepts and Suggested Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {lesson.keyConcepts && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
              <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-600" />
                <span>المفاهيم الرياضية المتضمنة</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {lesson.keyConcepts.map((concept, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {lesson.suggestedActivities && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
              <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>استراتيجيات وأنشطة مقترحة</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {lesson.suggestedActivities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* How to use guide */}
        <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70 text-amber-900 text-xs sm:text-sm leading-relaxed mb-6">
          <h4 className="font-bold mb-1 flex items-center gap-1.5 text-amber-800">
            <HelpCircle className="w-4 h-4" />
            <span>إرشادات الاستخدام للمعلم وولي الأمر:</span>
          </h4>
          <p>
            يمكنك طباعة ورقة التحضير وإرفاقها بكشكول التحضير اليومي، أو الاستعانة بالأنشطة المحسوسة ونماذج الأسئلة لإعداد أوراق تقييم أسبوعية للطفل في المنزل أو المدرسة.
          </p>
        </div>

        {/* Metadata Footer */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-400">
          <span>تاريخ النشر والتحديث الأخير: {formatDateArabic(lesson.publishedAt)}</span>
          <span>ترخيص الاستخدام: متاح مجانًا للأغراض التعليمية غير التجارية</span>
        </div>
      </article>

      {/* Related Lessons Section */}
      {relatedLessons.length > 0 && (
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              ملفات تحضير ذات صلة في {lesson.term}
            </h2>
            <Link
              to={`/preparation/${lesson.termSlug}`}
              className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              عرض كافة دروس {lesson.term}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedLessons.map((rel) => (
              <LessonCard key={rel.id} lesson={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom Ad */}
      <BottomAd />
    </div>
  );
};
