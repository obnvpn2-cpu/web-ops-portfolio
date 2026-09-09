import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ChartbeatFlow } from "@/components/ChartbeatFlow";

export function CaseStudyList() {
  const [chartbeat, ...otherStudies] = caseStudies;
  const selectedStudies = otherStudies.slice(0, 2);
  const compactStudies = otherStudies.slice(2);

  return (
    <>
      <section id="case-studies" className="scroll-mt-20 bg-[#062d45] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.16fr_0.72fr] lg:items-center lg:gap-8">
            <div>
              <p className="text-sm font-bold text-cyan-300">注目の制作事例</p>
              <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-[-0.025em] sm:text-4xl">
                記事ランキング機能の内製化
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-200">{chartbeat.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["PHP", "Chartbeat API", "Cron", "Cloudflare"].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-cyan-50">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={`/case-studies/${chartbeat.slug}`}
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-sm bg-cyan-500 px-5 py-2.5 text-sm font-bold text-[#062d45] transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                詳しく見る
                <ArrowRight aria-hidden="true" className="motion-arrow" size={16} />
              </Link>
            </div>

            <ChartbeatFlow />

            <dl className="grid gap-5 border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <CaseFact term="課題" detail="外部ランキングサービスが不安定になり、表示を継続できる代替機能が必要でした。" />
              <CaseFact term="対応" detail="Chartbeat APIを使う構成へ置き換え、10分ごとの取得、失敗時の表示継続、キャッシュ調整まで担当しました。" />
              <CaseFact term="結果" detail="ランキング表示を継続できる構成にし、Cloudflareキャッシュによる更新停止を解消しました。" />
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="other-work-title" className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 id="other-work-title" className="text-xl font-black text-[#082f49]">その他の制作事例</h2>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">公開案件を中心に掲載</span>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {selectedStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>

          <details className="group mt-5 border-t border-slate-200">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-3 text-sm font-bold text-[#082f49] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 [&::-webkit-details-marker]:hidden">
              <span>すべての制作事例を見る</span>
              <span aria-hidden="true" className="text-lg text-cyan-700 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="details-content border-t border-slate-200">
              {compactStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} compact />
              ))}
            </div>
          </details>
        </div>
      </section>
    </>
  );
}

function CaseFact({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="text-xs font-black text-cyan-300">{term}</dt>
      <dd className="mt-2 text-xs leading-6 text-slate-200">{detail}</dd>
    </div>
  );
}
