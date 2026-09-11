export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  period: string;
  type: string;
  summary: string;
  sourceUrl?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  confidentiality: string;
  problem: string;
  responsibilities: string[];
  role: string;
  team: string;
  constraints: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  approach: string;
  result: string;
  outcomes: string[];
  technologies: string[];
  learned: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chartbeat-ranking",
    title: "Chartbeat APIを使った記事ランキング機能の内製化",
    label: "主要ケーススタディ",
    period: "現在の実務",
    type: "API連携 / 定期取得 / 運用設計",
    summary:
      "不安定になった外部ランキングサービスの代替として、Chartbeat Realtime Ranking APIを使った記事ランキングを内製しました。",
    confidentiality:
      "社内案件のため、公開できる担当範囲と技術構成のみ掲載しています。APIキーや取得データは掲載していません。",
    problem:
      "利用していた外部ランキングサービスが不安定になり、表示を継続できる代替機能が必要でした。",
    responsibilities: ["API仕様調査", "要件整理", "取得・加工・表示実装", "Cron設定", "原因切り分け", "本番反映"],
    role:
      "既存サービスの問題確認から代替手段の調査、実装、本番反映、公開後の動作確認まで担当しました。",
    team:
      "社内担当者と要件や表示を確認しながら、技術調査と実装を進めました。",
    constraints: [
      "APIの取得制限を超えない更新方法にする",
      "APIが失敗してもランキング表示を止めない",
      "公開環境のCloudflareキャッシュを考慮する",
    ],
    process: [
      {
        title: "問題確認",
        description: "既存の外部サービスで起きていた不安定な動作を確認し、代替機能に必要な表示と更新条件を整理しました。",
      },
      {
        title: "実現可否の調査",
        description: "Chartbeat Realtime Ranking APIの仕様と取得データを調べ、既存ページで代替できるかを確認しました。",
      },
      {
        title: "取得方法の設計",
        description: "API制限を考慮し、ページ表示ごとに通信せず、Cronで10分ごとにデータを取得する方法にしました。",
      },
      {
        title: "取得・加工・表示",
        description: "APIキーを管理し、PHPからREST APIへリクエストしてJSONを取得。必要な形に加工し、JavaScriptとHTMLでランキングを表示しました。",
      },
      {
        title: "失敗時の継続表示",
        description: "API取得が失敗した場合は、前回取得したデータを表示する構成にしました。Cronログを保存し、古いログは定期的に削除します。",
      },
      {
        title: "更新停止の原因切り分け",
        description: "本番環境でランキングが更新されない問題が起き、Cron、取得データ、画面表示を順に確認しました。Cloudflareキャッシュが古い表示を返していると分かりました。",
      },
      {
        title: "キャッシュ調整と運用",
        description: ".htaccessとCache-Controlを調整し、ランキングが更新される状態にしました。本番反映後も取得、表示、ログを確認しています。",
      },
    ],
    approach:
      "画面アクセスのたびにAPIを呼ばず、10分ごとの定期取得と前回データの保持を組み合わせました。通信障害時も記事一覧が空にならないことを優先しています。",
    result:
      "外部ランキングサービスの代替機能を社内で運用できる形にしました。",
    outcomes: [
      "API取得失敗時も前回データで表示を継続",
      "Cloudflareキャッシュによる更新停止を解消",
      "Cronログの保存と定期削除を含めて運用",
      "表示速度について社内担当者から好評",
    ],
    technologies: ["PHP", "JavaScript", "HTML", "Chartbeat API", "REST API", "JSON", "Cron", "Bash", "Cloudflare", ".htaccess"],
    learned:
      "APIからデータを取る処理に加え、取得失敗時の表示、ログ、CDNキャッシュまで含めて確認する必要がありました。",
  },
  {
    slug: "rakuyuru-2026",
    title: "鉄平の「楽ゆる」トークイベントLP",
    label: "公開案件",
    period: "2026",
    type: "会員向けイベントLP / 特設ページ",
    sourceUrl: "https://kahoku.news/members/rakuyuru2026/",
    thumbnail: "/images/rakuyuru-2026.png",
    thumbnailAlt: "鉄平の「楽ゆる」トークイベントLPの画面",
    summary: "担当者へのヒアリングからデザイン方向性、ページ構成、技術選定、本番公開まで一気通貫で対応したイベントLPです。",
    confidentiality: "公開ページで確認できる情報と担当範囲のみ掲載。社内の制作フロー、数値、未公開情報は掲載していません。",
    problem: "会員向けトークイベントの魅力、応募方法、有料プランとの関係を、短期間で分かりやすく伝える必要がありました。",
    responsibilities: ["ヒアリング", "構成設計", "デザイン方向性整理", "技術選定", "実装", "本番公開"],
    role: "担当者の要望を整理し、ページ内容・見せ方・実装方法を決めながら公開まで対応。",
    team: "担当者と確認を重ねながら進行。実装・公開作業は主担当として対応。",
    constraints: [
      "既存サイトの会員導線やブランドトーンと矛盾しないこと",
      "イベント内容、応募方法、プラン案内を1ページ内で迷わず読めること",
      "公開後の修正や差し替えに対応しやすい構成にすること",
    ],
    process: [
      { title: "要件整理", description: "誰に何を伝えたいページか、応募までに必要な情報は何かを担当者に確認しました。" },
      { title: "構成と見せ方の設計", description: "イベント概要、登壇者、抽選会、応募方法、有料プランの情報が自然に読める順番を整理しました。" },
      { title: "実装と公開", description: "既存サイト上で公開できる形に落とし込み、表示確認と修正を経て本番公開しました。" },
    ],
    approach: "読み手が「何のイベントか」「誰が出るか」「どう応募するか」を順に追える構成にしました。",
    result: "イベント内容、登壇者、抽選会、応募方法、有料プランへの導線を1ページに整理して公開しました。",
    outcomes: ["ヒアリングから公開まで一人称で進行", "担当者の意図をページ構成と実装に落とし込み", "公開後の案内・修正に対応しやすいページ構造を作成"],
    technologies: ["HTML", "CSS", "JavaScript", "既存CMS / 公開環境", "レスポンシブ対応"],
    learned: "担当者から受け取った情報を、読者が応募を判断する順番に並べ替えました。装飾よりも、応募まで迷わず読めることを優先しています。",
  },
  {
    slug: "miyagi-high-school-exam",
    title: "宮城の高校入試 特設ページ",
    label: "公開案件",
    period: "2026",
    type: "受験情報ページ / ニュース連携",
    sourceUrl: "https://kahoku.news/exam/miyagi-hs/",
    thumbnail: "/images/miyagi-high-school-exam.png",
    thumbnailAlt: "宮城の高校入試 特設ページの画面",
    summary: "ページ要望をもとにデザインし、最新ニュースをMySQLデータベースと連携して表示する受験情報ページです。",
    confidentiality: "公開ページで確認できる情報と担当範囲のみ掲載。DB構造の詳細、管理画面、社内運用情報は掲載していません。",
    problem: "高校入試に関するニュース、倍率、問題と解説、関連リンクを、受験生や保護者が探しやすい形でまとめる必要がありました。",
    responsibilities: ["要望整理", "デザイン", "ページ実装", "MySQL連携", "ニュース表示", "本番公開"],
    role: "ページ要望をもとに情報設計とデザインを行い、最新ニュース部分のDB連携を含めて実装。",
    team: "要望元と確認しながら進行。デザイン・実装・ニュース連携は主担当として対応。",
    constraints: [
      "受験関連情報を迷わず探せる構成にすること",
      "最新ニュースを手動更新だけに依存しないこと",
      "既存記事データやサイト設計と連携できる実装にすること",
    ],
    process: [
      { title: "情報カテゴリの整理", description: "最新ニュース、出願倍率、問題と解説、おすすめ記事、関連リンクを探しやすい単位に分けました。" },
      { title: "デザインと導線設計", description: "受験生・保護者が必要な情報にすぐ到達できるよう、見出しとセクションの優先度を整理しました。" },
      { title: "ニュース連携の実装", description: "最新ニュースをMySQLのDBと連携し、関連ニュースをページ上に表示できる構成にしました。" },
    ],
    approach: "受験情報は更新性と探しやすさが重要なため、固定情報とニュース情報を分け、DB連携で新しい記事が反映される導線を重視しました。",
    result: "宮城県の高校入試に関するニュース、倍率、問題と解説、関連リンクをまとめた特設ページとして公開しました。",
    outcomes: ["ページ要望を情報設計とデザインに変換", "MySQL連携により最新ニュース枠を実装", "受験情報をカテゴリごとに探せる構成を作成"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "既存CMS / 公開環境"],
    learned: "情報ページでは、見た目だけでなく更新の仕組みが価値になります。固定ページの中にDB連携を入れることで、運用負荷を下げながら鮮度を保てる構成にできました。",
  },
  {
    slug: "website-operations-improvement",
    title: "自社Webサイト運用改善",
    label: "運用改善",
    period: "過去実務",
    type: "Webサイト運用 / 改善",
    summary: "更新依頼、確認観点、修正作業を整理し、日々のWeb運用で手戻りが起きにくい状態を作った事例です。",
    confidentiality: "守秘義務に配慮し、社名・数値・個別案件名は抽象化しています。",
    problem: "更新依頼の背景や確認観点が散らばり、修正後の確認や再依頼に時間がかかりやすい状態でした。",
    responsibilities: ["更新内容の整理", "既存ページの修正", "確認手順の見直し"],
    role: "既存ページの構造把握、修正対応、確認観点の整理を担当。",
    team: "社内担当者からの依頼を受け、必要に応じて確認しながら進行。",
    constraints: ["既存ページの構造を壊さないこと", "公開中ページのため修正影響を抑えること", "担当者が確認しやすい粒度にすること"],
    process: [
      { title: "依頼内容の分解", description: "目的、変更箇所、確認観点に分け、作業前に認識を揃えました。" },
      { title: "既存構造を踏まえた修正", description: "既存HTML / CSS / CMS構造を確認し、影響範囲を抑えて修正しました。" },
      { title: "確認観点の整理", description: "表示確認、リンク確認、差し替え漏れなどをチェックしやすい形にしました。" },
    ],
    approach: "依頼内容を目的・変更箇所・確認観点に分け、作業前後で見落としやすい項目をチェックしやすい形にしました。",
    result: "担当者間で作業内容を共有しやすくなり、更新時の確認漏れや手戻りを減らす運用に近づけました。",
    outcomes: ["更新依頼の整理", "確認漏れ防止", "運用しやすい修正単位の維持"],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
    learned: "Web運用では、実装スピードだけでなく確認観点の共有が品質に直結します。作業を小さく整理することが、結果的に手戻り削減につながりました。",
  },
  {
    slug: "soylatte-campaign-lp",
    title: "豆乳キャンペーン特設サイト",
    label: "公開制作実績",
    period: "過去実務",
    type: "ブランドサイト内キャンペーンLP",
    sourceUrl: "https://www.k-tounyu.jp/cp/soylatte/",
    summary: "ブランドサイト内のキャンペーン特設ページとして、コーディングと演出実装を担当したLPです。",
    confidentiality: "公開ページで確認できる情報と担当範囲のみ掲載しています。",
    problem: "キャンペーンの世界観を保ちながら、レシピや商品訴求をスマートフォンでも見やすく伝える必要がありました。",
    responsibilities: ["LPコーディング", "レスポンシブ調整", "演出実装", "表示確認"],
    role: "デザイン意図を崩さず、ブランドサイト内で公開できるLPとして実装を担当。",
    team: "制作チーム内で担当範囲を分担し、コーディング領域を担当。",
    constraints: [
      "既存ブランドサイトのトーンと矛盾しないこと",
      "PC / スマートフォンで訴求内容が読みやすいこと",
      "演出を入れつつ、ページ内容の理解を邪魔しないこと",
    ],
    process: [
      { title: "デザイン意図の確認", description: "訴求内容、見せたい順番、動きを入れる箇所を確認しました。" },
      { title: "レスポンシブ実装", description: "画像・テキスト・導線が画面幅に応じて崩れないよう調整しました。" },
      { title: "演出と表示確認", description: "GSAPによる動きを加え、主要ブラウザとスマートフォン幅で表示を確認しました。" },
    ],
    approach: "ページの明るい雰囲気を保ちつつ、読み進める邪魔にならない範囲に演出を抑えました。",
    result: "キャンペーンの雰囲気を保ちながら、レシピや商品訴求を1ページで確認できる特設LPとして公開されました。",
    outcomes: ["ブランドサイト内LPの実装", "GSAPを使った演出実装", "スマートフォン幅を含むレスポンシブ対応"],
    technologies: ["HTML", "CSS", "JavaScript", "Webpack", "GSAP", "レスポンシブ対応"],
    learned: "動きを入れる場所を絞り、レシピや商品情報を読む流れを妨げないよう調整しました。",
  },
  {
    slug: "pola-questionnaire-lp",
    title: "POLA 顔エステ アンケート風LP",
    label: "公開制作実績",
    period: "過去実務",
    type: "アンケート風LP / インタラクション実装",
    sourceUrl: "https://www.pola.co.jp/esthe/special/questionnaire/",
    summary: "3問アンケートの表示切り替えや診断導線を含む、化粧品メーカーのLP実装を担当した事例です。",
    confidentiality: "公開ページで確認できる情報と担当範囲のみ掲載しています。",
    problem: "肌悩みに合わせたケアへ誘導するため、質問に答えながら自然に読み進められるLPにする必要がありました。",
    responsibilities: ["LPコーディング", "jQueryによる表示切り替え", "レスポンシブ調整", "表示確認"],
    role: "デザインをもとに、アンケート形式の操作部分を含めてページ実装を担当。",
    team: "制作チーム内で担当範囲を分担し、コーディングとインタラクション実装を担当。",
    constraints: [
      "質問の進行が分かりやすいこと",
      "スマートフォンでも選択肢を押しやすいこと",
      "短期間でも表示崩れや状態管理の漏れを出さないこと",
    ],
    process: [
      { title: "画面遷移の整理", description: "質問、選択肢、結果表示の流れを確認し、実装上の状態を整理しました。" },
      { title: "表示切り替えの実装", description: "jQueryで質問ごとの表示・非表示を制御し、ユーザーが迷わず進めるよう調整しました。" },
      { title: "レスポンシブ確認", description: "スマートフォン幅でも選択肢、文章、CTAが読みやすく押しやすいか確認しました。" },
    ],
    approach: "アンケート風LPは操作の迷いが離脱につながるため、表示中の質問と次の行動が分かりやすいことを優先しました。",
    result: "肌悩みからケア提案へ進めるアンケート型LPとして公開されました。",
    outcomes: ["アンケート形式の表示切り替え実装", "jQueryを使ったインタラクション実装", "短納期でのレスポンシブ対応"],
    technologies: ["HTML", "CSS", "Sass", "JavaScript", "jQuery", "レスポンシブ対応"],
    learned: "表示中の質問、選択状態、結果表示を分けて考えることで、短納期でも動作確認の範囲を明確にできました。",
  },
  {
    slug: "business-automation",
    title: "VBA / Power Automateによる業務改善",
    label: "業務自動化",
    period: "過去実務",
    type: "業務改善 / 自動化",
    summary: "定型的な転記・通知・確認作業を整理し、Excel VBAやPower Automateで小さく自動化した事例です。",
    confidentiality: "社内業務に関わるため、具体的な業務名・データ内容・数値は抽象化しています。",
    problem: "定型的な転記・通知・確認作業が多く、作業者ごとの手順差や時間負担が発生していました。",
    responsibilities: ["業務フローの整理", "自動化対象の切り分け", "簡易ツールの作成"],
    role: "現場作業の流れを確認し、自動化しやすい部分を切り出して実装。",
    team: "利用者に手順や困りごとを確認しながら、実際に使える形へ調整。",
    constraints: ["利用者が普段使うツール内で完結すること", "大きなシステム変更をせず、小さく改善すること", "例外時に手作業へ戻せること"],
    process: [
      { title: "業務フロー確認", description: "どこで時間がかかり、どこでミスが起きやすいかを確認しました。" },
      { title: "自動化範囲の切り分け", description: "すべてを自動化せず、繰り返し頻度が高い処理を優先しました。" },
      { title: "小さく実装して調整", description: "Excel VBAやPower Automateで試し、利用者の動きに合わせて調整しました。" },
    ],
    approach: "作業頻度と間違いの起こりやすさを確認し、繰り返しの多い処理から小さく自動化しました。",
    result: "日々の繰り返し作業を減らし、担当者が確認や判断に時間を使いやすい状態に改善しました。",
    outcomes: ["定型作業の削減", "手順差の抑制", "確認作業への時間配分改善"],
    technologies: ["Excel VBA", "Power Automate", "Excel", "業務フロー整理"],
    learned: "利用者が普段使っているExcelとPower Automateの中で完結させ、例外時は手作業へ戻れる状態を残しました。",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
