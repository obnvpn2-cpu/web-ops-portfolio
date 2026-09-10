import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { skillGroups } from "@/data/skills";

const highlights = [
  { icon: SiReact, name: "React", scope: "実務", color: "#087ea4" },
  { icon: SiJavascript, name: "JavaScript", scope: "実務", color: "#b58b00" },
  { icon: SiTypescript, name: "TypeScript", scope: "個人開発", color: "#3178c6" },
  { icon: SiPhp, name: "PHP", scope: "実務", color: "#777bb4" },
  { icon: SiLaravel, name: "Laravel", scope: "既存処理の調査・軽微な改修", color: "#f42b20" },
  { icon: FaAws, name: "AWS", scope: "軽微な設定・状態確認", color: "#d97706" },
  { icon: SiDocker, name: "Docker", scope: "既存環境", color: "#2496ed" },
  { icon: SiGit, name: "Git", scope: "実務", color: "#f05032" },
];

export function SkillMatrix() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {highlights.map(({ icon: Icon, name, scope, color }) => (
          <div key={name} className="flex min-h-[112px] flex-col items-center justify-center border border-slate-200 bg-white px-2 py-3 text-center">
            <Icon aria-hidden="true" size={28} style={{ color }} />
            <p className="mt-2 text-xs font-black text-[#082f49]">{name}</p>
            <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500">{scope}</p>
          </div>
        ))}
      </div>

      <details className="group mt-4 border-y border-slate-200">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-3 text-sm font-bold text-[#082f49] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 [&::-webkit-details-marker]:hidden">
          <span>経験範囲を詳しく見る</span>
          <span aria-hidden="true" className="text-lg text-cyan-700 transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="details-content border-t border-slate-200 pb-3">
          {skillGroups.map((group) => (
            <section key={group.label} className="grid gap-3 border-b border-slate-200 py-5 last:border-b-0 sm:grid-cols-[0.4fr_1fr] sm:gap-8">
              <div>
                <h3 className="text-sm font-black text-[#082f49]">{group.label}</h3>
                <p className="mt-1 text-[11px] leading-5 text-slate-500">{group.description}</p>
              </div>
              <dl className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <dt className="text-xs font-bold text-slate-800">{item.name}</dt>
                    {item.note ? <dd className="mt-1 text-[10px] leading-5 text-slate-500">{item.note}</dd> : null}
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </details>
    </div>
  );
}
