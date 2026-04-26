# BKC ゆめ — Website

上越・妙高のパフェ専門キッチンカー「BLACK KITCHEN CAR ゆめ」の公式サイト。

## Stack
- Astro 4 (SSG) · Tailwind · TypeScript strict
- i18n: `/ja/` `/en/` サブパス（`[lang]` 動的ルート）
- Host: Cloudflare Pages

## Dev
```bash
npm install
npm run dev      # → http://localhost:4321/ja/
npm run build
```

## Update content
- **次回出店**: `src/data/next-event.json`
  - 確定したら `status` を `"confirmed"` にして日付/会場/時間を埋める
  - 未確定の間は `status: "tbd"` のままで「調整中 / TBA」表示
- **メニュー**: `src/data/menu.json`
- **コピー**: `src/i18n/ja.json` / `en.json`
- **Instagram埋め込み（Schedule ページ）**: `src/data/featured-posts.json` の `urls` に投稿URLを足し引き
  - 形式は `https://www.instagram.com/p/<id>/` または `/<user>/p/<id>/` のどちらでもOK
  - 自動的に正規化されて公式 Instagram 埋め込みカードがレンダリングされる

## Deploy
GitHub `sho-cominc/bkc-yume-web` の main ブランチに push すれば Cloudflare Pages が自動ビルド/デプロイ。
- Framework preset: Astro
- Build command: `npm run build`
- Output: `dist`
- `NODE_VERSION` = `20`

本番: <https://bkc-yume.pages.dev/>
