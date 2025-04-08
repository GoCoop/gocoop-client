"use client";

import { useContext } from "react";
import Link from "next/link";

import { PageConfigContext } from "@/context/PageConfigContext";

import LeftArrowIcon from "@/icons/LeftArrowIcon";

type Props = {
  className?: string;
  ariaLabel: string;
};

export default function RouterBack({ className, ariaLabel }: Props) {
  const { prevPath } = useContext(PageConfigContext);

  return (
    <>
      <Link
        className={`w-fit ${className}`}
        href={prevPath === '' ? '/search' : prevPath}
      >
        <button
          className={`flex items-center gap-4`}
          aria-label={ariaLabel}
        >
          <LeftArrowIcon
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition"
            width={40}
            height={40}
          />
        </button>
      </Link> 
    </>
  );
}
