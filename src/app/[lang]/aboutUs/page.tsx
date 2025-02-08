import Header from "@/components/core/Header";
import { Metadata } from "next";
import { getDictionary, type Locales } from "../dictionaries";

export const metadata: Metadata = {
  title: "Sobre Nós | GoCoop",
  description:
    "A página descreve o que é o site GoCoop e o seu objetivo em divulgar cooperativas do Brasil.",
};

export default async function AboutUsPage({ params }: { params: { lang: Locales }}) {

  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <Header />
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
        </div>
        <div className="p-6 h-60 bg-[#5DC04F] rounded-lg grid md:h-full">
          <span className="text-white font-bold text-2xl self-end">
            Cooperando para um futuro melhor.
          </span>
        </div>
      </main>
    </>
  );
}
