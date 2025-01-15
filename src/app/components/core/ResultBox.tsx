import Image from "next/image";

type Props = {
    name: string;
    desc: string;
    imageUrl: string;
}

export default function ResultBox(props: Props) {
    return (
        <div className="p-4 border-x border-y rounded-lg grid grid-cols-[max-content_1fr] gap-x-4">
            <Image
                className="row-start-1 row-end-3 rounded-full"
                src={props.imageUrl}
                alt="Logo da cooperativa"
                width={50}
                height={50}
            />
            <h1 className="text-lg">{props.name}</h1>
            <p className="text-sm">{props.desc}</p>
        </div>

    )
}