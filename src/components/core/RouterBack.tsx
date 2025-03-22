"use client";

import LeftArrowIcon from "@/icons/LeftArrowIcon";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  ariaLabel: string;
};

export default function RouterBack({ className, ariaLabel }: Props) {
  const router = useRouter();

  return (
    <>
      <button
        className={`w-fit flex items-center gap-4 ${className}`}
        onClick={() => router.back()}
        aria-label={ariaLabel}
      >
        <LeftArrowIcon
          className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition"
          width={40}
          height={40}
        />
      </button> 
    </>
  );
}
