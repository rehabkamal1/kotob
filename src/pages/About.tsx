import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { updateSEO } from '../lib/seo';
import { BookOpen, Target, Sparkles, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'من نحن | تحضير رياضيات الصف الأول الابتدائي',
      description: 'تعرف على رسالتنا وأهدافنا في تقديم خطط ونماذج تحضير مادة الرياضيات للصف الأول الابتدائي بالمنهج المصري.',
      canonical: '/about',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb items={[{ label: 'من نحن' }]} />

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            عن المنصة
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            رسالتنا في تطوير تحضير الرياضيات
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            موقع "تحضير رياضيات الصف الأول الابتدائي" منصة تعليمية غير ربحية موجهة لمعلمي ومعلمات مادة الرياضيات وأولياء الأمور في جمهورية مصر العربية، بهدف توفير خطط ونماذج تدريس نموذجية تواكب منظومة التعليم المصرية المطورة (التعليم 2.0).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">رؤيتنا وأهدافنا</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              تيسير العمل اليومي للمعلم وتمكينه من استراتيجيات التدريس النشط، وتوفير أوراق عمل ونماذج تحضير مدروسة تعتمد على التجريب الحسي وتطوير التفكير المنطقي للطفل الصغير.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-violet-50/50 border border-violet-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">معايير المحتوى الأصلي</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              نلتزم بتقديم محتوى ذي قيمة تربوية مضافة؛ حيث نضع لكل درس ملخصاً تعليمياً مفصلاً، نواتج تعلم محددة، وأنشطة مقترحة مع روابط مباشرة لملفات التحضير بصيغة PDF.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-slate-800 text-base">لماذا الصف الأول الابتدائي تحديداً؟</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            تعتبر مرحلة الصف الأول الابتدائي اللبنة الأساسية لبناء العلاقة الإيجابية بين الطفل والمفاهيم الرياضية. الانتقال من الحساب التلقيني إلى الحساب الذهني والتجريب العملي هو جوهر المنهج الحديث، لذلك صممت خططنا لتلبي هذا الاحتياج بدقة وإتقان.
          </p>
        </div>
      </div>
    </div>
  );
};
