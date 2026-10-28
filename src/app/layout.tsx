import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { JsonLd } from "@/components/site/json-ld";
import { Providers } from "@/components/providers";
import { siteJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | AI Automation Agency`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "./",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: `${site.name} | AI Automation Agency`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | AI Automation Agency`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteJsonLd()} />
        <NextTopLoader color="var(--primary)" height={3} showSpinner={false} shadow={false} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
