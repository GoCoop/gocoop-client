'use client'

import { useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Header from "../../components/core/Header";
import ResultBox from "../../components/core/ResultBox";
import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";
import InputField from "../../components/material/InputField/InputField";

import SearchIcon from "../../icons/SearchIcon";

import coops from "@/services/coops";
import Link from "next/link";

type CoopData = {
    id: number;
    name: string;
    category: string;
    desc: string;
    imageUrl: string;
}

export default function SearchPage() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [data, setData] = useState<CoopData[] | null>();
    const [searchInput, setSearchInput] = useState<string>(searchParams.get('search') || '');

    const updateUrlParam = (value: string): void => {
        const params = new URLSearchParams(window.location.search);
        params.set('search', value);

        const newUrl = `${window.location.pathname}?${params.toString()}`; 
        router.replace(newUrl);
    }

    const getSearchResult = useCallback(async (searchParam: string) => {
        setData(null);
        
        updateUrlParam(searchParam);
        
        const res = await coops.GET({ search: searchParam });
        if (res.success) {
            setData(res.data);
        }
    }, [searchInput]);

    useEffect(() => {
        getSearchResult(searchInput);
    }, []);

    return (
        <>
            <Header />
            <main className="p-6 grid gap-8 sm:justify-center">
                <InputField
                    id="main-search"
                    name="search"
                    defaultValue={searchInput}
                    autoFocus={true}
                    placeholder="Busque por uma cooperativa..."
                    icon={SearchIcon}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && getSearchResult(searchInput)}
                />

                <div className="grid gap-5 sm:w-[33rem]">
                    {data ? data.map(d => (
                        <Link 
                            href={{
                                pathname: "/details",
                                query: { id: d.id }
                            }} 
                            key={d.id}
                        >
                            <ResultBox
                                name={d.name}
                                desc={d.desc}
                                imageUrl={d.imageUrl}
                            />
                        </Link>
                    )) 
                        : 
                            <>
                                <ResultBoxLoader />
                                <ResultBoxLoader />
                                <ResultBoxLoader />
                            </> 
                    }
                </div>
            </main>
        </>
    )
}