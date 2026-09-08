"use client";

import { useEffect, useRef, useState } from "react";

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
      className={`chartbeat-flow bg-teal-950 p-5 text-white sm:p-7 ${isVisible ? "is-visible" : ""}`}
    >
      <figcaption id="chartbeat-flow-title" className="text-sm font-bold text-teal-100">
        10分ごとの取得と、失敗時の表示継続
      </figcaption>
      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        <FlowStep label="取得" title="Chartbeat API" detail="APIキーを管理し、REST APIからJSONを取得" />
        <FlowArrow />
        <FlowStep label="保存" title="Cron / 10分間隔" detail="取得データと実行ログを保存" />
        <FlowArrow />
        <FlowStep label="表示" title="PHP / JavaScript" detail="JSONを加工し、記事ランキングを表示" />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <p className="flow-note flow-note-fallback bg-amber-300 p-4 text-sm leading-6 text-amber-950">
          <span className="block font-bold">API取得失敗時</span>
          前回の取得データを使い、ランキング表示を継続します。
        </p>
        <p className="flow-note flow-note-cloudflare bg-white/10 p-4 text-sm leading-6 text-teal-50">
          <span className="block font-bold text-white">Cloudflareキャッシュ</span>
          .htaccessとCache-Controlを調整し、古い表示が残る問題を解消しました。
        </p>
      </div>
    </figure>
  );
}

function FlowStep({ label, title, detail }: { label: string; title: string; detail: string }) {
  return (
    <div className="flow-step border border-white/25 bg-white/5 p-4">
      <p className="text-xs font-bold text-amber-300">{label}</p>
      <p className="mt-2 text-base font-bold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-teal-50">{detail}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flow-arrow hidden items-center text-xl text-amber-300 lg:flex">
      →
    </div>
  );
}
