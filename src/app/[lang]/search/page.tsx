import Link from "next/link";
import type { Metadata } from "next";

import Category from "@/components/material/Category/Category";
import CategorySelected from "@/components/material/CategorySelected/CategorySelected";
import ResultBox from "../../../components/core/ResultBox";
import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";
import InputField from "../../../components/material/InputField/InputField";
import Modal from "@/components/material/Modal/Modal";

import SearchIcon from "../../../icons/SearchIcon";
import SadFaceIcon from "@/icons/SadFaceIcon";
import type { CategoriesT } from "@/icons/Icon/Icon";
import type { CategoryT } from "@/services/categories/GET";

import coops from "@/services/coops";
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
  params,
}: Props): Promise<Metadata> {
  const { search, lang } = await params;
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

  const coopsData = await coops.GET({
    search: search ?? "",
    category: category ?? "",
  });

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

        <div className="grid gap-5 sm:w-[33rem]">
          {coopsData && coopsData.data ? (
            coopsData.data.length >= 1 ?
              coopsData.data.map((d) => (
                <Link href={`/details/${d.slug}`} key={d.id}>
                  <ResultBox
                    name={d.name}
                    desc={d.short_desc}
                    imageUrl={d.image_url}
                  />
                </Link>
              )
            ) : (
              <div className="grid justify-items-center gap-4 text-center">
                <SadFaceIcon />
                {t.search.notFound}
              </div>
            )
          ) : (
            <>
              <ResultBoxLoader />
              <ResultBoxLoader />
              <ResultBoxLoader />
            </>
          )}
        </div>
      </main>
    </>
  );
}
