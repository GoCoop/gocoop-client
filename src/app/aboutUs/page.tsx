'use client'

import Header from "../components/core/Header";

export default function AboutUsPage() {
    return (
        <>
            <Header />
            <main className="p-6 grid gap-5 md:grid-cols-[1fr_1fr] md:h-[calc(100vh-75px)] xl:grid-cols-[30rem_30rem] xl:justify-center xl:gap-20">
                <div className="grid gap-5 md:place-self-start">
                    <div className="grid gap-4">
                        <h1 className="text-xl font-medium">Sobre Nós</h1>
                        <p>
                            Nosso site foi criado com o objetivo de destacar a força do modelo cooperativo. Aqui, você encontrará cooperativas de todo o Brasil, organizadas por seus respectivos ramos, mostrando detalhes sobre esses empreendimentos sustentáveis.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <h2 className="text-lg font-medium">O que são cooperativas?</h2>
                        <p>
                            Em um mundo onde a colaboração faz a diferença, as cooperativas surgem como um exemplo de união e prosperidade coletiva. Diferente de empresas tradicionais, as cooperativas são organizações formadas e geridas por pessoas com um propósito comum, onde todos os membros têm voz e dividem os benefícios.
                        </p>
                    </div>
                </div>
                <div className="p-6 h-60 bg-[#5DC04F] rounded-lg grid md:h-full">
                    <span className="text-white font-bold text-2xl self-end">
                        Cooperando para um <br /> futuro melhor.
                    </span>
                </div>
            </main>
        </>
    )
}