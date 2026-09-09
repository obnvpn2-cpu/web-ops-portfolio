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
            <li><a className="hover:text-white" href="#case-studies">実績</a></li>
            <li><a className="hover:text-white" href="#capabilities">できること</a></li>
            <li><a className="hover:text-white" href="#tech-stack">技術経験</a></li>
            <li><a className="hover:text-white" href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
