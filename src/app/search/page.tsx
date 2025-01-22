import Link from "next/link";
import { type Metadata } from "next";

import Header from "../../components/core/Header";
import ResultBox from "../../components/core/ResultBox";
import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";
import InputField from "../../components/material/InputField/InputField";

import SearchIcon from "../../icons/SearchIcon";

import coops from "@/services/coops";

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
  searchParams: { search: string | undefined; category: string | undefined };
}) {
  const { search, category } = await searchParams;

  const coopsData = await coops.GET({
    search: search ?? "",
    category: category ?? "",
  });

  console.log(search, "search");
  console.log(category, "category Param");

  return (
    <>
      <Header />
      <main className="p-6 grid gap-8 sm:justify-center">
        <InputField
          id="main-search"
          name="search"
          defaultValue={search ?? ""}
          autoFocus={true}
          placeholder="Busque por uma cooperativa..."
          icon={SearchIcon}
          redirectsTo="/search"
          categoryParam={category ?? ""}
        />

        <div className="grid gap-5 sm:w-[33rem]">
          {coopsData && coopsData.data ? (
            coopsData.data.map((d) => (
              <Link href={`/details/${d.name}`} key={d.id}>
                <ResultBox name={d.name} desc={d.desc} imageUrl={d.imageUrl} />
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
