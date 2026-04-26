import { defineMiddleware } from 'astro:middleware';
import { getDict, type Lang } from './utils/i18n';

/**
 * Derives the active locale from the URL pathname (`/ja/...` or `/en/...`)
 * and stashes it on `Astro.locals` along with the matching dictionary.
 * Components can then read `Astro.locals.lang` / `Astro.locals.dict`
 * instead of receiving `lang` through props.
 */
export const onRequest = defineMiddleware((context, next) => {
  const path = context.url.pathname;
  const lang: Lang = path.startsWith('/en') ? 'en' : 'ja';
  context.locals.lang = lang;
  context.locals.dict = getDict(lang);
  return next();
});
