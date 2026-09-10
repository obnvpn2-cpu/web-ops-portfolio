import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/assetPath";

export function CareerDirection() {
  return (
    <section
      id="desired-work"
      className="relative scroll-mt-20 overflow-hidden bg-[#062d45] text-white"
      style={{ backgroundImage: `url(${assetPath("/images/contact-background.jpg")})`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-[#062d45]/90" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 md:grid-cols-[0.8fr_1fr_auto] md:py-12">
        <h2 className="text-balance text-2xl font-black leading-tight tracking-[-0.02em] sm:text-3xl">
          既存Webの改修から、公開後の確認まで対応します。
        </h2>
        <div>
          <p className="text-sm leading-7 text-slate-200">{profile.desiredWork}</p>
          <p className="mt-2 text-[11px] leading-5 text-cyan-100">選考に関するご連絡は、応募媒体からお願いいたします。</p>
        </div>
        <a
          href="https://github.com/obnvpn2-cpu"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-amber-950 transition-colors hover:bg-amber-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
        >
          GitHubを見る
          <span className="sr-only">（新しいタブで開きます）</span>
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}
