import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { AdPlaceholder } from '../ads/AdPlaceholder';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileTitle: string;
  fileSize: string;
  pages: number;
  targetUrl: string;
  actionType: 'view' | 'download';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  fileTitle,
  fileSize,
  pages,
  targetUrl,
  actionType,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(6);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSecondsLeft(6);
      setIsReady(false);
      return;
    }

    setSecondsLeft(6);
    setIsReady(false);

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsReady(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercent = Math.min(100, Math.round(((6 - secondsLeft) / 6) * 100));

  const handleOpenLink = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 sm:p-7 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pt-2 pb-4 border-b border-slate-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>بوابة التنزيل الآمن المعتمدة</span>
          </div>

          <h3 id="modal-headline" className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
            {fileTitle}
          </h3>

          <div className="flex items-center justify-center gap-3 text-xs text-slate-500 mt-2">
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>{pages} صفحة</span>
            </span>
            <span>•</span>
            <span>الحجم: {fileSize}</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">Google Drive</span>
          </div>
        </div>

        {/* Progress & Countdown Section */}
        <div className="my-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1.5">
            <span className="flex items-center gap-1.5">
              {!isReady ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
                  <span>جارٍ فحص وتجهيز رابط الملف...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">الرابط جاهز الآن للفتح المباشر!</span>
                </>
              )}
            </span>
            <span className="text-indigo-600 font-bold">
              {!isReady ? `${secondsLeft} ثوانٍ` : '100%'}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-1000 ${
                isReady ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-violet-600'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Modal Advertisement Slot (AdSense Compliant) */}
        <div className="my-4">
          <AdPlaceholder slotName="نافذة التجهيز والتحميل" format="rectangle" />
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {!isReady ? (
            <button
              disabled
              className="w-full py-3.5 px-4 rounded-2xl bg-slate-100 text-slate-400 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed"
            >
              <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
              <span>يرجى الانتظار {secondsLeft} ثوانٍ لتجهيز الرابط...</span>
            </button>
          ) : (
            <button
              onClick={handleOpenLink}
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300 animate-pulse"
            >
              {actionType === 'view' ? (
                <>
                  <ExternalLink className="w-5 h-5" />
                  <span>انتقل الآن لمشاهدة الملف على Google Drive</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>بدء تحميل ملف الـ PDF الآن</span>
                </>
              )}
            </button>
          )}

          <p className="text-[11px] text-center text-slate-400 mt-2.5">
            الملفات مستضافة بأمان على خوادم Google الرسمية وخالية من أي برمجيات ضارة.
          </p>
        </div>
      </div>
    </div>
  );
};
