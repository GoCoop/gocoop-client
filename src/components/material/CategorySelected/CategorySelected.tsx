"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  search: string;
  name: string;
  icon: string;
  altImage: string;
};

export default function CategorySelected({ search, name, icon, altImage }: Props) {
  return (
    <div className="pl-2 flex items-center gap-2 border-x border-y rounded-lg">
      <Image 
        width={24}
        height={24}
        src={icon}
        alt={altImage}
      />
      <span>{name}</span>
      <Link
        href={`?search=${search}`}
        className="rounded-lg bg-slate-100 hover:bg-red-200 transition"
      >
        <div className="p-2 m-1 cursor-pointer rounded-lg text-sm ">X</div>
      </Link>
    </div>
  );
}
