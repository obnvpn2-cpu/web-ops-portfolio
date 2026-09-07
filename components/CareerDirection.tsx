import { profile } from "@/data/profile";

export function CareerDirection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr] lg:gap-14">
      <h3 className="text-xl font-bold leading-8 text-slate-950">Webの実装から公開後の確認まで関わる</h3>
      <div>
        <p className="text-lg leading-9 text-slate-700">{profile.desiredWork}</p>
        <ul className="mt-6 grid gap-3 text-sm font-bold text-slate-800 sm:grid-cols-2">
          <li className="border-t border-slate-300 pt-3">Webエンジニア / フロントエンド</li>
          <li className="border-t border-slate-300 pt-3">既存Webの改修とReactへの段階移行</li>
          <li className="border-t border-slate-300 pt-3">REST API・DB連携を含む画面実装</li>
          <li className="border-t border-slate-300 pt-3">本番反映後も動作を追える運用</li>
        </ul>
      </div>
    </div>
  );
}
