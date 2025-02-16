"use client";

import Link from "next/link";
import Icon, { CategoriesT } from "@/icons/Icon/Icon";

type Props = {
  search: string;
  name: string;
  icon: CategoriesT;
};

export default function CategorySelected({ search, name, icon }: Props) {
  return (
    <div className="pl-2 flex items-center gap-2 border-x border-y rounded-lg">
      <Icon icon={icon} />
      <span>{name}</span>
      <Link
        href={`?search=${search}`}
        className="rounded-lg bg-slate-100 hover:bg-red-200"
      >
        <div className="p-2 m-1 cursor-pointer rounded-lg text-sm ">X</div>
      </Link>
    </div>
  );
}
