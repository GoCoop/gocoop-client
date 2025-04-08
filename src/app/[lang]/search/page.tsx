import { Suspense } from "react";
import type { Metadata } from "next";

import InputField from "../../../components/material/InputField/InputField";

import SearchResults from "./suspense/searchResults/SearchResults";
import { Loader as SearchLoader } from "./suspense/searchResults/Loader";
import { Loader as CategoriesLoader } from "./suspense/categories/Loader";
import CategoriesModal from "./suspense/categories/CategoriesModal";

import SearchIcon from "../../../icons/SearchIcon";

import type { CategoriesT } from "@/api/models/categories";

import { getDictionary, type Locales } from "@/dictionaries";

type Props = {
  searchParams: Promise<{ 
    search: string | undefined, 
    category: CategoriesT | undefined 
  }>,
  params: Promise<{ search: string, lang: Locales }>
}

export async function generateMetadata({
  searchParams,
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;
  const { search } = await searchParams;
  const t = await getDictionary(lang);

  return {
    title: `${search ? search + " | " : ""}${t.search.metadata.title}`,
    description: t.search.metadata.description,
    openGraph: {
      title: t.search.metadata.openGraph.title,
      description: t.search.metadata.openGraph.description,
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

export default async function SearchPage({
  searchParams,
  params
}: Props) {
  const { search, category } = await searchParams;
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <main className="p-6 grid gap-8 sm:justify-center">
        <InputField
          id="main-search"
          name="search"
          className="mt-[5rem]"
          defaultValue={search ?? ""}
          placeholder={t.search.inputPlaceholder}
          icon={SearchIcon}
          redirectsTo="/search"
          categoryParam={category ?? ""}
        />

        <Suspense key={`${search}-${category}-1`} fallback={<CategoriesLoader />}>
          <CategoriesModal search={search} category={category} t={t} />
        </Suspense> 

        <Suspense key={`${search}-${category}-2`} fallback={<SearchLoader />}>
          <SearchResults search={search ?? ''} category={category ?? ''} t={t} />     
        </Suspense> 
      </main>
    </>
  );
}
