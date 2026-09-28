import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { updateSEO } from '../lib/seo';
import { FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'الشروط والأحكام | تحضير رياضيات الصف الأول الابتدائي',
      description: 'شروط وأحكام استخدام موقع تحضير رياضيات الصف الأول الابتدائي والاستفادة من ملفات التحضير والمحتوى التعليمي.',
      canonical: '/terms',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb items={[{ label: 'الشروط والأحكام' }]} />

      <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>اتفاقية الاستخدام</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            الشروط والأحكام
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            تاريخ السريان: سبتمبر 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. قبول الشروط</h2>
          <p>
            بدخولك واستخدامك لموقع "تحضير رياضيات الصف الأول الابتدائي"، فإنك تقر وتوافق على الالتزام بكافة الشروط والأحكام المنصوص عليها هنا، بالإضافة إلى القوانين واللوائح المعمول بها.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. ترخيص الاستخدام التعليمي</h2>
          <p>
            يُمنح جميع المعلمين والمعلمات والطلاب وأولياء الأمور ترخيصاً مجانياً وغير حصري لاستعراض وطباعة واستخدام ملفات التحضير للأغراض التعليمية والشخصية والصفية فقط.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pr-2">
            <li>يُحظر بيع أو إعادة بيع ملفات التحضير أو استخدامها في باقات تجارية مدفوعة بدون تصريح خطي مسبق.</li>
            <li>يُحظر التعديل المخل على المحتوى بهدف إزالة الإشارات التربوية والنسب الأصلية للموقع.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. دقة المواد التعليمية</h2>
          <p>
            نبذل قصارى جهدنا لمراجعة الخطط وتوافقها مع توزيع المنهج الصادر عن وزارة التربية والتعليم المصرية. ومع ذلك، تظل مسؤولية الملاءمة الميدانية داخل الفصل خاضعة لتقدير المعلم وتوجيهات الإدارة التعليمية التابع لها.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. تعديل الشروط</h2>
          <p>
            نحتفظ بالحق في تحديث أو تعديل شروط الاستخدام في أي وقت دون إشعار مسبق، ويعتبر استمرارك في استخدام الموقع بمثابة موافقة على التحديثات المنشورة.
          </p>
        </section>
      </article>
    </div>
  );
};
