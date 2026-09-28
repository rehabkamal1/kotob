import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { updateSEO } from '../lib/seo';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'سياسة الخصوصية | تحضير رياضيات الصف الأول الابتدائي',
      description: 'سياسة الخصوصية وإشعار ملفات تعريف الارتباط وملفات الكوكيز وشبكات الإعلانات التابعة لـ Google في موقع تحضير رياضيات.',
      canonical: '/privacy-policy',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb items={[{ label: 'سياسة الخصوصية' }]} />

      <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>حماية البيانات والخصوصية</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            سياسة الخصوصية واستخدام ملفات تعريف الارتباط (Cookies)
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            تاريخ السريان والتحديث الأخير: سبتمبر 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. مقدمة</h2>
          <p>
            خصوصية زوارنا الكرام في موقع "تحضير رياضيات الصف الأول الابتدائي" لها أهمية بالغة لدينا. توضح هذه الوثيقة أنواع المعلومات الشخصية التي يتم جمعها أو تسجيلها بواسطة الموقع وكيفية استخدامها لحماية حقوق المستخدم والامتثال لسياسات Google الصارمة.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. ملفات السجل (Log Files)</h2>
          <p>
            مثل معظم خوادم المواقع الإلكترونية القياسية، يستخدم موقعنا ملفات السجل. تشمل المعلومات داخل ملفات السجل: عناوين بروتوكول الإنترنت (IP)، نوع المتصفح، مزود خدمة الإنترنت (ISP)، طابع التاريخ/الوقت، صفحات الإحالة/الخروج، وعدد النقرات لتحليل الاتجاهات وإدارة الموقع، دون جمع معلومات تحدد الهوية الشخصية بشكل مباشر.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. ملفات تعريف الارتباط وإعلانات Google AdSense</h2>
          <p>
            يستخدم هذا الموقع ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح وتخصيص المحتوى.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pr-2">
            <li>
              تستخدم جهات خارجية من بينها شركة Google ملفات تعريف ارتباط لعرض الإعلانات استنادًا إلى زيارات المستخدم السابقة لموقعنا أو لمواقع أخرى على الويب.
            </li>
            <li>
              يمكّن ملف تعريف الارتباط للإعلانات من Google وشركائها من عرض إعلانات للمستخدمين وفق اهتماماتهم عبر شبكة الإنترنت.
            </li>
            <li>
              يمكن للمستخدمين إلغاء الاشتراك في الإعلانات المخصصة عن طريق زيارة <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">إعدادات الإعلانات في Google</a>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. تحليلات الموقع (Google Analytics)</h2>
          <p>
            قد نستخدم خدمة Google Analytics لفهم سلوك التصفح العام ومعدل تصفح ملفات التحضير الأكثر طلباً، وذلك بهدف تحسين تجربة التعليم دون جمع بيانات حساسة أو كشف هويات الزوار.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. روابط الخدمات الخارجية (Google Drive)</h2>
          <p>
            يحتوي موقعنا على روابط خارجية لفتح أو تحميل ملفات الـPDF المستضافة بأمان على Google Drive. نحن غير مسؤولين عن ممارسات الخصوصية أو سياسات تلك المنصات الخارجية، ونوصي بمراجعة سياسات الخصوصية الخاصة بها.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">6. الموافقة والتعديلات</h2>
          <p>
            باستخدامك لموقعنا، فإنك توافق بموجب ذلك على سياسة الخصوصية الخاصة بنا وتوافق على شروطها. يحق لنا تحديث هذه السياسة دورياً وفقاً للمتطلبات التنظيمية وسياسات النشر العالمية.
          </p>
        </section>
      </article>
    </div>
  );
};
