import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import RouterBack from "@/components/core/RouterBack";

import coops from "@/services/coops";
import { getDictionary, type Locales } from "@/dictionaries";

import Icon from "@/icons/Icon/Icon";
import LocationIcon from "@/icons/LocationIcon";
import LinkIcon from "@/icons/LinkIcon";
import ArmIcon from "@/icons/ArmIcon";

type Props = {
  params: Promise<{ slug: string, lang: Locales }>;
};

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const res = await coops.details.GET({ name: slug });

  if (!res.success) {
    const lang = (await params).lang;
    const t = await getDictionary(lang);
    throw new Error(t.error.detailsPage);
  }

  return {
    title: `${res.data ? res.data.name : "N/I"} | GoCoop`,
    description: res.data ? res.data.short_desc : "N/I",
  };
}

export default async function DetailsPage({ params }: Props) {
  const { slug, lang } = await params;
  const t = await getDictionary(lang);
  const details = await coops.details.GET({ name: slug });

  return (
    <>
      <main className="p-6 pb-10 grid gap-4 sm:justify-center">
        <RouterBack className="mt-[5rem]" />

        {details && details.data && (
          <>
            <div className="grid grid-cols-[max-content_1fr] gap-x-4">
              <Image
                className="row-start-1 row-end-3 rounded-full"
                src={details.data.image_url}
                alt={t.details.image.alt}
                width={70}
                height={70}
              />
              <h1 className="text-lg self-center">{details.data.name}</h1>
              <p className="text-sm">{details.data.short_desc}</p>
            </div>

            <div className="flex items-center gap-2">
              {details.data.categories &&
                details.data.categories.map((c) => (
                  <div key={c.id} className="w-fit p-3 border-y border-x rounded-lg flex items-center gap-2">
                    <Icon icon={c.icon} />
                    <span>{c.name}</span>
                  </div>
                ))}
            </div>

            <section className="p-3 border-y border-x rounded-lg sm:w-[33rem] whitespace-pre-line">
              {details.data.description.replaceAll("\\n", "\n")}
            </section>
            <div className="p-3 border-y border-x rounded-lg flex items-center gap-2 capitalize">
              <LocationIcon />
              {details.data.country}
            </div>
            <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
              <LinkIcon />
              {details.data.website_url ? (
                <Link
                  href={details.data.website_url}
                  target="_blank"
                  className="underline text-[#0000EE]"
                >
                  {details.data.website_url}
                </Link>
              ) : (
                <span>N/I</span>
              )}
            </div>
            <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
              <ArmIcon /> 
              {details.data.workers} {t.details.workers} 
            </div>
          </>
        )}
      </main>
    </>
  );
}
