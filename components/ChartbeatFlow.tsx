export function ChartbeatFlow() {
  return (
    <figure
      aria-labelledby="chartbeat-flow-title"
      className="bg-teal-950 p-5 text-white sm:p-7"
    >
      <figcaption id="chartbeat-flow-title" className="text-sm font-bold text-teal-100">
        10分ごとの取得と、失敗時の表示継続
      </figcaption>
      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        <FlowStep label="取得" title="Chartbeat API" detail="APIキーを管理し、REST APIからJSONを取得" />
        <FlowArrow />
        <FlowStep label="保存" title="Cron / 10分間隔" detail="取得データと実行ログを保存" />
        <FlowArrow />
        <FlowStep label="表示" title="PHP / JavaScript" detail="JSONを加工し、記事ランキングを表示" />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <p className="bg-amber-300 p-4 text-sm leading-6 text-amber-950">
          <span className="block font-bold">API取得失敗時</span>
          前回の取得データを使い、ランキング表示を継続します。
        </p>
        <p className="bg-white/10 p-4 text-sm leading-6 text-teal-50">
          <span className="block font-bold text-white">Cloudflareキャッシュ</span>
          .htaccessとCache-Controlを調整し、古い表示が残る問題を解消しました。
        </p>
      </div>
    </figure>
  );
}

function FlowStep({ label, title, detail }: { label: string; title: string; detail: string }) {
  return (
    <div className="border border-white/25 bg-white/5 p-4">
      <p className="text-xs font-bold text-amber-300">{label}</p>
      <p className="mt-2 text-base font-bold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-teal-50">{detail}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="hidden items-center text-xl text-amber-300 lg:flex">
      →
    </div>
  );
}
