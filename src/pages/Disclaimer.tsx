import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { updateSEO } from '../lib/seo';
import { AlertCircle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'إخلاء المسؤولية وحقوق الملكية | تحضير رياضيات الصف الأول الابتدائي',
      description: 'بيان إخلاء المسؤولية وحقوق الملكية الفكرية والتأليف لملفات تحضير مادة الرياضيات للصف الأول الابتدائي.',
      canonical: '/disclaimer',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb items={[{ label: 'إخلاء المسؤولية' }]} />

      <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>بيان حقوق الملكية والمسؤولية التربوية</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            إخلاء المسؤولية وحقوق الملكية الفكرية
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            تاريخ السريان: سبتمبر 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. الغرض التعليمي الإرشادي</h2>
          <p>
            المحتوى المقدم على موقع "تحضير رياضيات الصف الأول الابتدائي" هو محتوى إرشادي وتثقيفي مخصص لمساعدة المعلمين والمعلمات وأولياء الأمور على تحضير الدروس وتنظيم الأنشطة المنهجية. الموقع لا يتبع بصورة رسمية وزارة التربية والتعليم المصرية، ولا يمثل جهة حكومية، وإنما هو جهد تطوعي أكاديمي مستقل.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. حقوق الملكية الفكرية للمواد والمصنفات</h2>
          <p>
            نحرص كل الحرص على احترام حقوق الملكية الفكرية للغير وسياسات النشر الأصلية لشركة Google. الشروحات النصية، هيكلة نواتج التعلم، والأنشطة المقترحة المنشورة على هذا الموقع هي من إعدادنا وكتابتنا الأصيلة.
          </p>
          <p>
            ملفات الـPDF المرفقة مستضافة على Google Drive كأدوات مساعدة، وتعود حقوق أي علامات أو أسماء مناهج لوزارة التربية والتعليم المصرية ومؤلفيها الأصليين وفق مبادئ الاستخدام العادل للأغراض التربوية غير الربحية.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. إشعار إزالة المحتوى (DMCA / Copyright Notice)</h2>
          <p>
            إذا كنت مالكًا لحقوق أي محتوى ترى أنه نُشر أو أُشير إليه دون إذن مسبق، يرجى التواصل الفوري معنا عبر صفحة <a href="/contact" className="text-indigo-600 underline font-semibold">اتصل بنا</a> موضحًا تفاصيل المادة، وسنقوم بمراجعة الطلب وحذف أو تعديل المادة خلال مهلة لا تتجاوز 48 ساعة.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. حدود المسؤولية</h2>
          <p>
            لا يتحمل الموقع أو القائمون عليه أي مسؤولية عن أي أخطاء مطبعية غير مقصودة، أو أي أضرار مباشرة أو غير مباشرة قد تنشأ عن استخدام المواد المتاحة أو الاعتماد عليها كبديل عن التوجيه الفني المدرسي المعتمد.
          </p>
        </section>
      </article>
    </div>
  );
};
