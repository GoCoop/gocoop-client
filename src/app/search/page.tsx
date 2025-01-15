'use client'

import Header from "../../components/core/Header";
import ResultBox from "../../components/core/ResultBox";
import InputField from "../../components/material/InputField/InputField";

import SearchIcon from "../../icons/SearchIcon";

export default function SearchPage() {

    const data = [
        {
            id: 1,
            name: 'Agrária',
            category: 'industry',
            desc: 'Cooperativa responsável pela produção de malte.',
            imageUrl: '/agraria-logo.jpg'
        },
        {
            id: 2,
            name: 'Coopfam',
            category: 'coffee',
            desc: 'Cooperativa de cafeicultores.',
            imageUrl: '/coopfam-logo.jpeg'
        },
        {
            id: 3,
            name: 'Sicredi',
            category: 'banking',
            desc: 'Cooperativa de crédito.',
            imageUrl: '/sicredi-logo.png'
        },
        {
            id: 4,
            name: 'Aurora Alimentos',
            category: 'food',
            desc: 'Cooperativa de comercialização de alimentos.',
            imageUrl: '/aurora-alimentos-logo.jpg'
        }
    ]

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
                    {data.map(d => (
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