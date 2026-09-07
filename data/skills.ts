export type SkillItem = {
  name: string;
  note?: string;
};

export type SkillGroup = {
  label: string;
  description: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "フロントエンド実務",
    description: "既存サイトの制作・改修とReactへの段階移行",
    items: [
      { name: "HTML" },
      { name: "CSS / Sass" },
      { name: "JavaScript" },
      { name: "jQuery" },
      { name: "React", note: "既存ページの一部React化、画面・コンポーネント改修、構造整理" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    label: "サーバー・データ実務",
    description: "既存処理の調査、改修、データ連携",
    items: [
      { name: "PHP" },
      { name: "WordPress" },
      { name: "Laravel", note: "既存処理の調査と軽微な改修" },
      { name: "MySQL / SQL", note: "既存データの取得とページ連携" },
      { name: "REST API / JSON", note: "API仕様の確認、取得、加工、画面表示" },
    ],
  },
  {
    label: "開発・運用実務",
    description: "既存環境での開発、定期処理、公開後の確認",
    items: [
      { name: "Git / GitHub / GitLab" },
      { name: "Docker", note: "既存Docker環境での開発と動作確認" },
      { name: "AWS", note: "管理画面での軽微な設定と状態確認" },
      { name: "Bash / Cron", note: "定期取得、ログ保存、ログの定期削除" },
      { name: "Cloudflare / .htaccess", note: "キャッシュ原因の切り分けとCache-Control調整" },
    ],
  },
  {
    label: "個人開発・継続学習",
    description: "実務経験と誤認されないよう分けて記載",
    items: [
      { name: "TypeScript", note: "このポートフォリオと個人開発で使用" },
      { name: "Next.js", note: "このポートフォリオで使用" },
      { name: "コンポーネント設計" },
      { name: "アクセシビリティ" },
    ],
  },
  {
    label: "業務改善で使用",
    description: "定型作業の整理と小規模な自動化",
    items: [{ name: "Excel VBA" }, { name: "Power Automate" }, { name: "業務フロー整理" }],
  },
];
