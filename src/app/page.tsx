import { type Metadata } from "next";
import Link from "next/link";

import Header from "../components/core/Header";
import InputField from "../components/material/InputField/InputField";
import Category from "../components/material/Category/Category";
import Modal from "../components/material/Modal/Modal";

import SearchIcon from "../icons/SearchIcon";
import LogoIcon from "@/icons/Logo";

import categories from "@/services/categories";
import { type CategoryT } from "@/services/categories/GET";

export const metadata: Metadata = {
  title: "Home | GoCoop",
  description: "Página Home para pesquisa de cooperativas no Brasil.",
};

const getCategories = async (): Promise<CategoryT[] | null> => {
  const res = await categories.GET();
  if (res.success) {
    return res.data;
  }

  return null;
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      <Header />

      <main className="p-6 h-[calc(100vh-75px)] grid grid-rows-[max-content_max-content_max-content_1fr] gap-4 sm:h-auto sm:justify-center sm:pt-20">
        <LogoIcon width="50" height="50" className="place-self-center" />

        <h1 className="text-xl">
          Descubra cooperativas de diferentes ramos em todo o Brasil.
        </h1>
        <InputField
          id="main-search"
          name="search"
          placeholder="Busque por uma cooperativa..."
          autoFocus={true}
          icon={SearchIcon}
          redirectsTo="/search"
        />

        <div className="grid grid-cols-2 gap-4 place-content-end sm:place-content-start sm:grid-cols-3">
          <Link
            href={{
              pathname: "/search",
              query: { category: "food" },
            }}
          >
            <Category name="Alimentos" icon="food" />
          </Link>

          <Link
            href={{
              pathname: "/search",
              query: { category: "services" },
            }}
          >
            <Category name="Serviços" icon="services" />
          </Link>

          <Link
            href={{
              pathname: "/search",
              query: { category: "industry" },
            }}
            className="hidden sm:flex"
          >
            <Category name="Indústria" icon="industry" />
          </Link>

          <Modal
            button={{
              name: "Ver mais",
              className: "w-full col-start-1 col-end-3 sm:col-end-4",
            }}
          >
            <div className="grid gap-6">
              <h2 className="text-xl">Selecione uma categoria</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {categories &&
                  categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={{
                        pathname: "/search",
                        query: { category: cat.icon },
                      }}
                    >
                      <Category name={cat.name} icon={cat.icon} />
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
