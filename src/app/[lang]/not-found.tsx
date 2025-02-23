import Link from 'next/link'
import { getDictionary } from '@/dictionaries'
import LeftArrowIcon from '@/icons/LeftArrowIcon'

type Props = {
  t: Awaited<ReturnType<typeof getDictionary>>["notFoundPage"]
}
 
export default function NotFound({ t }: Props) {
  return (
    <div className="h-screen grid place-content-center gap-3">
      <h2 className="text-4xl">{t?.title}</h2>
      <p>{t?.message}</p>
      <Link href="/">
        <button
          className="p-2 px-4 flex items-center gap-2 rounded-2xl bg-mainColorTheme text-white"
        >
          <LeftArrowIcon /> 
          {t?.button} 
        </button>
      </Link>
    </div>
  )
}