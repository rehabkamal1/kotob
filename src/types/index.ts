export type TermType = 'الترم الأول' | 'الترم الثاني';

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  description: string;
  grade: string;
  subject: string;
  term: TermType;
  termSlug: 'term-1' | 'term-2';
  unit: string;
  lesson: string;
  pages: number;
  fileSize: string;
  cover: string;
  pdfUrl: string;
  downloadUrl?: string;
  publishedAt: string;
  objectives?: string[];
  keyConcepts?: string[];
  suggestedActivities?: string[];
}

export interface SearchFilters {
  query?: string;
  term?: string;
  unit?: string;
}
