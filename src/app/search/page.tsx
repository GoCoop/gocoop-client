'use client'

import Header from "../components/core/Header";
import ResultBox from "../components/core/ResultBox";
import InputField from "../components/material/InputField/InputField";

import SearchIcon from "../icons/SearchIcon";

export default function SearchPage() {

    const data = [
        {
            id: 1,
            name: 'Agrária',
            desc: 'Cooperativa responsável pela produção de malte.',
            imageUrl: '/agraria-logo.jpg'
        },
        {
            id: 2,
            name: 'Agrária',
            desc: 'Cooperativa responsável pela produção de malte.',
            imageUrl: '/agraria-logo.jpg'
        },
        {
            id: 3,
            name: 'Agrária',
            desc: 'Cooperativa responsável pela produção de malte.',
            imageUrl: '/agraria-logo.jpg'
        },
        {
            id: 4,
            name: 'Agrária',
            desc: 'Cooperativa responsável pela produção de malte.',
            imageUrl: '/agraria-logo.jpg'
        },
        {
            id: 5,
            name: 'Agrária',
            desc: 'Cooperativa responsável pela produção de malte.',
            imageUrl: '/agraria-logo.jpg'
        }
    ]

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