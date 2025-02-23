import type { Metadata } from "next";
import { getDictionary, type Locales } from "@/dictionaries";
import NotFound from "../not-found";

type Props = {
  params: Promise<{lang: Locales}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  return {
    title: `${t.notFoundPage.metadata.title} | GoCoop`,
    description: `${t.notFoundPage.metadata.description}`,
  };
}

export default async function NotFoundPage({ params }: Props) {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  return (
    <NotFound t={t.notFoundPage} />
  )
}