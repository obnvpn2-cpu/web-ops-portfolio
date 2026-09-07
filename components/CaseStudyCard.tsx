import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col border border-slate-300 bg-white p-5 sm:p-6">
      <p className="text-xs font-bold text-teal-800">{study.label} ・ {study.period}</p>
      <h3 className="mt-3 text-balance text-2xl font-bold leading-8 text-slate-950">{study.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-700">{study.summary}</p>
      <dl className="mt-6 grid gap-4 border-t border-slate-200 pt-5">
        <div>
          <dt className="text-xs font-bold text-slate-500">担当</dt>
          <dd className="mt-2 text-sm leading-6 text-slate-800">{study.responsibilities.slice(0, 4).join(" / ")}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold text-slate-500">結果</dt>
          <dd className="mt-2 text-sm leading-6 text-slate-800">{study.result}</dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-7 text-sm font-bold">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex min-h-11 items-center gap-2 text-slate-950 underline decoration-teal-700 decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
        >
          {study.title}の詳細
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
        {study.sourceUrl ? (
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-teal-800 underline decoration-slate-300 decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
          >
            {study.title}の公開ページ
            <span className="sr-only">（新しいタブで開きます）</span>
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
