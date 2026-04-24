import ja from '../i18n/ja.json';
import en from '../i18n/en.json';

export type Lang = 'ja' | 'en';
export const LANGS: Lang[] = ['ja', 'en'];

const dicts = { ja, en } as const;

export function getDict(lang: Lang) {
  return dicts[lang];
}

export function localeStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export function basePath(lang: Lang, path = '') {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export type PageKey = 'top' | 'menu' | 'schedule' | 'about' | 'contact';

export const PAGE_PATH: Record<PageKey, string> = {
  top: '',
  menu: 'menu',
  schedule: 'schedule',
  about: 'about',
  contact: 'contact'
};

export function pick<T>(obj: { ja: T; en: T }, lang: Lang): T {
  return obj[lang];
}

export const SOCIAL = {
  instagram: 'https://instagram.com/bkc_yu____me',
  instagramDM: 'https://ig.me/m/bkc_yu____me',
  threads: 'https://www.threads.net/@bkc_yu____me',
  // TODO: replace with real inbox before launch (placeholder kept to avoid build-time failure)
  email: 'mailto:hello@bkc-yume.example'
};

export function formatDate(isoDate: string, lang: Lang, weekday: string) {
  const [y, m, d] = isoDate.split('-');
  if (lang === 'ja') return `${Number(m)}月${Number(d)}日(${weekday})`;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[Number(m)-1]} ${Number(d)} (${weekday})`;
}
