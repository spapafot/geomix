export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export function loadGA() {
  if (!GA_ID || typeof document === 'undefined') return;
  if (document.getElementById('ga-script')) return;

  const s1 = document.createElement('script');
  s1.id = 'ga-script';
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s1);

  const s2 = document.createElement('script');
  s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
  document.head.appendChild(s2);
}
