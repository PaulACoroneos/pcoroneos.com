import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/header";
import SectionContainer from "../components/section-container";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#094074" />
        <meta name="msapplication-TileColor" content="#094074" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      </head>
      <body>
        <Header />
        <SectionContainer>
          <main>{children}</main>
          <Footer />
        </SectionContainer>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}

export const metadata: Metadata = {
  title: "Paul Coroneos",
  description: "A blog and portfolio by Paul Coroneos",
};
