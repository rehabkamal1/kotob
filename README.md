# تحضير رياضيات الصف الأول الابتدائي (المنهج المصري) 📐

موقع تعليمي سريع وعصري مبني بأحدث تقنيات الويب، مخصص لتنظيم وعرض ملفات تحضير مادة الرياضيات للصف الأول الابتدائي (الترم الأول والترم الثاني) بصيغة PDF قابلة للمشاهدة والتحميل المباشر عبر Google Drive، ومجهز بالكامل لمحركات البحث (SEO) وبرنامج Google AdSense.

---

## 🚀 التقنيات المستخدمة (Tech Stack)

- **React 18** مع **Vite 5**
- **TypeScript** لضمان كود برمجي خالي من الأخطاء النوعية
- **Tailwind CSS** للتصميم المتجاوب (Mobile First) والهوية البصرية الهادئة
- **React Router 6** للتنقل والتوجيه المتوافق مع الـ SEO
- **Lucide React** للأيقونات العصرية
- **قاعدة بيانات محلية عبر JSON** (`src/data/lessons.json`)
- استضافة ملفات الـ PDF عبر **Google Drive**
- مهيأ للنشر الفوري على **Vercel**

---

## 📁 بنية المشروع (Project Structure)

```text
kotob/
├── public/
│   ├── favicon.svg          # أيقونة الموقع
│   ├── robots.txt           # ملف توجيه عناكب محركات البحث
│   └── sitemap.xml          # خريطة الموقع الكاملة لكافة الدروس والصفحات
├── src/
│   ├── assets/              # الصور والملفات الثابتة
│   ├── components/
│   │   ├── ads/             # مكونات Google AdSense المتوافقة
│   │   │   ├── AdPlaceholder.tsx
│   │   │   ├── TopAd.tsx
│   │   │   ├── ContentAd.tsx
│   │   │   └── BottomAd.tsx
│   │   ├── cards/
│   │   │   └── LessonCard.tsx       # بطاقة عرض ملف التحضير
│   │   ├── common/
│   │   │   ├── Breadcrumb.tsx       # مسار التصفح الهرمي
│   │   │   ├── EmptyState.tsx       # حالة عدم وجود نتائج
│   │   │   └── SearchBar.tsx        # شريط البحث المتطور
│   │   └── layout/
│   │       ├── Header.tsx           # رأس الموقع مع القائمة
│   │       ├── Footer.tsx           # التذييل والروابط القانونية
│   │       └── MobileMenu.tsx       # قائمة الموبايل التفاعلية
│   ├── data/
│   │   └── lessons.json     # قاعدة بيانات الدروس والتحضيرات
│   ├── hooks/
│   │   └── useSearch.ts     # هوك البحث والتصفية المباشرة
│   ├── lib/
│   │   ├── analytics.ts     # تتبع أحداث Google Analytics
│   │   ├── seo.ts           # ضبط الـ Meta Tags والـ Schema
│   │   └── utils.ts         # أدوات التنسيق والتواريخ العربية
│   ├── pages/
│   │   ├── About.tsx        # صفحة من نحن
│   │   ├── Contact.tsx      # صفحة اتصل بنا
│   │   ├── Disclaimer.tsx   # إخلاء المسؤولية وحقوق الملكية
│   │   ├── Home.tsx         # الصفحة الرئيسية
│   │   ├── LessonDetails.tsx# صفحة عرض وتنزيل ملف التحضير
│   │   ├── NotFound.tsx     # صفحة الخطأ 404
│   │   ├── Preparation.tsx  # فهرس كافة التحضيرات
│   │   ├── PrivacyPolicy.tsx# سياسة الخصوصية والكوكيز
│   │   ├── Search.tsx       # صفحة البحث المخصصة
│   │   ├── TermPage.tsx     # صفحة الترم (الأول / الثاني)
│   │   └── Terms.tsx        # الشروط والأحكام
│   ├── types/
│   │   └── index.ts         # الواجهات البرمجية لأنواع البيانات
│   ├── App.tsx              # موجه الصفحات الرئيسي
│   ├── index.css            # أنماط Tailwind والخطوط العربية
│   └── main.tsx             # نقطة الدخول
├── index.html               # وثيقة HTML الرئيسية مع خط Cairo
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json              # إعدادات إعادة التوجيه لـ Vercel SPA
└── vite.config.ts
```

---

## ➕ كيفية إضافة درس أو تحضير جديد

لن تحتاج إلى لمس أي كود برمجي داخل الـ Components؛ كل ما عليك:

1. **ارفع ملف الـ PDF** إلى مجلدك على Google Drive واجعل إذن المشاركة: *Anyone with the link (Viewer)*.
2. انسخ رابط العرض ورابط التحميل.
3. افتح ملف `src/data/lessons.json` وأضف عنصراً جديداً في القائمة:

```json
{
  "id": 12,
  "slug": "numbers-up-to-100",
  "title": "تحضير درس الأعداد حتى 100",
  "description": "خطة تدريس شاملة لشرح الأعداد المكونة من رقمين والقيمة المكانية...",
  "grade": "الصف الأول الابتدائي",
  "subject": "الرياضيات",
  "term": "الترم الثاني",
  "termSlug": "term-2",
  "unit": "الوحدة الخامسة: الأعداد حتى 100",
  "lesson": "الأعداد حتى 100",
  "pages": 16,
  "fileSize": "4.5 MB",
  "cover": "/covers/lesson-100.webp",
  "pdfUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  "downloadUrl": "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
  "publishedAt": "2026-09-28",
  "objectives": [
    "أن يقرأ التلميذ الأعداد حتى 100 بالرموز والكلمات.",
    "أن يحدد قيمة العشرات والآحاد."
  ],
  "keyConcepts": ["العشرات الكاملة", "الآحاد والعشرات"],
  "suggestedActivities": ["نشاط حزم الأعواد الخشبية ومكعبات دينز."]
}
```

4. بمجرد الحفظ، سيظهر الدرس تلقائياً في:
   - الصفحة الرئيسية (ضمن أحدث الملفات)
   - صفحة الترم المناسب
   - نتائج البحث والتصفية
   - صفحة مستقلة ذات عنوان URL صديق للـ SEO: `/preparation/term-2/numbers-up-to-100`

---

## 📈 استراتيجية Google AdSense والتوافق مع السياسات

تم بناء الموقع بما يضمن الامتثال الكامل لسياسات Google AdSense:
- **محتوى أصلي غني**: كل صفحة تحتوي على نبذة تعليمية، نواتج تعلم، مفاهيم أساسية، وإرشادات استخدام وليس مجرد زر تحميل.
- **مواضع إعلانات آمنة**: مكونات الإعلانات (`TopAd`, `ContentAd`, `BottomAd`) مفصولة بشكل تام وواضح عن أزرار المعاينة والتحميل لمنع النقرات غير المقصودة (Accidental Clicks).
- **الصفحات القانونية مكتملة**: صفحات *من نحن، اتصل بنا، سياسة الخصوصية، الشروط والأحكام، وإخلاء المسؤولية* مجهزة بالكامل.

---

## 🚢 التشغيل والنشر (Deployment)

### التشغيل المحلي:
```bash
npm install
npm run dev
```

### فحص البناء النهائي:
```bash
npm run build
```

### النشر على Vercel:
1. اربط المستودع على [Vercel](https://vercel.com).
2. سيقوم Vercel تلقائياً باكتشاف مشروع Vite ونشره مع دعم التوجيه الكامل بفضل ملف `vercel.json`.
# kotob
