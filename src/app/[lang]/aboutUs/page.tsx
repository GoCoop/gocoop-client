import Link from "next/link";
import type { Metadata } from "next";

import { getDictionary, type Locales } from "../../../dictionaries";

import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

type Props = {
  params: Promise<{ lang: Locales }>
}

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  return {
    title: t.aboutUs.metadata.title,
    description: t.aboutUs.metadata.description,
    openGraph: {
      title: t.aboutUs.metadata.openGraph.title,
      description: t.aboutUs.metadata.openGraph.description,
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
  }
}

export default async function AboutUsPage({ params }: Props) {

  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <main className="p-6 grid gap-5 lg:justify-center">
        <div className="mt-[5rem] grid gap-5 md:place-self-start lg:w-[33rem]">
          <section className="grid gap-4">
            <h1 className="text-xl font-medium">{t.aboutUs.link}</h1>
            <p>
              {t.aboutUs.sectionOne} 
            </p>
            <span>
              {t.aboutUs.sectionOneWarning}
            </span>
            <h2>
              <i>
                <b>{t.aboutUs.slogan}</b>
              </i> 
            </h2>
          </section>

          <section className="grid gap-4">
            <h2 className="text-lg font-medium">{t.aboutUs.sectionTwoTitle}</h2>
            <p>{t.aboutUs.sectionTwo}</p>
          </section>

          <section className="grid gap-4">
            <h2>
              <b>{t.aboutUs.linksTitle}</b>
            </h2>

            <nav>
              <ul className="flex items-center gap-4">
                <li className="w-fit">
                  <Link
                    href={"https://github.com/GoCoop"}
                    target="_blank"
                    rel="noopener"
                    aria-label={t.aboutUs.aria.githubLink}
                  >
                    <GithubIcon />
                  </Link>  
                </li>  
                <li className="w-fit">
                  <Link
                    href={"https://www.linkedin.com/company/gocoop-foundation/"}
                    target="_blank"
                    rel="noopener"
                    aria-label={t.aboutUs.aria.linkedInLink}
                  >
                    <LinkedInIcon />
                  </Link>  
                </li>
              </ul> 
            </nav>
          </section>
        </div>

        <div className="p-6 h-60 bg-mainColorTheme rounded-lg grid md:h-full">
          <span className="text-white font-bold text-2xl self-end">
            {t.aboutUs.phraseGreenBox} 
          </span>
        </div>
      </main>
    </>
  );
}
