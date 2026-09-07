# web-ops-portfolio

Webエンジニア／フロントエンド領域への応募に使うポートフォリオです。
HTML、CSS、JavaScript、PHPを中心とした約5年のWeb制作・開発経験と、現在のReact改修、API連携、本番運用の実績を掲載しています。

## 掲載内容

- 現在の実務とReactへの段階移行
- Chartbeat Realtime Ranking APIを使ったランキング機能の内製化
- 特設ページ、キャンペーンLP、Web運用改善のケーススタディ
- 実務、個人開発、継続学習を分けた技術経験
- React / TypeScriptで作った選考ステータス管理デモ

## 技術構成

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react

Next.js、TypeScriptはこのサイトと個人開発で使用しています。TypeScriptを実務経験としては掲載していません。
Reactは個人開発に加え、PHP / HTMLベースの既存ページを一部ずつコンポーネント化する実務でも使用しています。

## サイト構成

- トップページとケーススタディ詳細の静的生成
- `data/`配下の型付きデータから実績と技術経験を表示
- Client Componentは操作デモのみ
- キーボード操作、フォーカス表示、`prefers-reduced-motion`への対応
- 375px、768px、1440pxを基準としたレスポンシブ設計

## 起動と確認

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run lint
npm run build
```

## 公開範囲

個人名、連絡先、職務経歴書、社内システムの設定値は掲載していません。
非公開案件は、対外的に説明できる担当範囲と技術構成に限定しています。

## 公開制作実績

- [鉄平の「楽ゆる」トークイベント](https://kahoku.news/members/rakuyuru2026/)
- [宮城の高校入試 特設ページ](https://kahoku.news/exam/miyagi-hs/)
- [パンに、おやつに、寄りソイラテ](https://www.k-tounyu.jp/cp/soylatte/)
- [POLA 顔エステ アンケート風LP](https://www.pola.co.jp/esthe/special/questionnaire/)
