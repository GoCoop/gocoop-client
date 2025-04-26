import type { Metadata } from "next";
import { Suspense } from "react";

import RouterBack from "@/components/core/RouterBack";

import { coop } from "@/api/controllers/coop";
import { getDictionary, type Locales } from "@/dictionaries";

import Details from "./suspense/Details";
import Loader from "./suspense/Loader";

type Props = {
  params: Promise<{ slug: string; lang: Locales }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const res = await coop.GET.details({ name: slug });
  const t = await getDictionary(lang);

  if (!res.success || !res.data) throw new Error(t.error.detailsPage);

  return {
    title: `${res.data.name} | GoCoop`,
    description: res.data.short_desc,
    openGraph: {
      title: `${res.data.name} | GoCoop`,
      description: res.data.short_desc,
      images: [
        {
          url: res.data.image_url,
          width: 1200,
          height: 630,
          alt: "coop logo",
        },
      ],
      type: "website",
    },
  };
}

async function DetailsWrapper({
  slug,
  t,
}: {
  slug: string;
  t: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const res = await coop.GET.details({ name: slug });

  if (!res.success || !res.data) throw new Error(t.error.detailsPage);

  return (
    <>
      <Details data={res.data} t={t} />
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
