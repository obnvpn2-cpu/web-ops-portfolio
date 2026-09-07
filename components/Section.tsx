import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "white" | "muted";
};

export function Section({ id, title, description, children, tone = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-6 border-b border-slate-200 py-14 sm:py-20 ${tone === "muted" ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-9 max-w-3xl">
          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.02em] text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty text-base leading-8 text-slate-700 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
