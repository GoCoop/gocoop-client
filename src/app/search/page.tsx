'use client'

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Header from "../../components/core/Header";
import ResultBox from "../../components/core/ResultBox";
import InputField from "../../components/material/InputField/InputField";

import SearchIcon from "../../icons/SearchIcon";

import coops from "@/services/coops";
import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";

type CoopData = {
    id: number;
    name: string;
    category: string;
    desc: string;
    imageUrl: string;
}

export default function SearchPage() {

    const searchParams = useSearchParams();

    const [data, setData] = useState<CoopData[] | null>();
    const [searchInput, setSearchInput] = useState<string>('');

    const getSearchResult = useCallback(async (searchParam: string) => {
        setData(null);
        
        const res = await coops.GET({ search: searchParam });
        if (res.success) {
            setData(res.data);
        }
    }, [searchInput]);

    useEffect(() => {
        const search = searchParams.get('search');
        search && setSearchInput(search);
        getSearchResult(search ?? '');
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
                        <ResultBox
                            key={d.id}
                            name={d.name}
                            desc={d.desc}
                            imageUrl={d.imageUrl}
                        />
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