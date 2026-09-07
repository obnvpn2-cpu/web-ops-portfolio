import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ChartbeatFlow } from "@/components/ChartbeatFlow";

export function CaseStudyList() {
  const [chartbeat, ...otherStudies] = caseStudies;
  const selectedStudies = otherStudies.slice(0, 2);
  const compactStudies = otherStudies.slice(2);

  return (
    <div className="space-y-12">
      <article className="grid gap-7 bg-slate-950 p-5 text-white sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-amber-300">最優先で見てほしい実績</p>
          <h3 className="mt-4 text-balance text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
            {chartbeat.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-200">{chartbeat.summary}</p>
          <dl className="mt-7 grid gap-4 border-t border-white/25 pt-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold text-teal-200">担当</dt>
              <dd className="mt-2 text-sm leading-6 text-slate-100">調査、設計、実装、本番反映、公開後確認</dd>
            </div>
            <div>
              <dt className="text-xs font-bold text-teal-200">結果</dt>
              <dd className="mt-2 text-sm leading-6 text-slate-100">{chartbeat.result}</dd>
            </div>
          </dl>
          <Link
            href={`/case-studies/${chartbeat.slug}`}
            className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 bg-amber-300 px-5 py-3 text-sm font-bold text-amber-950 transition-colors hover:bg-amber-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            Chartbeat案件の詳細
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <ChartbeatFlow />
      </article>

      <div>
        <h3 className="text-2xl font-bold text-slate-950">公開画面で確認できる実績</h3>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {selectedStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-950">その他の実績</h3>
        <div className="mt-5 border-t border-slate-300">
          {compactStudies.map((study) => (
            <article
              key={study.slug}
              className="grid gap-4 border-b border-slate-300 py-6 lg:grid-cols-[0.72fr_1fr_auto] lg:items-center lg:gap-8"
            >
              <div>
                <p className="text-xs font-bold text-teal-800">{study.label}</p>
                <h4 className="mt-2 text-lg font-bold text-slate-950">{study.title}</h4>
              </div>
              <p className="text-sm leading-7 text-slate-700">{study.summary}</p>
              <div className="flex flex-wrap gap-x-5 text-sm font-bold">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 underline decoration-slate-300 decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
                >
                  実績詳細
                  <ArrowUpRight aria-hidden="true" size={15} />
                  <span className="sr-only"> {study.title}</span>
                </Link>
                {study.sourceUrl ? (
                  <a
                    href={study.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-teal-800 underline decoration-slate-300 decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
                  >
                    公開ページ
                    <span className="sr-only"> {study.title}（新しいタブで開きます）</span>
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
