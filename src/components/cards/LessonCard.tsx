import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Download, FileText, Calendar, BookOpen, Layers } from 'lucide-react';
import { Lesson } from '../../types';
import { formatDateArabic } from '../../lib/utils';
import { trackEvent } from '../../lib/analytics';

interface LessonCardProps {
  lesson: Lesson;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const lessonPath = `/preparation/${lesson.termSlug}/${lesson.slug}`;

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

  return (
    <article className="group bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-0.5">
      {/* Visual Header / Cover Simulation with Educational Gradient */}
      <div className="relative h-44 bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 p-5 flex flex-col justify-between text-white overflow-hidden">
        {/* Subtle decorative geometric circles */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-violet-400/20 rounded-full blur-lg pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            {lesson.term}
          </span>
          <span className="text-xs font-medium text-white/90 bg-black/20 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
            PDF
          </span>
        </div>

        <div className="z-10 mt-auto">
          <div className="text-xs text-indigo-100 mb-1 flex items-center gap-1 font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span className="truncate">{lesson.unit}</span>
          </div>
          <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
            <Link to={lessonPath} className="hover:underline">
              {lesson.title}
            </Link>
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {lesson.description}
        </p>

        {/* Lesson Metadata Pills */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-indigo-500" />
            <span>{lesson.pages} صفحة ({lesson.fileSize})</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{formatDateArabic(lesson.publishedAt)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto">
          <Link
            to={lessonPath}
            onClick={handleViewClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            <Eye className="w-4 h-4" />
            <span>عرض التحضير</span>
          </Link>

          <a
            href={lesson.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
            title="فتح الملف على Google Drive"
            aria-label={`فتح ملف تحضير ${lesson.title} على Google Drive`}
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span className="hidden xs:inline">تحميل</span>
          </a>
        </div>
      </div>
    </article>
  );
};
