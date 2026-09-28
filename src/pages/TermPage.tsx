import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SearchBar } from '../components/common/SearchBar';
import { EmptyState } from '../components/common/EmptyState';
import { LessonCard } from '../components/cards/LessonCard';
import { TopAd } from '../components/ads/TopAd';
import { ContentAd } from '../components/ads/ContentAd';
import { BottomAd } from '../components/ads/BottomAd';
import { useSearch } from '../hooks/useSearch';
import { updateSEO } from '../lib/seo';
import { Calendar, BookOpen, Layers } from 'lucide-react';

interface TermPageProps {
  termSlugProp?: 'term-1' | 'term-2';
}

export const TermPage: React.FC<TermPageProps> = ({ termSlugProp }) => {
  const params = useParams<{ termSlug?: string }>();
  const activeTermSlug = termSlugProp || (params.termSlug as 'term-1' | 'term-2') || 'term-1';

  const isTerm1 = activeTermSlug === 'term-1';
  const termTitle = isTerm1 ? 'الترم الأول' : 'الترم الثاني';
  const otherTermSlug = isTerm1 ? 'term-2' : 'term-1';
  const otherTermTitle = isTerm1 ? 'الترم الثاني' : 'الترم الأول';

  const {
    query,
    setQuery,
    selectedUnit,
    setSelectedUnit,
    availableUnits,
    filteredLessons,
  } = useSearch('', activeTermSlug, 'all');

  useEffect(() => {
    updateSEO({
      title: `تحضير رياضيات الصف الأول الابتدائي ${termTitle} PDF كامل`,
      description: `تحميل وتصفح تحضير مادة الرياضيات للصف الأول الابتدائي ${termTitle} المنهج المصري كاملاً بصيغة PDF. يشمل كافة خطط الدروس والوحدات التعليمية ونواتج التعلم.`,
      canonical: `/preparation/${activeTermSlug}`,
    });
  }, [activeTermSlug, termTitle]);

  const handleReset = () => {
    setQuery('');
    setSelectedUnit('all');
  };

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: 'كافة ملفات التحضير', href: '/preparation' },
          { label: `تحضير ${termTitle}` },
        ]}
      />

      <TopAd />

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>{termTitle} - العام الدراسي 2026/2027</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              تحضير رياضيات الصف الأول - {termTitle}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {isTerm1
                ? 'فهرس متكامل لدروس واستكشافات الأعداد حتى 10، المقارنة والترتيب، الجمع والطرح المبدئي والأشكال الهندسية بصيغة PDF قابلة للطباعة.'
                : 'ملفات تدريس متكاملة تشمل الأعداد حتى 20 والقيمة المكانية (الآحاد والعشرات)، استراتيجيات الحساب الذهني، قراءة الساعة والبيانات والنقود.'}
            </p>
          </div>

          {/* Switch to Other Term Pill */}
          <div className="shrink-0">
            <Link
              to={`/preparation/${otherTermSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>الانتقال إلى {otherTermTitle}</span>
            </Link>
          </div>
        </div>

        {/* Toolbar: Search and Unit Filter */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={`ابحث داخل دروس ${termTitle}...`}
            />
          </div>
          <div>
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="w-full h-[46px] bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 py-2.5 px-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              aria-label={`تصفية وحدات ${termTitle}`}
            >
              <option value="all">كافة وحدات {termTitle}</option>
              {availableUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid or Empty */}
      {filteredLessons.length > 0 ? (
        <div className="space-y-8">
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
            <div className="flex items-center gap-1.5 font-medium">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>تم العثور على {filteredLessons.length} دروس تحضير في {termTitle}</span>
            </div>
            {query && (
              <button onClick={handleReset} className="text-indigo-600 hover:underline">
                مسح البحث
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.slice(0, 6).map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>

          {filteredLessons.length > 6 && (
            <>
              <ContentAd />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLessons.slice(6).map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <EmptyState
          title={`لم نجد نتائج مطابقة في ${termTitle}`}
          message="جرب البحث بكلمات أخرى أو اختر وحدة مختلفة."
          onReset={handleReset}
        />
      )}

      <BottomAd />
    </div>
  );
};
