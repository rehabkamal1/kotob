import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SearchBar } from '../components/common/SearchBar';
import { EmptyState } from '../components/common/EmptyState';
import { LessonCard } from '../components/cards/LessonCard';
import { TopAd } from '../components/ads/TopAd';
import { BottomAd } from '../components/ads/BottomAd';
import { useSearch } from '../hooks/useSearch';
import { updateSEO } from '../lib/seo';
import { Search as SearchIcon, Sparkles } from 'lucide-react';

export const Search: React.FC = () => {
  const {
    query,
    setQuery,
    selectedTerm,
    setSelectedTerm,
    filteredLessons,
    totalCount,
  } = useSearch('', 'all', 'all');

  useEffect(() => {
    updateSEO({
      title: 'بحث في تحضير رياضيات الصف الأول الابتدائي',
      description: 'ابحث بسهولة وسرعة في كافة ملفات تحضير مادة الرياضيات للصف الأول الابتدائي بالكلمات المفتاحية والدروس والوحدات.',
      canonical: '/search',
    });
  }, []);

  const popularSearches = ['الجمع', 'الطرح', 'الأعداد', 'الأشكال', 'الساعة', 'النقود'];

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: 'البحث عن ملفات التحضير' }]} />

      <TopAd />

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft text-center max-w-3xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
          <SearchIcon className="w-6 h-6" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2">
          البحث السريع في تحضيرات الرياضيات
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          اكتب اسم الدرس، نواتج التعلم، أو اختر الفصل الدراسي للوصول المباشر للملف
        </p>

        <SearchBar
          value={query}
          onChange={setQuery}
          autoFocus={true}
          placeholder="ابحث بالدرس أو الوحدة (مثال: الجمع، الأعداد حتى 20)..."
        />

        {/* Quick Suggestion Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            كلمات شائعة:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setQuery(tag)}
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 font-medium transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Term Switcher */}
        <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSelectedTerm('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              selectedTerm === 'all'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            كافة الفصول ({totalCount})
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
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
          <p>
            نتائج البحث: تم العثور على <strong className="text-slate-800 font-bold">{filteredLessons.length}</strong> ملف تحضير
          </p>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            >
              مسح البحث
            </button>
          )}
        </div>

        {filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="لم نجد أي دروس مطابقة لبحثك"
            message={`لم يتم العثور على نتائج تطابق "${query}". جرب استخدام كلمات مرادفة أو ابحث عن رقم الوحدة.`}
            onReset={() => {
              setQuery('');
              setSelectedTerm('all');
            }}
          />
        )}
      </div>

      <BottomAd />
    </div>
  );
};
