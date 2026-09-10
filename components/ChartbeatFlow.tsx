"use client";

import Image from "next/image";
import { useRef } from "react";
import { assetPath } from "@/lib/assetPath";

export function ChartbeatFlow({ className = "" }: { className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <figure className={className}>
      <Image
        src={assetPath("/images/chartbeat-ranking-flow.jpg")}
        alt="Chartbeat APIを使った記事ランキング内製化の処理フロー"
        width={1280}
        height={720}
        loading="lazy"
        unoptimized
        decoding="async"
        className="h-auto w-full object-contain"
      />
      <button
        ref={triggerRef}
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="mx-3 mb-3 mt-3 inline-flex min-h-11 items-center text-xs font-bold text-cyan-100 underline decoration-cyan-400 decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white md:hidden"
      >
        図を拡大して見る
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Chartbeat APIを使った記事ランキング内製化の処理フロー"
        onClose={() => triggerRef.current?.focus()}
        className="m-0 h-[100dvh] max-h-none w-[100dvw] max-w-none overflow-hidden bg-[#041f30] p-0 text-white backdrop:bg-slate-950/80 md:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex min-h-12 items-center justify-between gap-4 border-b border-white/15 px-4 py-2">
            <p className="text-xs font-bold">記事ランキング機能の処理フロー</p>
            <form method="dialog">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center px-2 text-xs font-bold underline decoration-slate-400 underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                閉じる
              </button>
            </form>
          </div>
          <div className="min-h-0 flex-1 p-2">
            <Image
              src={assetPath("/images/chartbeat-ranking-flow.jpg")}
              alt="Chartbeat APIを使った記事ランキング内製化の処理フロー"
              width={1280}
              height={720}
              unoptimized
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </dialog>
    </figure>
  );
}
