declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export type AnalyticsEvent = 
  | { action: 'page_view'; page_path: string; page_title: string }
  | { action: 'search'; search_term: string; results_count: number }
  | { action: 'view_pdf'; lesson_id: number; lesson_title: string; term: string }
  | { action: 'download_pdf'; lesson_id: number; lesson_title: string; term: string };

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const { action, ...params } = event;
    window.gtag('event', action, params);
  }
  
  if (import.meta.env.DEV) {
    console.log('[Analytics Event]', event);
  }
}
