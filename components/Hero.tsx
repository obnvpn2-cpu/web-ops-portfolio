import {
  ArrowDown,
  ArrowRight,
  Braces,
  Database,
  FileSearch,
  Menu,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { profile } from "@/data/profile";

const navigation = [
  { href: "#case-studies", label: "実績" },
  { href: "#capabilities", label: "できること" },
  { href: "#tech-stack", label: "技術経験" },
  { href: "#contact", label: "お問い合わせ" },
];

const visualItems = [
  { icon: FileSearch, title: "現状の理解", detail: "調査・分析" },
  { icon: Wrench, title: "課題の発見", detail: "改修・提案" },
  { icon: Database, title: "外部サービス連携", detail: "API連携" },
  { icon: ShieldCheck, title: "運用・改善", detail: "監視・調整" },
];

export function Hero() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 bg-white px-4 py-3 font-bold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-cyan-700"
      >
        本文へ移動
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="flex items-baseline gap-3 text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700">
            <span className="text-lg font-black tracking-[0.16em]">{profile.name}</span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:inline">{profile.role}</span>
          </a>

          <nav aria-label="ページ内ナビゲーション" className="hidden items-center gap-7 md:flex">
            <ul className="flex items-center gap-7 text-xs font-bold text-slate-700">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="transition-colors hover:text-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#case-studies"
              className="inline-flex min-h-10 items-center gap-2 rounded-sm bg-[#082f49] px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
            >
              制作事例を見る
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </nav>

          <details className="group relative md:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center text-[#082f49] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" size={29} strokeWidth={1.8} />
              <span className="sr-only">メニューを開く</span>
            </summary>
            <nav aria-label="モバイルナビゲーション" className="absolute right-0 top-[52px] w-56 border border-slate-200 bg-white p-2 shadow-[0_6px_8px_rgba(8,47,73,0.12)]">
              <ul className="grid text-sm font-bold text-slate-800">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a className="flex min-h-11 items-center justify-between px-3 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan-700" href={item.href}>
                      {item.label}
                      <ArrowRight aria-hidden="true" size={15} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </header>

      <section id="top" className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[460px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-14">
          <div>
            <p className="hero-intro-item hero-intro-delay-80 text-sm font-bold text-cyan-800">
              Webエンジニア / フロントエンド領域
            </p>
            <h1 className="hero-intro-item hero-intro-delay-170 mt-4 text-balance text-[clamp(2.25rem,2.8vw,3rem)] font-black leading-[1.16] tracking-[-0.035em] text-[#082f49]">
              既存Webを読み解き、<br className="hidden sm:block" />改善し、運用までつなげる。
            </h1>
            <p className="hero-intro-item hero-intro-delay-260 mt-6 max-w-2xl text-pretty text-[15px] leading-8 text-slate-600 sm:text-base">
              {profile.summary}
            </p>
            <div className="hero-intro-item hero-intro-delay-360 mt-8 grid gap-3 sm:flex sm:items-center">
              <a
                href="#case-studies"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#082f49] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
              >
                制作事例を見る
                <ArrowDown aria-hidden="true" className="motion-arrow-down" size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-slate-400 px-6 py-3 text-sm font-bold text-[#082f49] transition-colors hover:border-cyan-700 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
              >
                希望する業務
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="hero-intro-item hero-intro-delay-470 hero-system relative mx-auto w-full max-w-[650px]" aria-label="既存Webの調査から運用改善までの対応範囲">
      <div className="grid grid-cols-[112px_1fr] items-center gap-3 sm:grid-cols-[148px_1fr] sm:gap-5">
        <div className="relative z-10 grid gap-2">
          {visualItems.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="hero-system-item flex min-h-[58px] items-center gap-2.5 border border-slate-200 bg-white px-2.5 py-2 sm:min-h-[66px] sm:gap-3 sm:px-3">
              <Icon aria-hidden="true" className="shrink-0 text-cyan-700" size={20} strokeWidth={1.8} />
              <div>
                <p className="text-[10px] font-bold leading-4 text-[#082f49] sm:text-xs">{title}</p>
                <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative min-w-0 py-7 sm:py-10">
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_6px_8px_rgba(8,47,73,0.12)]">
            <div className="flex h-8 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3">
              <span className="size-2 rounded-full bg-rose-300" />
              <span className="size-2 rounded-full bg-amber-300" />
              <span className="size-2 rounded-full bg-emerald-300" />
              <span className="ml-3 text-[9px] font-bold text-slate-500">Web Service</span>
            </div>
            <div className="grid min-h-[235px] grid-cols-[0.26fr_1fr] sm:min-h-[300px]">
              <div className="border-r border-slate-100 bg-slate-50 p-3">
                <div className="h-3 w-11 rounded-sm bg-cyan-700" />
                <div className="mt-6 grid gap-3">
                  <span className="h-1.5 w-10 bg-slate-300" />
                  <span className="h-1.5 w-8 bg-slate-300" />
                  <span className="h-1.5 w-12 bg-slate-300" />
                  <span className="h-1.5 w-9 bg-slate-300" />
                </div>
              </div>
              <div className="p-3 sm:p-5">
                <div className="h-3 w-20 bg-slate-300" />
                <div className="mt-4 h-20 border border-cyan-100 bg-cyan-50 sm:h-28" />
                <div className="mt-4 grid grid-cols-[72px_1fr] gap-3 sm:grid-cols-[105px_1fr]">
                  <div className="h-14 bg-slate-200 sm:h-20" />
                  <div className="grid content-start gap-2">
                    <span className="h-2 w-full bg-slate-300" />
                    <span className="h-2 w-5/6 bg-slate-200" />
                    <span className="h-2 w-3/5 bg-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-code-card absolute right-[-4px] top-2 w-[58%] rounded-md bg-[#062d45] p-3 text-cyan-50 shadow-[0_6px_8px_rgba(8,47,73,0.18)] sm:right-[-18px] sm:top-5 sm:p-5">
            <div className="flex items-center gap-2 text-[9px] font-bold text-cyan-300 sm:text-[11px]">
              <Braces aria-hidden="true" size={14} />
              API integration
            </div>
            <code className="mt-3 block whitespace-pre-wrap font-mono text-[7px] leading-4 text-cyan-100 sm:text-[10px] sm:leading-5">
              {`const response = await fetch(endpoint)\nconst data = await response.json()`}
            </code>
            <p className="mt-3 border-t border-white/15 pt-3 text-[8px] leading-4 text-cyan-100 sm:text-[10px] sm:leading-5">
              既存サービスを調べ、必要な処理をつなぎ直す
            </p>
          </div>
        </div>
      </div>
      <p className="mt-1 text-right text-[9px] font-bold tracking-[0.14em] text-slate-400 sm:text-[10px]">
        UNDERSTAND / IMPROVE / OPERATE
      </p>
    </div>
  );
}
