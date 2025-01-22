"use client";

import { useRouter } from "next/navigation";

export default function RouterBack() {
  const router = useRouter();

  return (
    <>
      <button
        className="w-fit flex items-center gap-4"
        onClick={() => router.back()}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="p-2 bg-slate-100 rounded-full hover:bg-slate-200"
          color="#000000"
        >
          <path
            d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Voltar
      </button>
    </>
  );
}
