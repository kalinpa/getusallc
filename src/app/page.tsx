import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';

const bgCountries = ['BG'];

export default async function Root() {
  const h = await headers();
  const c = await cookies();

  let lang: 'bg' | 'en' = 'en';

  // 1. Запазен избор от преди
  const saved = c.get('lang')?.value;
  if (saved === 'bg' || saved === 'en') {
    lang = saved;
  } else {
    // 2. Държава от Vercel IP geolocation
    const country = h.get('x-vercel-ip-country') || '';
    if (bgCountries.includes(country)) {
      lang = 'bg';
    } else if (!country) {
      // 3. Fallback — Accept-Language (работи локално)
      const accept = h.get('accept-language') || '';
      if (accept.toLowerCase().startsWith('bg')) lang = 'bg';
    }
    // Всичко друго → en (Германия, Франция, САЩ и т.н.)
  }

  redirect(`/${lang}`);
}