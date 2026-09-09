import { Braces, Cloud, Code2, Container, Database, FileCode2, GitBranch, ServerCog } from "lucide-react";
import { skillGroups } from "@/data/skills";

const highlights = [
  { icon: Braces, name: "React", scope: "実務" },
  { icon: Code2, name: "JavaScript", scope: "実務" },
  { icon: FileCode2, name: "PHP", scope: "実務" },
  { icon: ServerCog, name: "Laravel", scope: "既存処理の改修" },
  { icon: Database, name: "REST API / SQL", scope: "実務" },
  { icon: Container, name: "Docker", scope: "既存環境" },
  { icon: Cloud, name: "AWS", scope: "軽微な設定" },
  { icon: GitBranch, name: "TypeScript", scope: "個人開発" },
];

export function SkillMatrix() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {highlights.map(({ icon: Icon, name, scope }) => (
          <div key={name} className="flex min-h-[92px] flex-col items-center justify-center border border-slate-200 bg-white px-2 py-3 text-center">
            <Icon aria-hidden="true" className="text-cyan-700" size={25} strokeWidth={1.7} />
            <p className="mt-2 text-xs font-black text-[#082f49]">{name}</p>
            <p className="mt-1 text-[9px] font-medium text-slate-500">{scope}</p>
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
