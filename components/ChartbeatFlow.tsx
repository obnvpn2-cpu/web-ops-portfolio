"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Clock3, Database, FileJson, Files, Newspaper } from "lucide-react";

const steps = [
  { icon: Database, title: "Chartbeat API", detail: "ランキングデータ取得" },
  { icon: FileJson, title: "PHP / JSON", detail: "取得・加工" },
  { icon: Files, title: "保存データ", detail: "前回データを保持" },
  { icon: Newspaper, title: "ランキング表示", detail: "HTML / JavaScript" },
];

export function ChartbeatFlow() {
  const flowRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = flowRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={flowRef}
      aria-labelledby="chartbeat-flow-title"
      className={`chartbeat-flow rounded-sm bg-white p-4 text-[#082f49] sm:p-6 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <figcaption id="chartbeat-flow-title" className="text-sm font-black">
          データ取得・処理の流れ
        </figcaption>
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-[11px] font-bold text-cyan-900">
          <Clock3 aria-hidden="true" size={14} />
          Cronで10分ごとに取得
        </p>
      </div>

      <div className="mt-5 grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {steps.map(({ icon: Icon, title, detail }, index) => (
          <div key={title} className="contents">
            <div className={`flow-step flow-step-${index + 1} flex min-h-[96px] items-center gap-3 bg-slate-50 p-3 sm:block sm:min-h-[128px] sm:text-center`}>
              <Icon aria-hidden="true" className="mx-0 shrink-0 text-cyan-700 sm:mx-auto" size={25} strokeWidth={1.7} />
              <div>
                <p className="mt-0 text-xs font-black sm:mt-3">{title}</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500">{detail}</p>
              </div>
            </div>
            {index < steps.length - 1 ? (
              <div aria-hidden="true" className={`flow-arrow flow-arrow-${index + 1} grid place-items-center text-cyan-600`}>
                <ArrowDown className="sm:hidden" size={18} />
                <ArrowRight className="hidden sm:block" size={18} />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flow-note flow-note-fallback mt-4 flex flex-col items-center justify-center gap-2 border border-dashed border-cyan-300 bg-cyan-50 px-4 py-3 text-center text-[11px] leading-5 text-cyan-950 sm:flex-row">
        <span className="font-black">API取得失敗時</span>
        <ArrowRight aria-hidden="true" className="hidden sm:block" size={15} />
        <span>前回取得データでランキング表示を継続</span>
      </div>
    </figure>
  );
}
