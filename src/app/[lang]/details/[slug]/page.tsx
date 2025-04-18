import type { Metadata } from "next";
import { Suspense } from "react";

import RouterBack from "@/components/core/RouterBack";

import { coop } from "@/api/controllers/coop";
import { getDictionary, type Locales } from "@/dictionaries";

import Details from "./suspense/Details";
import Loader from "./suspense/Loader";

import MetadataUpdater from "@/utils/MetadataUpdater";

type Props = {
  params: Promise<{ slug: string, lang: Locales }>;
};

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const { lang, slug } = (await params);
  const t = await getDictionary(lang);

  return {
    title: `${slug} | GoCoop`,
    description: t.details.metadata.initialDesc,
    openGraph: {
      title: `${slug} | GoCoop`,
      description: t.details.metadata.initialDesc,
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

async function DetailsWrapper({ 
  slug, 
  t 
}: { 
  slug: string, 
  t: Awaited<ReturnType<typeof getDictionary>> 
}) {
  const res = await coop.GET.details({ name: slug });

  if (!res.success) {
    throw new Error(t.error.detailsPage);
  };

  return (
    <>
      <MetadataUpdater
        title={`${res.data ? res.data.name : "N/I"} | GoCoop`}
        description={res.data ? res.data.short_desc : "N/I"}
      />

      <Details data={res.data!} t={t} />
    </>
  );
}

export default async function DetailsPage({ params }: Props) {
  const { slug, lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <main className="p-6 pb-10 grid gap-4 sm:justify-center">
        <RouterBack 
          className="mt-[5rem]" 
          ariaLabel={t.details.routerBack.ariaLabel} 
        />

        <Suspense fallback={<Loader />}>
          <DetailsWrapper slug={slug} t={t} />
        </Suspense>
      </main>
    </>
  );
}
