import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          borderTop: "18px solid #0f766e",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 700 }}>
          <span>Web Engineer Portfolio</span>
          <span style={{ color: "#0f766e" }}>実務経験 約5年</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.15 }}>Web開発・フロントエンド</div>
          <div style={{ marginTop: 24, maxWidth: 820, fontSize: 34, lineHeight: 1.5 }}>
            既存Webの改修、Reactへの段階移行、API連携、公開後の運用
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, fontWeight: 700 }}>
          {["HTML / CSS / JavaScript", "PHP / React", "REST API / Cron"].map((item) => (
            <span key={item} style={{ border: "3px solid #0f172a", padding: "12px 18px", background: "#ffffff" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
  );
}
