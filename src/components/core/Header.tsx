"use client";

import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getDictionary } from "@/dictionaries";

import LogoIcon from "@/icons/Logo";
import HamburguerMenuIcon from "@/icons/HamburguerMenuIcon";
import CloseIcon from "@/icons/CloseIcon";

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

  useEffect(() => {
    const cb = (e: Event) => {
      if ((e.target as ScreenOrientation).type.includes("landscape")) {
        setIsMenuOpen(false);
      };
    };

    screen.orientation.addEventListener("change", cb);

    return () => screen.orientation.removeEventListener("change", cb);
   }, []);

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
        <CloseIcon onClick={toggleMenuBar}/> 
      ) : (
        <HamburguerMenuIcon onClick={toggleMenuBar}/> 
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
        <nav className="sm:hidden absolute z-10 bg-white h-[calc(100dvh-75px)] w-screen right-0 bottom-0 left-0 flex justify-center items-center">
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
