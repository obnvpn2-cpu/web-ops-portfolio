import { ArrowRight, Menu } from "lucide-react";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/assetPath";

const navigation = [
  { href: "/#case-studies", label: "実績" },
  { href: "/#capabilities", label: "できること" },
  { href: "/#tech-stack", label: "技術経験" },
  { href: "/#desired-work", label: "希望する業務" },
];

export function SiteHeader() {
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
          <a
            href={assetPath("/#top")}
            className="flex items-baseline gap-3 text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
          >
            <span className="text-sm font-black tracking-[0.08em] sm:text-base">{profile.role}</span>
          </a>

          <nav aria-label="サイトナビゲーション" className="hidden items-center gap-7 md:flex">
            <ul className="flex items-center gap-7 text-xs font-bold text-slate-700">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="transition-colors hover:text-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700" href={assetPath(item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={assetPath("/#case-studies")}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#082f49] px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
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
                    <a className="flex min-h-11 items-center justify-between px-3 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan-700" href={assetPath(item.href)}>
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
    </>
  );
}
