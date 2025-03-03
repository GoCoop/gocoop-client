import Image from "next/image";

type Props = {
  name: string;
  desc: string;
  imageUrl: string;
  imageAlt: string;
};

export default function ResultBox(props: Props) {
  return (
    <div className="p-6 border-x border-y rounded-lg grid grid-cols-[max-content_1fr] gap-x-4 cursor-pointer hover:bg-slate-100">
      <Image
        className="row-start-1 row-end-3 rounded-full"
        src={props.imageUrl}
        alt={props.imageAlt}
        width={50}
        height={50}
      />
      <h1 className="text-lg">{props.name}</h1>
      <p className="text-sm">{props.desc}</p>
    </div>
  );
}
