"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Header from "../components/core/Header";
import InputField from "../components/material/InputField/InputField";
import Category from "../components/material/Category/Category";
import Modal from "../components/material/Modal/Modal";

import SearchIcon from "../icons/SearchIcon";
import LogoIcon from "@/icons/Logo";

import categories from "@/services/categories";
import { type CategoryT } from "@/services/categories/GET";

export default function Home() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [categoriesData, setCategoriesData] = useState<CategoryT[] | null>([]);

  const searchFor = (searchInput: string): void => {
    router.push(`/search?search=${searchInput}`);
  };

  const getCategories = async (): Promise<void> => {
    const res = await categories.GET();
    if (res.success) {
      setCategoriesData(res.data);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Header />

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="grid gap-6">
          <h2 className="text-xl">Selecione uma categoria</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {categoriesData &&
              categoriesData.map((cat) => (
                <Link
                  key={cat.id}
                  href={{
                    pathname: "/search",
                    query: { search: searchInput, category: cat.icon },
                  }}
                >
                  <Category name={cat.name} icon={cat.icon} />
                </Link>
              ))}
          </div>
        </div>
      </Modal>

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
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchFor(searchInput)}
        />

        <div className="grid grid-cols-2 gap-4 place-content-end sm:place-content-start sm:grid-cols-3">
          <Link
            href={{
              pathname: "/search",
              query: { search: searchInput, category: "food" },
            }}
          >
            <Category name="Alimentos" icon="food" />
          </Link>

          <Link
            href={{
              pathname: "/search",
              query: { search: searchInput, category: "services" },
            }}
          >
            <Category name="Serviços" icon="services" />
          </Link>

          <Link
            href={{
              pathname: "/search",
              query: { search: searchInput, category: "industry" },
            }}
            className="hidden sm:flex"
          >
            <Category name="Indústria" icon="industry" />
          </Link>

          <button
            className="w-full p-2 border-x border-y rounded-2xl col-start-1 col-end-3 sm:col-end-4 hover:bg-slate-100"
            onClick={() => openModal()}
          >
            Ver mais
          </button>
        </div>
      </main>
    </>
  );
}
