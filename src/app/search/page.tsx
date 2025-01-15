'use client'

import Header from "../components/core/Header";
import ResultBox from "../components/core/ResultBox";
import InputField from "../components/material/InputField/InputField";

import SearchIcon from "../icons/SearchIcon";

export default function SearchPage() {
    return (
        <>
            <Header />
            <main className="p-6 grid gap-8">
                <InputField
                    id="main-search"
                    name="search"
                    autoFocus={true}
                    placeholder="Busque por uma cooperativa..."
                    icon={SearchIcon}
                />

                <div className="grid gap-5">
                    <ResultBox />
                    <ResultBox />
                    <ResultBox />
                    <ResultBox />
                    <ResultBox />
                </div>
            </main>
        </>
    )
}