import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-[#041f30] px-5 py-6 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[11px] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-black tracking-[0.12em]">{profile.name}</span>
          <span className="ml-3 text-slate-400">|</span>
          <span className="ml-3 text-slate-300">{profile.role}</span>
        </p>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-bold text-slate-300">
            <li><Link className="inline-flex min-h-11 items-center hover:text-white" href="/#case-studies">実績</Link></li>
            <li><Link className="inline-flex min-h-11 items-center hover:text-white" href="/#capabilities">できること</Link></li>
            <li><Link className="inline-flex min-h-11 items-center hover:text-white" href="/#tech-stack">技術経験</Link></li>
            <li><Link className="inline-flex min-h-11 items-center hover:text-white" href="/#desired-work">希望する業務</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
