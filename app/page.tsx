import { CareerDirection } from "@/components/CareerDirection";
import { CaseStudyList } from "@/components/CaseStudyList";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JobTrackerDemo } from "@/components/JobTrackerDemo";
import { Section } from "@/components/Section";
import { SkillMatrix } from "@/components/SkillMatrix";
import { currentWork, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-full bg-white text-slate-950">
      <Hero />
      <main id="main-content">
        <Section
          id="current-work"
          title="現在の実務"
          description={profile.currentPosition}
        >
          <div className="border-t border-slate-300">
            {currentWork.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 border-b border-slate-300 py-7 lg:grid-cols-[0.36fr_1fr] lg:gap-12"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-teal-800">{item.technologies}</p>
                </div>
                <p className="max-w-3xl leading-8 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="case-studies"
          title="主要ケーススタディ"
          description="課題の確認から調査、実装、本番反映後の確認まで、担当した範囲が分かる実績を上位に置いています。"
          tone="muted"
        >
          <CaseStudyList />
        </Section>

        <Section
          id="tech-stack"
          title="技術経験"
          description="実務、個人開発、継続学習を分けています。特に経験範囲の限られる技術は、担当した内容も併記しました。"
        >
          <SkillMatrix />
        </Section>

        <Section
          id="react-demo"
          title="個人開発"
          description="TypeScriptとNext.jsは、このポートフォリオと個人開発を中心に使用しています。"
          tone="muted"
        >
          <details className="group border-y border-slate-300 bg-white">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-1 py-4 font-bold text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700 [&::-webkit-details-marker]:hidden">
              <span>選考ステータス管理デモを開く</span>
              <span aria-hidden="true" className="text-xl text-teal-800 group-open:rotate-45">+</span>
            </summary>
            <div className="pb-7">
              <JobTrackerDemo />
            </div>
          </details>
        </Section>

        <Section
          id="career-direction"
          title="希望する業務"
          description="今までの実装・改修・運用経験と、現在のReact改修の両方を使える業務を希望しています。"
        >
          <CareerDirection />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
