import { Code2, Database, Search, Settings } from "lucide-react";
import { CareerDirection } from "@/components/CareerDirection";
import { CaseStudyList } from "@/components/CaseStudyList";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JobTrackerDemo } from "@/components/JobTrackerDemo";
import { SkillMatrix } from "@/components/SkillMatrix";
import { SiteHeader } from "@/components/SiteHeader";
import { currentWork, profile } from "@/data/profile";

const capabilities = [
  { icon: Search, title: "調査", detail: "既存仕様の確認、課題整理" },
  { icon: Code2, title: "実装", detail: "フロントエンド・既存PHP改修" },
  { icon: Database, title: "API連携", detail: "外部APIの取得・JSON加工" },
  { icon: Settings, title: "運用改善", detail: "公開後の確認・改修" },
];

export default function Home() {
  return (
    <div className="min-h-full bg-white text-slate-950">
      <SiteHeader />
      <Hero />
      <main id="main-content">
        <CaseStudyList />

        <section id="capabilities" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-7 sm:py-9">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-[0.78fr_repeat(4,1fr)] lg:items-center lg:gap-0">
            <div className="lg:pr-8">
              <h2 className="text-xl font-black text-[#082f49]">できること</h2>
              <p className="mt-2 max-w-sm text-xs leading-6 text-slate-600">
                既存Webの調査から実装、公開後の確認まで一貫して対応してきました。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-4 lg:col-span-4 lg:border-y-0 lg:border-r-0">
              {capabilities.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex min-h-[112px] items-start gap-3 bg-slate-50 p-4 lg:min-h-[92px] lg:border-l lg:border-slate-200">
                  <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-cyan-700" size={25} strokeWidth={1.7} />
                  <div>
                    <h3 className="text-sm font-black text-[#082f49]">{title}</h3>
                    <p className="mt-1 text-[10px] leading-5 text-slate-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tech-stack" className="scroll-mt-20 bg-white py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#082f49]">使用技術・ツール</h2>
                  <p className="mt-2 text-xs leading-6 text-slate-600">実務と個人開発の区分を併記しています。</p>
                </div>
              </div>
              <SkillMatrix />
            </div>

            <div id="current-work" className="scroll-mt-20">
              <h2 className="text-2xl font-black text-[#082f49]">現在の実務</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{profile.currentPosition}</p>
              <div className="mt-6 border-t border-slate-200">
                {currentWork.map((item) => (
                  <article key={item.title} className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[0.38fr_1fr] sm:gap-5">
                    <div>
                      <h3 className="text-sm font-black text-[#082f49]">{item.title}</h3>
                      <p className="mt-1 text-[10px] leading-5 text-cyan-800">{item.technologies}</p>
                    </div>
                    <p className="text-xs leading-6 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="react-demo" className="border-t border-slate-200 bg-slate-50 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <details className="group border-y border-slate-300 bg-white px-4 sm:px-6">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-bold text-[#082f49] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-cyan-700 [&::-webkit-details-marker]:hidden">
                <span>個人開発　React / TypeScript 選考ステータス管理デモ</span>
                <span aria-hidden="true" className="text-xl text-cyan-700 transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="details-content pb-6">
                <JobTrackerDemo />
              </div>
            </details>
          </div>
        </section>

        <CareerDirection />
      </main>
      <Footer />
    </div>
  );
}
