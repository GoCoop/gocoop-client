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

    const [data, setData] = useState<CoopData[]>([]);

    const getSearchResult = useCallback(async () => {
        const res = await coops.GET({ search: 'Agrária' });
        console.log(res);
        if (res.success) {
            setData(res.data);
        }
    }, []);

    useEffect(() => {
        getSearchResult();
    }, [getSearchResult]);

    return (
        <>
            <Header />
            <main className="p-6 grid gap-8 justify-center">
                <InputField
                    id="main-search"
                    name="search"
                    autoFocus={true}
                    placeholder="Busque por uma cooperativa..."
                    icon={SearchIcon}
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