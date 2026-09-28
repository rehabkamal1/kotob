import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { updateSEO } from '../lib/seo';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    updateSEO({
      title: 'اتصل بنا | تحضير رياضيات الصف الأول الابتدائي',
      description: 'تواصل مع فريق عمل موقع تحضير رياضيات الصف الأول الابتدائي لأي اقتراحات أو استفسارات أو ملاحظات على ملفات التحضير.',
      canonical: '/contact',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Breadcrumb items={[{ label: 'اتصل بنا' }]} />

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            تواصل معنا
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            يسعدنا تلقي آرائكم، مقترحاتكم لتطوير أوراق التحضير، أو الإبلاغ عن أي روابط تحتاج إلى تحديث.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-emerald-900">تم استلام رسالتك بنجاح!</h2>
            <p className="text-sm text-emerald-700 max-w-md mx-auto">
              شكرًا لتواصلك معنا وحرصك على دعم العملية التعليمية. سيقوم فريق الإشراف بالرد على بريدك الإلكتروني في أقرب وقت.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
              }}
              className="mt-4 px-5 py-2 text-xs font-semibold bg-white border border-emerald-200 text-emerald-800 rounded-xl hover:bg-emerald-100 transition-colors"
            >
              إرسال رسالة أخرى
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="name">
                  الاسم الكامل <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك الكريم"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="email">
                  البريد الإلكتروني <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="subject">
                موضوع الرسالة
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="اقتراح إضافة درس، استفسار، إبلاغ عن رابط..."
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="message">
                نص الرسالة <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="اكتب تفاصيل رسالتك هنا..."
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-colors shadow-sm focus:ring-4 focus:ring-indigo-300"
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
              <span>إرسال الرسالة</span>
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>البريد المباشر: info@kotob-math.edu</span>
          </span>
          <span>الرد خلال 24 - 48 ساعة عمل</span>
        </div>
      </div>
    </div>
  );
};
