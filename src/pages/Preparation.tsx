import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SearchBar } from '../components/common/SearchBar';
import { EmptyState } from '../components/common/EmptyState';
import { LessonCard } from '../components/cards/LessonCard';
import { TopAd } from '../components/ads/TopAd';
import { ContentAd } from '../components/ads/ContentAd';
import { BottomAd } from '../components/ads/BottomAd';
import { useSearch } from '../hooks/useSearch';
import { updateSEO } from '../lib/seo';
import { Filter, Sparkles } from 'lucide-react';

export const Preparation: React.FC = () => {
  const {
    query,
    setQuery,
    selectedTerm,
    setSelectedTerm,
    selectedUnit,
    setSelectedUnit,
    availableUnits,
    filteredLessons,
    totalCount,
  } = useSearch();

  useEffect(() => {
    updateSEO({
      title: 'كافة ملفات تحضير رياضيات الصف الأول الابتدائي PDF',
      description: 'فهرس شامل وتفاعلي لكافة ملفات تحضير مادة الرياضيات للصف الأول الابتدائي في مصر بصيغة PDF. تصفح وفلتر الدروس حسب الترم والوحدة والدرس.',
      canonical: '/preparation',
    });
  }, []);

  const handleReset = () => {
    setQuery('');
    setSelectedTerm('all');
    setSelectedUnit('all');
  };

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: 'كافة ملفات التحضير' }]} />

      <TopAd />

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>فهرس الدروس المكتمل</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            ملفات تحضير رياضيات الصف الأول الابتدائي
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            استعرض وحمّل جميع خطط الدروس ونماذج التحضير المعتمدة مقسمة حسب الفصول الدراسية والوحدات التعليمية.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
          <div className="max-w-2xl">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="ابحث باسم الدرس، الوحدة، أو المفهوم (مثال: الجمع، الأعداد، الأشكال)..."
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <span>تصفية سريعة:</span>
            </div>

            {/* Term Filter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedTerm('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedTerm === 'all'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الكل ({totalCount})
              </button>
              <button
                type="button"
                onClick={() => setSelectedTerm('term-1')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedTerm === 'term-1'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الترم الأول
              </button>
              <button
                type="button"
                onClick={() => setSelectedTerm('term-2')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedTerm === 'term-2'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الترم الثاني
              </button>
            </div>

            {/* Unit Dropdown Filter */}
            {availableUnits.length > 0 && (
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="bg-slate-100 border-none text-xs font-semibold text-slate-700 py-2 px-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                aria-label="تصفية حسب الوحدة التعليمية"
              >
                <option value="all">كافة الوحدات التعليمية</option>
                {availableUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
        <p>
          يتم عرض <strong className="text-slate-800 font-bold">{filteredLessons.length}</strong> من أصل{' '}
          <strong className="text-slate-800 font-bold">{totalCount}</strong> ملف تحضير
        </p>
        {(query || selectedTerm !== 'all' || selectedUnit !== 'all') && (
          <button
            onClick={handleReset}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline"
          >
            إلغاء جميع الفلاتر
          </button>
        )}
      </div>

      {/* Lessons Grid or Empty State */}
      {filteredLessons.length > 0 ? (
        <>
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
        </>
      ) : (
        <EmptyState
          title="لم نجد أي ملفات تحضير تطابق معايير البحث"
          message="جرب البحث بكلمات أبسط أو إلغاء تصفية الوحدات لعرض كافة الدروس."
          onReset={handleReset}
        />
      )}

      <BottomAd />
    </div>
  );
};
