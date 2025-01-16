'use client'

import { useCallback, useEffect, useState } from "react";

import Header from "../../components/core/Header";
import ResultBox from "../../components/core/ResultBox";
import InputField from "../../components/material/InputField/InputField";

import SearchIcon from "../../icons/SearchIcon";

import coops from "@/services/coops";

type CoopData = {
    id: number;
    name: string;
    category: string;
    desc: string;
    imageUrl: string;
}

export default function SearchPage() {

    const [data, setData] = useState<CoopData[] | null>();
    const [search, setSearch] = useState('');

    const getSearchResult = useCallback(async (searchParam: string) => {
        const res = await coops.GET({ search: searchParam });
        console.log(res, 'res from server');
        if (res.success) {
            setData(res.data);
        }
    }, []);

    useEffect(() => {
        getSearchResult('');
    }, [getSearchResult]);

    return (
        <>
            <Header />
            <main className="p-6 grid gap-8 sm:justify-center">
                <InputField
                    id="main-search"
                    name="search"
                    autoFocus={true}
                    placeholder="Busque por uma cooperativa..."
                    icon={SearchIcon}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && getSearchResult(search)}
                />

                <div className="grid gap-5 sm:w-[33rem]">
                    {data && data.map(d => (
                        <ResultBox
                            key={d.id}
                            name={d.name}
                            desc={d.desc}
                            imageUrl={d.imageUrl}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}