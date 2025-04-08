import Link from "next/link";

import ResultBox from "@/components/core/ResultBox";

import SadFaceIcon from "@/icons/SadFaceIcon";

import { coops } from "@/api/controllers/coops";

import { getDictionary } from "@/dictionaries";

type Props = {
  search: string;
  category: string;
  t: Pick<Awaited<ReturnType<typeof getDictionary>>, "search">;
}

export default async function SearchResults({ search, category, t }: Props) {

  const coopsData = await coops.GET.SearchFor({
    search: search,
    category: category
  })

  return (
    <>
      <div className="grid gap-5 sm:w-[33rem]">
        {
          coopsData && coopsData.data && (
            coopsData.data.length >= 1 ?
              coopsData.data.map((d) => (
                <Link href={`/details/${d.slug}`} key={d.id}>
                  <ResultBox
                    name={d.name}
                    desc={d.short_desc}
                    imageUrl={d.image_url}
                    imageAlt={t.search.searchResults.imageAlt}
                    is_verified={d.is_verified}
                  />
                </Link>
              )
            ) : (
              <div className="grid justify-items-center gap-4 text-center">
                <SadFaceIcon />
                {t.search.notFound}
              </div>
            )
          )
      }
    </div>
  </>
  )
}