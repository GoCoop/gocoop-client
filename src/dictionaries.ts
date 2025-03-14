import 'server-only'

export type Locales = "pt" | "en";
 
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default)
}
 
export const getDictionary = async (locale: Locales) =>
  dictionaries[locale]()