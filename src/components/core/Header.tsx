"use client";

import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoIcon from "@/icons/Logo";
import { getDictionary } from "@/dictionaries";

type Props = {
  t: Awaited<ReturnType<typeof getDictionary>>["header"]
}

export default function Header({ t }: Props): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => { setIsMenuOpen(false) }, [pathname]);

  return (
    <header
      className={`w-full p-6 fixed grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] items-center justify-between border-b bg-white ${
        isMenuOpen && "h-full"
      } z-20`}
    >
      <Link
        href={"/"}
        aria-label="Link para a página inicial Home usando logo do projeto."
      >
        <LogoIcon />
      </Link>

      {isMenuOpen ? (
        <svg
          width="25px"
          height="25px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="sm:hidden place-self-end"
          onClick={() => toggleMenuBar()}
        >
          <path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ) : (
        <svg
          width="25px"
          height="25px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="sm:hidden place-self-end"
          onClick={() => toggleMenuBar()}
        >
          <path
            d="M3 5H21"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 12H21"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}

      <nav className="hidden sm:block place-self-end">
        <ul className="flex gap-6">
          <Link href="/" aria-label="Link para a página inicial do site.">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/aboutUs" aria-label="Link para a página Sobre Nós.">
            <li className="cursor-pointer">{t.aboutUs}</li>
          </Link>
        </ul>
      </nav>

      {isMenuOpen && (
        <nav className="sm:hidden absolute z-10 bg-white h-[calc(100vh-75px)] w-screen right-0 bottom-0 left-0 flex justify-center items-center">
          <ul className="flex flex-col items-center gap-6">
            <Link href="/" aria-label="Link para a página inicial do site.">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/aboutUs" aria-label="Link para a página Sobre Nós.">
              <li className="cursor-pointer">{t.aboutUs}</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
