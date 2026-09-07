import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.GITHUB_ACTIONS === "true"
  ? "https://obnvpn2-cpu.github.io/web-ops-portfolio/"
  : "https://web-ops-portfolio.vercel.app/";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web Engineer Portfolio | Web開発・フロントエンド",
    template: "%s",
  },
  description:
    "HTML / CSS / JavaScript / PHPを中心とした約5年のWeb制作・開発経験と、Reactへの段階移行、API連携、運用改善の実績をまとめたポートフォリオです。",
  icons: {
    icon: [
      { url: new URL("icon.svg", siteUrl).toString(), type: "image/svg+xml" },
      { url: new URL("favicon-32.png", siteUrl).toString(), sizes: "32x32", type: "image/png" },
      { url: new URL("favicon-16.png", siteUrl).toString(), sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: new URL("apple-icon.png", siteUrl).toString(), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Web Engineer Portfolio | Web開発・フロントエンド",
    description:
      "約5年のWeb制作・開発経験と、React改修、API連携、本番運用のケーススタディ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Engineer Portfolio | Web開発・フロントエンド",
    description:
      "約5年のWeb制作・開発経験と、React改修、API連携、本番運用のケーススタディ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
