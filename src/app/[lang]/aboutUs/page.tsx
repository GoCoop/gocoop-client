import type { Metadata } from "next";
import { getDictionary, type Locales } from "../../../dictionaries";
import GithubIcon from "@/icons/GithubIcon";
import Link from "next/link";

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
    description: t.aboutUs.metadata.description
  }
}

export default async function AboutUsPage({ params }: { params: { lang: Locales }}) {

  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <main className="p-6 grid gap-5 lg:justify-center">
        <div className="mt-[5rem] grid gap-5 md:place-self-start lg:w-[33rem]">
          <div className="grid gap-4">
            <h1 className="text-xl font-medium">{t.aboutUs.link}</h1>
            <p>
              {t.aboutUs.sectionOne} 
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-medium">{t.aboutUs.sectionTwoTitle}</h2>
            <p>{t.aboutUs.sectionTwo}</p>
          </div>
          <div className="grid gap-4">
            <h3>
              <b>{t.aboutUs.linksTitle}</b>
            </h3>
            <nav>
              <ul>
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
              </ul> 
            </nav>
          </div>
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
