import coops from "@/services/coops";
import Image from "next/image";
import Link from "next/link";

import Icon from "@/icons/Icon/Icon";
import LocationIcon from "@/icons/LocationIcon";
import LinkIcon from "@/icons/LinkIcon";
import ArmIcon from "@/icons/ArmIcon";

type Props = {
  slug: string;
  t: any;
}

export default async function Details({ slug, t }: Props) {
  const details = await coops.details.GET({ name: slug });

  return (
    details && details.data && 
      <>
        <div className="grid grid-cols-[max-content_1fr] gap-x-4">
          <Image
            className="row-start-1 row-end-3 rounded-full"
            src={details.data.image_url}
            alt={t.details.image.alt}
            width={70}
            height={70}
          />
          <h1 className="text-lg self-center">{details.data.name}</h1>
          <p className="text-sm">{details.data.short_desc}</p>
        </div>

        <div className="flex items-center gap-2">
          {details.data.categories &&
            details.data.categories.map((c) => (
              <div key={c.id} className="w-fit p-3 border-y border-x rounded-lg flex items-center gap-2">
                <Icon icon={c.icon} />
                <span>{c.name}</span>
              </div>
            ))}
        </div>

        <section className="p-3 border-y border-x rounded-lg sm:w-[33rem] whitespace-pre-line">
          {details.data.description.replaceAll("\\n", "\n")}
        </section>
        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2 capitalize">
          <LocationIcon />
          {details.data.country}
        </div>
        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
          <LinkIcon />
          {details.data.website_url ? (
            <Link
              href={details.data.website_url}
              target="_blank"
              className="underline text-[#0000EE]"
            >
              {details.data.website_url}
            </Link>
          ) : (
            <span>N/I</span>
          )}
        </div>
        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
          <ArmIcon /> 
          {details.data.workers} {t.details.workers} 
        </div>
      </>
  )
}