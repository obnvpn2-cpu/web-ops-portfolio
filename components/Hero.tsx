import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/assetPath";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[520px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:py-14">
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
              href={assetPath("/#case-studies")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#082f49] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
            >
              制作事例を見る
              <ArrowDown aria-hidden="true" className="motion-arrow-down" size={16} />
            </a>
            <a
              href={assetPath("/#desired-work")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-slate-400 px-6 py-3 text-sm font-bold text-[#082f49] transition-colors hover:border-cyan-700 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700"
            >
              希望する業務
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <figure className="hero-intro-item hero-intro-delay-470 mx-auto w-full max-w-[720px]">
          <Image
            src={assetPath("/images/hero-workflow.jpg")}
            alt="既存Webを調査し、UIや処理を分解して改善・再構築する流れ"
            width={1280}
            height={960}
            fetchPriority="high"
            unoptimized
            decoding="async"
            className="h-auto w-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
