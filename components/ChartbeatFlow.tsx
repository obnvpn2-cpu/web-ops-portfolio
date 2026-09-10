import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export function ChartbeatFlow({ className = "" }: { className?: string }) {
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
    </figure>
  );
}
