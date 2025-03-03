import type { Metadata } from "next";
import { Suspense } from "react";

import RouterBack from "@/components/core/RouterBack";

import coops from "@/services/coops";
import { getDictionary, type Locales } from "@/dictionaries";

import Details from "./Details";
import DetailsPageLoader from "@/components/core/Skeletons/DetailsPage/DetailsPageLoader";
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
    description: t.details.metadata.initialDesc
  };
}

async function DetailsWrapper({ 
  slug, 
  t 
}: { 
  slug: string, 
  t: Awaited<ReturnType<typeof getDictionary>> 
}) {
  const res = await coops.details.GET({ name: slug });

  if (!res.success) {
    throw new Error(t.error.detailsPage);
  };

  return (
    <>
      <MetadataUpdater
        title={`${res.data ? res.data.name : "N/I"} | GoCoop`}
        description={res.data ? res.data.short_desc : "N/I"}
      />

      <Details slug={slug} t={t} />
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

        <Suspense fallback={<DetailsPageLoader />}>
          <DetailsWrapper slug={slug} t={t}/>
        </Suspense>
      </main>
    </>
  );
}
