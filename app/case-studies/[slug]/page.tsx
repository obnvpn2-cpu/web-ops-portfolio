import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ChartbeatFlow } from "@/components/ChartbeatFlow";
import { Footer } from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "実績詳細" };
  }

  return {
    title: `${study.title} | Web Engineer Portfolio`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | Web Engineer Portfolio`,
      description: study.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-full bg-white text-slate-950">
      <main>
        <article>
          <header className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
              <Link
                href="/#case-studies"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-700 underline decoration-slate-300 decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
              >
                <ArrowLeft aria-hidden="true" size={16} />
                ケーススタディ一覧へ戻る
              </Link>
              <div className="mt-10 max-w-4xl">
                <p className="text-sm font-bold text-teal-800">{study.label} ・ {study.period}</p>
                <h1 className="mt-4 text-balance text-4xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-6xl">
                  {study.title}
                </h1>
                <p className="mt-6 max-w-3xl text-pretty text-lg leading-9 text-slate-700">{study.summary}</p>
                {study.sourceUrl ? (
                  <a
                    href={study.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-12 items-center gap-2 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
                  >
                    {study.title}の公開ページ
                    <span className="sr-only">（新しいタブで開きます）</span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            {study.slug === "chartbeat-ranking" ? (
              <div className="mb-12">
                <ChartbeatFlow />
              </div>
            ) : null}

            <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
              <aside aria-label="案件概要">
                <dl className="border-t border-slate-300 text-sm">
                  <MetaItem term="担当範囲" detail={study.responsibilities.join(" / ")} />
                  <MetaItem term="使用技術" detail={study.technologies.join(" / ")} />
                  <MetaItem term="体制" detail={study.team} />
                  <MetaItem term="公開範囲" detail={study.confidentiality} />
                </dl>
              </aside>

              <div className="space-y-12">
                <DetailSection title="課題">
                  <p>{study.problem}</p>
                </DetailSection>

                <DetailSection title="担当した役割">
                  <p>{study.role}</p>
                </DetailSection>

                <DetailSection title="制約と確認条件">
                  <ul className="grid gap-3">
                    {study.constraints.map((item) => (
                      <li key={item} className="bg-slate-50 px-4 py-3">{item}</li>
                    ))}
                  </ul>
                </DetailSection>

                <DetailSection title="調査から運用まで">
                  <ol className="space-y-7">
                    {study.process.map((step, index) => (
                      <li key={step.title} className="grid gap-3 sm:grid-cols-[44px_1fr]">
                        <span aria-hidden="true" className="grid size-9 place-items-center bg-teal-800 text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-bold text-slate-950">{step.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-700">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </DetailSection>

                <DetailSection title="設計で優先したこと">
                  <p>{study.approach}</p>
                </DetailSection>

                <DetailSection title="結果">
                  <p>{study.result}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {study.outcomes.map((item) => (
                      <li key={item} className="border-t-2 border-teal-700 pt-3 text-sm leading-7 text-slate-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </DetailSection>

                <DetailSection title="振り返り">
                  <p>{study.learned}</p>
                </DetailSection>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function MetaItem({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="border-b border-slate-300 py-5">
      <dt className="font-bold text-slate-950">{term}</dt>
      <dd className="mt-2 leading-7 text-slate-600">{detail}</dd>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-balance text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
      <div className="mt-5 max-w-3xl text-pretty leading-8 text-slate-700">{children}</div>
    </section>
  );
}
