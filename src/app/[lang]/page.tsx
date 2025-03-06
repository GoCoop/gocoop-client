import Link from "next/link";
import type { Metadata } from "next";

import InputField from "../../components/material/InputField/InputField";
import Category from "../../components/material/Category/Category";
import Modal from "../../components/material/Modal/Modal";

import SearchIcon from "../../icons/SearchIcon";
import LogoIcon from "@/icons/Logo";

import categories from "@/services/categories";
import { type CategoryT } from "@/services/categories/GET";

import { getDictionary, type Locales } from "@/dictionaries";

type Props = {
  params: Promise<{ lang: Locales }>
}

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  return {
    title: "Home | GoCoop",
    description: t.home.metadata.description,
  }
}

const getCategories = async (): Promise<CategoryT[] | null> => {
  const res = await categories.GET();
  if (res.success) {
    return res.data;
  }

  return null;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const categories = await getCategories();

  return (
    <>
      <main className="p-6 h-dvh grid grid-rows-[auto_max-content_max-content_max-content_1fr] gap-4 sm:h-auto sm:justify-center sm:pt-20 landscape:h-auto">
        <div className="mt-16"></div>

        <LogoIcon width="50" height="50" className="place-self-center" />

        <h1 className="text-xl sm:text-center">
          {t.home.title}
        </h1>

        <InputField
          id="main-search"
          name="search"
          placeholder={t.home.inputPlaceholder}
          autoFocus={true}
          icon={SearchIcon}
          className="sm:w-[35rem]"
          redirectsTo="/search"
        />

        <div className="grid grid-cols-2 gap-4 place-content-end sm:place-content-start sm:grid-cols-3">
          {
            categories &&
              categories.slice(0, 3).map((cat, i) => (
                <Link
                  key={cat.id}
                  href={{
                    pathname: "/search",
                    query: { category: cat.label },
                  }}
                  className={i == 2 ? 'hidden sm:flex' : ''}
                >
                  <Category 
                    name={cat.name} 
                    icon={cat.icon} 
                    altImage={t.categories.alt}
                  />
                </Link>
              ))
          }
          
          <Modal
            button={{
              name: t.home.btnSeeMore,
              className: "w-full col-start-1 col-end-3 sm:col-end-4",
            }}
          >
            <div className="grid gap-6">
              <h2 className="text-xl">{t.home.selectCategory}</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {categories &&
                  categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={{
                        pathname: "/search",
                        query: { category: cat.label },
                      }}
                    >
                      <Category 
                        name={cat.name} 
                        icon={cat.icon} 
                        altImage={t.categories.alt}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </Modal>
        </div>
      </main>
    </>
  );
}
