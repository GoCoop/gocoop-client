import Link from "next/link";
import { type Metadata } from "next";

import Category from "@/components/material/Category/Category";
import CategoryFilter from "@/components/material/CategorySelected/CategorySelected";
import Header from "../../components/core/Header";
import ResultBox from "../../components/core/ResultBox";
import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";
import InputField from "../../components/material/InputField/InputField";
import Modal from "@/components/material/Modal/Modal";

import SearchIcon from "../../icons/SearchIcon";
import { type CategoriesT } from "@/icons/Icon/Icon";

import coops from "@/services/coops";
import categories from "@/services/categories";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { search: string };
}): Promise<Metadata> {
  const { search } = await searchParams;

  return {
    title: `${search ? search + " |" : ""} pesquisa GoCoop`,
    description:
      "Página para realizar busca de cooperativas com base no input e nas categorias.",
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    category: CategoriesT | undefined;
  };
}) {
  const { search, category } = await searchParams;

  const coopsData = await coops.GET({
    search: search ?? "",
    category: category ?? "",
  });

  const categoriesData = await categories.GET();

  return (
    <>
      <Header />
      <main className="p-6 grid gap-8 sm:justify-center">
        <InputField
          id="main-search"
          name="search"
          className="mt-[5rem]"
          defaultValue={search ?? ""}
          autoFocus={true}
          placeholder="Busque por uma cooperativa..."
          icon={SearchIcon}
          redirectsTo="/search"
          categoryParam={category ?? ""}
        />

        {category ? (
          <CategoryFilter search={search ?? ""} name={category} />
        ) : (
          <Modal button={{ name: "Selecionar categoria", className: "w-fit" }}>
            <div className="grid gap-6">
              <h2 className="text-xl">Selecione uma categoria</h2>
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
            coopsData.data.map((d) => (
              <Link href={`/details/${d.name}`} key={d.id}>
                <ResultBox name={d.name} desc={d.desc} imageUrl={d.imageURL} />
              </Link>
            ))
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
