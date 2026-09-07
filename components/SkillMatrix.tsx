import { skillGroups } from "@/data/skills";

export function SkillMatrix() {
  return (
    <div className="border-t border-slate-300">
      {skillGroups.map((group) => (
        <section
          key={group.label}
          className="grid gap-5 border-b border-slate-300 py-7 lg:grid-cols-[0.42fr_1fr] lg:gap-12"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-950">{group.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
          </div>
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {group.items.map((item) => (
              <div key={item.name}>
                <dt className="font-bold text-slate-900">{item.name}</dt>
                {item.note ? <dd className="mt-1 text-sm leading-6 text-slate-600">{item.note}</dd> : null}
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
