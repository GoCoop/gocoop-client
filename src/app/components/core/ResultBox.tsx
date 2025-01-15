import Image from "next/image";

export default function ResultBox() {
    return (
        <div className="p-4 border-x border-y rounded-lg grid grid-cols-[max-content_1fr] gap-x-4">
            <Image
                className="row-start-1 row-end-3 rounded-full"
                src="/agraria-logo.jpg"
                alt="Logo da cooperativa"
                width={50}
                height={50}
            />
            <h1 className="text-lg">Agrária</h1>
            <p className="text-sm">Cooperativa responsável pela produção de malte.</p>
        </div>

    )
}