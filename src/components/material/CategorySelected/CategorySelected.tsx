"use client";

import Link from "next/link";
import Icon, { CategoriesT } from "@/icons/Icon/Icon";

type Props = {
  search: string;
  name: CategoriesT;
};

const translateCategory = (category: CategoriesT) => {
  const categories = {
    logo: "Logo",
    industry: "Indústria",
    banking: "Crédito",
    coffee: "Café",
    food: "Alimentos",
    beer: "Cerveja",
    services: "Serviços",
  } as const;

  return categories[category] || "N/I";
};

export default function CategorySelected({ search, name }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span>Filtrando por: </span>
      <div className="pl-2 flex items-center gap-2 border-x border-y rounded-lg">
        <Icon icon={name} />
        <span>{translateCategory(name)}</span>
        <Link
          href={`?search=${search}`}
          className="rounded-lg hover:bg-red-200"
        >
          <div className="p-2 m-1 cursor-pointer rounded-lg text-sm ">X</div>
        </Link>
      </div>
    </div>
  );
}
