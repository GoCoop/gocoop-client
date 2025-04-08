'use client'

import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react"

type PageConfigT = {
  prevPath: string
}

export const PageConfigContext = createContext({} as PageConfigT);

export default function PageConfigProvider({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [prevPath, setPrevPath] = useState<string>('');

  useEffect(() => {
    const prevPageToDetails = sessionStorage.getItem('prevPageToDetails');
    if (prevPageToDetails) {
      setPrevPath(prevPageToDetails);
    };

    if (pathname.includes('search')) {
      sessionStorage.setItem('prevPageToDetails', `${pathname}?${searchParams}`);
    };
  }, [pathname, searchParams]);

  return (
    <PageConfigContext.Provider value={{ prevPath }}>
      {children}
    </PageConfigContext.Provider>
  )
}