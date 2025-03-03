import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";

import SearchResults from "./SearchResults";
import SearchResultsLoader from "@/components/core/Skeletons/SearchResults/SearchResultsLoader";

import Category from "@/components/material/Category/Category";
import CategorySelected from "@/components/material/CategorySelected/CategorySelected";
import InputField from "../../../components/material/InputField/InputField";
import Modal from "@/components/material/Modal/Modal";

import SearchIcon from "../../../icons/SearchIcon";
import type { CategoriesT } from "@/icons/Icon/Icon";
import type { CategoryT } from "@/services/categories/GET";

import categories from "@/services/categories";

import { getDictionary, type Locales } from "@/dictionaries";

type Props = {
  searchParams: { 
    search: string | undefined, 
    category: CategoriesT | undefined 
  },
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
  };
}

function translateCategory(name: CategoriesT | undefined, data: CategoryT[] | null): CategoryT | undefined {
  if (name && data) 
    return data.find(d => d.icon === name)
  
  return undefined;
}

export default async function SearchPage({
  searchParams,
  params
}: Props) {
  const { search, category } = await searchParams;
  const { lang } = await params;
  const t = await getDictionary(lang);

  const categoriesData = await categories.GET();
  const cat = translateCategory(category, categoriesData.data);

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

        {cat ? (
          <div className="flex items-center gap-2">
            <span>{t.search.filteringBy}</span>
            <CategorySelected 
              search={search ?? ""} 
              name={cat.name} 
              icon={cat.icon}
            />
          </div>
        ) : (
          <Modal button={{ name: t.search.modalButton, className: "w-fit" }}>
            <div className="grid gap-6">
              <h2 className="text-xl">{t.search.modalTitle}</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {categoriesData &&
                  categoriesData.data &&
                  categoriesData.data.map((cat) => (
                    <Link
                      key={cat.id}
                      href={{
                        pathname: "/search",
                        query: { search: search, category: cat.icon },
                      }}
                    >
                      <Category name={cat.name} icon={cat.icon} />
                    </Link>
                  ))}
              </div>
            </div>
          </Modal>
        )}

        <Suspense key={`${search}-${category}`} fallback={<SearchResultsLoader />}>
          <SearchResults 
            search={search ?? ''} 
            category={category ?? ''} 
            t={t}
          />     
        </Suspense> 
      </main>
    </>
  );
}
