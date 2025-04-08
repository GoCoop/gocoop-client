import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "../../../i18-config";
import Header from "@/components/core/Header";
import { getDictionary } from "@/dictionaries";
import PageConfigProvider from "@/context/PageConfigContext";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const { lang } = (await params);
  const t = await getDictionary(lang);

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      title: t.metadata.openGraph.title,
      description: t.metadata.openGraph.description,
      siteName: t.metadata.openGraph.siteName,
      images: [
        { 
          url: process.env.NEXT_PUBLIC_METADATA_OPENGRAPH_IMAGE || '',
          width: 1200,
          height: 630,
          alt: t.metadata.openGraph.alt
        }
      ],
      type: 'website'
    }
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang: Locale}>
}>) {

  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <PageConfigProvider>
            <Header t={t.header}/>
            {children}
          </PageConfigProvider>  
        </Suspense> 
      </body>
    </html>
  );
}
