/// <reference path="../.astro/types.d.ts" />

import type { Lang } from './utils/i18n';
import type ja from './i18n/ja.json';

declare global {
  namespace App {
    interface Locals {
      lang: Lang;
      dict: typeof ja;
    }
  }
}
