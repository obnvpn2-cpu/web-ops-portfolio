import { ArrowDown, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 bg-white px-4 py-3 font-bold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-teal-700"
      >
        本文へ移動
      </a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="font-bold tracking-tight text-slate-950">
            {profile.name}
          </a>
          <nav aria-label="ページ内ナビゲーション">
            <ul className="flex items-center gap-4 text-sm font-bold text-slate-700 sm:gap-6">
              <li>
                <a className="hover:text-teal-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700" href="#case-studies">
                  実績
                </a>
              </li>
              <li>
                <a className="hover:text-teal-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700" href="#tech-stack">
                  技術経験
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="top" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold text-teal-800">
              <Code2 aria-hidden="true" size={18} />
              {profile.role}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-black leading-[1.18] tracking-[-0.03em] text-slate-950 sm:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-9 text-slate-700 sm:text-xl">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#case-studies"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
              >
                主要ケーススタディを見る
                <ArrowDown aria-hidden="true" size={17} />
              </a>
              <a
                href="#tech-stack"
                className="inline-flex min-h-12 items-center justify-center px-5 py-3 text-sm font-bold text-slate-800 underline decoration-slate-300 decoration-2 underline-offset-4 hover:decoration-teal-700 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
              >
                経験技術の区分を見る
              </a>
            </div>
          </div>

          <dl className="mt-12 grid border-y border-slate-300 sm:grid-cols-3 sm:divide-x sm:divide-slate-300">
            <HeroFact term="経験" detail="Web制作・開発 約5年" />
            <HeroFact term="実務の中心" detail="HTML / CSS / JavaScript / PHP" />
            <HeroFact term="現在" detail="Reactへの段階移行と既存改修" />
          </dl>
        </div>
      </section>
    </>
  );
}

function HeroFact({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="py-5 sm:px-5 sm:first:pl-0">
      <dt className="text-xs font-bold text-teal-800">{term}</dt>
      <dd className="mt-2 text-sm font-bold leading-6 text-slate-900">{detail}</dd>
    </div>
  );
}
