import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const languages = ['bg', 'en'];
const defaultLang = 'bg';

// Countries where Bulgarian is primary
const bgCountries = ['BG'];

function getPreferredLang(request: NextRequest): string {
  // 1. Cookie (user already chose)
  const cookie = request.cookies.get('lang')?.value;
  if (cookie && languages.includes(cookie)) return cookie;

  // 2. Vercel geo header (IP-based country)
  const country = request.headers.get('x-vercel-ip-country') || '';
  if (bgCountries.includes(country)) return 'bg';
  if (country && !bgCountries.includes(country)) return 'en';

  // 3. Accept-Language header (browser setting)
  const accept = request.headers.get('Accept-Language') || '';
  const preferred = accept
    .split(',')
    .map(part => {
      const [locale, q] = part.trim().split(';q=');
      return { lang: locale.split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const p of preferred) {
    if (languages.includes(p.lang)) return p.lang;
  }

  return defaultLang;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.match(/\.(ico|svg|webp|png|jpg|css|js|txt|xml)$/)) {
    return NextResponse.next();
  }

  const hasLang = languages.some(l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);

  if (!hasLang) {
    const lang = getPreferredLang(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${lang}${pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set('lang', lang, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return response;
  }

  // Remember manual language choice
  const currentLang = pathname.split('/')[1];
  if (languages.includes(currentLang)) {
    const response = NextResponse.next();
    response.cookies.set('lang', currentLang, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return response;
  }
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
};
