import { JSX } from "react";
import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  className?: string;
  altImage: string;
};

export default function Category({
  name,
  icon,
  className,
  altImage
}: Props): JSX.Element {
  return (
    <button
      className={`w-full p-4 border-x border-y rounded-2xl flex flex-col gap-6 items-start hover:bg-slate-100 ${className}`}
    >
      <Image 
        width={24}
        height={24}
        src={icon}
        alt={altImage}
      />
      <span>{name}</span>
    </button>
  );
}
