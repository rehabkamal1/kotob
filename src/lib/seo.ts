export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  schema?: Record<string, unknown>;
}

export function updateSEO({
  title,
  description,
  canonical,
  ogType = 'website',
  publishedTime,
  schema,
}: SEOProps) {
  // Update Title
  const siteSuffix = ' | تحضير وكتب رياضيات الابتدائي والإعدادي';
  const fullTitle = title.includes(siteSuffix) ? title : `${title}${siteSuffix}`;
  document.title = fullTitle;

  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Update Canonical
  const origin = window.location.origin;
  const canonicalUrl = canonical ? `${origin}${canonical}` : window.location.href;
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);

  // Open Graph
  const setMeta = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('og:title', fullTitle);
  setMeta('og:description', description);
  setMeta('og:url', canonicalUrl);
  setMeta('og:type', ogType);

  if (publishedTime) {
    setMeta('article:published_time', publishedTime);
  }

  // Twitter Cards
  const setTwitterMeta = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setTwitterMeta('twitter:card', 'summary_large_image');
  setTwitterMeta('twitter:title', fullTitle);
  setTwitterMeta('twitter:description', description);

  // Structured Data (JSON-LD)
  const existingScript = document.getElementById('jsonld-structured-data');
  if (existingScript) {
    existingScript.remove();
  }

  if (schema) {
    const script = document.createElement('script');
    script.id = 'jsonld-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
