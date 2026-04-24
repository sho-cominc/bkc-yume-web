# BKC ゆめ — Website

上越・妙高のパフェ専門キッチンカー「BLACK KITCHEN CAR ゆめ」の公式サイト。

## Stack
- Astro 4 (SSG) · Tailwind · TypeScript strict
- i18n: `/ja/` `/en/` サブパス
- Host: Cloudflare Pages

## Dev
```bash
npm install
npm run dev      # → http://localhost:4321/ja/
npm run build
```

## Update content
- **次回出店**: `src/data/next-event.json`
- **メニュー**: `src/data/menu.json`
- **コピー**: `src/i18n/ja.json` / `en.json`
- **Behold.so接続後**: `<InstagramFeed beholdId="xxx" />` でSchedulePageを更新

## Deploy
Cloudflare Pages GitHub連携。`wrangler.toml`で自動認識。
- Framework preset: Astro
- Build command: `npm run build`
- Output: `dist`
- NODE_VERSION: 20
