import Image from "next/image";
import Link from "next/link";

import LocationIcon from "@/icons/LocationIcon";
import LinkIcon from "@/icons/LinkIcon";
import ArmIcon from "@/icons/ArmIcon";

import type { CoopDetailsT } from "@/services/coops/details/GET";

import { getDictionary } from "@/dictionaries";

type Props = {
  data: CoopDetailsT;
  t: Pick<Awaited<ReturnType<typeof getDictionary>>, "details" | "categories">;
}

export default async function Details({ data, t }: Props) {
  return (
    data && 
      <>
        <div className="grid grid-cols-[max-content_1fr] gap-x-4">
          <Image
            className="row-start-1 row-end-3 rounded-full place-self-center"
            src={data.image_url}
            alt={t.details.image.alt}
            width={70}
            height={70}
          />
          <h1 className="text-lg self-center">{data.name}</h1>
          <p className="text-sm">{data.short_desc}</p>
        </div>

        <div className="flex items-center gap-2">
          {data.categories &&
            data.categories.map((c) => (
              <div key={c.id} className="w-fit p-3 border-y border-x rounded-lg flex items-center gap-2">
                <Image 
                  width={24}
                  height={24}
                  src={c.icon}
                  alt={t.categories.alt}
                />
                <span>{c.name}</span>
              </div>
            ))}
        </div>

        <section className="p-3 border-y border-x rounded-lg sm:w-[33rem] whitespace-pre-line">
          {data.description.replaceAll("\\n", "\n")}
        </section>
        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2 capitalize">
          <LocationIcon />
          {data.country}
        </div>
        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
          <LinkIcon />
          {data.website_url ? (
            <Link
              href={data.website_url}
              target="_blank"
              className="underline text-[#0000EE]"
              rel="noopener"
            >
              {data.website_url}
            </Link>
          ) : (
            <span>N/I</span>
          )}
        </div>
        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
          <ArmIcon /> 
          {data.workers} {t.details.workers} 
        </div>
      </>
  )
}