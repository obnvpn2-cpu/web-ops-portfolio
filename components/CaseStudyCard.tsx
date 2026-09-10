import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PanelsTopLeft, Workflow } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { assetPath } from "@/lib/assetPath";

export function CaseStudyCard({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  if (compact) {
    return (
      <article className="grid gap-4 border-b border-slate-200 py-5 sm:grid-cols-[0.55fr_1fr_auto] sm:items-center sm:gap-7">
        <div>
          <p className="text-[11px] font-bold text-cyan-800">{study.label}</p>
          <h4 className="mt-1 text-base font-black text-[#082f49]">{study.title}</h4>
        </div>
        <p className="text-sm leading-7 text-slate-600">{study.summary}</p>
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex min-h-10 w-fit items-center gap-2 text-sm font-bold text-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
        >
          詳しく見る
          <ArrowRight aria-hidden="true" className="motion-arrow" size={15} />
        </Link>
      </article>
    );
  }

  const isExam = study.slug === "miyagi-high-school-exam";

  return (
    <article className="group grid min-w-0 gap-5 border border-slate-200 bg-white p-4 sm:grid-cols-[0.64fr_1fr] sm:items-center sm:p-5">
      {study.thumbnail && study.thumbnailAlt ? (
        <div className="aspect-[8/5] overflow-hidden rounded-sm bg-slate-100">
          <Image
            src={assetPath(study.thumbnail)}
            alt={study.thumbnailAlt}
            width={640}
            height={400}
            loading="lazy"
            unoptimized
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <MiniPreview flow={isExam} />
      )}
      <div className="min-w-0">
        <p className="text-[11px] font-bold text-cyan-800">{study.label}</p>
        <h3 className="mt-2 text-balance text-lg font-black leading-7 text-[#082f49]">{study.title}</h3>
        <p className="mt-2 line-clamp-3 text-xs leading-6 text-slate-600">{study.summary}</p>
        <Link
          href={`/case-studies/${study.slug}`}
          className="mt-3 inline-flex min-h-10 items-center gap-2 text-xs font-bold text-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
        >
          詳しく見る
          <ArrowRight aria-hidden="true" className="motion-arrow" size={14} />
        </Link>
      </div>
    </article>
  );
}

function MiniPreview({ flow }: { flow: boolean }) {
  const Icon = flow ? Workflow : PanelsTopLeft;

  return (
    <div aria-hidden="true" className="relative min-h-[128px] overflow-hidden rounded-sm bg-slate-100 p-3">
      <div className="flex h-full min-h-[104px] overflow-hidden rounded-sm border border-slate-200 bg-white">
        <div className="w-7 bg-[#082f49] p-2">
          <span className="block size-2 rounded-full bg-cyan-400" />
          <span className="mt-3 block h-1 w-3 bg-white/40" />
          <span className="mt-2 block h-1 w-3 bg-white/40" />
        </div>
        <div className="flex flex-1 items-center justify-center p-3">
          <Icon className="text-cyan-700" size={36} strokeWidth={1.4} />
        </div>
      </div>
    </div>
  );
}
