export const profile = {
  role: "Web Engineer Portfolio",
  headline: "既存Webを読み解き、改善し、運用までつなげる。",
  summary:
    "既存のWebサイトや処理を調べ、HTML / CSS / JavaScript / PHPによる改修から、Reactへの段階移行、API連携、本番反映後の確認まで担当してきました。現在はPHP脆弱性対応やAWS環境の移行作業にも参画しています。",
  currentPosition:
    "既存画面の構造を調べ、動作を保ったまま修正しやすい単位へ整える仕事が中心です。Reactのほか、Laravel、REST API、Dockerなども既存環境の中で扱い、PHP脆弱性への対応やEC2からECSへの移行作業にも取り組んでいます。",
  desiredWork:
    "Webエンジニアまたはフロントエンドエンジニアとして、既存Webの改修、Reactへの段階的な移行、API連携を含む開発に関わりたいと考えています。",
};

export const currentWork = [
  {
    title: "フロントエンド",
    description:
      "PHP / HTMLベースの既存ページを一部ずつReactコンポーネントへ切り出しています。既存画面の改修や構造整理も行い、修正範囲を追いやすくしています。",
    technologies: "HTML / CSS / Sass / JavaScript / jQuery / React / Tailwind CSS",
  },
  {
    title: "サーバー・データ連携",
    description:
      "PHPとWordPressの改修、MySQL / SQLを使ったデータ取得、REST APIのJSON加工を経験しました。Laravelは既存処理の調査と軽微な改修が中心です。",
    technologies: "PHP / WordPress / Laravel / MySQL / SQL / REST API / JSON",
  },
  {
    title: "セキュリティ・クラウド移行",
    description:
      "PHPの脆弱性情報を受けた影響確認・対応と、既存のEC2環境からECSへの移行作業に参画しています。いずれも進行中のため、公開可能な範囲で担当業務のみ記載しています。",
    technologies: "PHP / AWS / EC2 / ECS / Docker",
  },
  {
    title: "開発・運用環境",
    description:
      "GitHub / GitLabでのバージョン管理、既存Docker環境での開発と動作確認、CronやBashを使った定期処理を担当しました。AWSでは既存環境の確認に加え、現在はEC2からECSへの移行対応にも参画しています。",
    technologies: "Git / GitHub / GitLab / Docker / AWS / Bash / Cron / Cloudflare / .htaccess",
  },
];
