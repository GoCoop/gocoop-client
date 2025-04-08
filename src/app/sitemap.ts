import type { MetadataRoute } from 'next'
import { coops } from '@/api/controllers/coops';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const res = await coops.GET.SearchFor({search: '', category: ''});

  const slugs = res.data ? res.data : [];

  const defaultValuesEN: MetadataRoute.Sitemap = [
    {
      url: `https://gocoopfoundation.org/en/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `https://gocoopfoundation.org/en/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `https://gocoopfoundation.org/en/aboutUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ]

  const defaultValuesPT: MetadataRoute.Sitemap = [
    {
      url: `https://gocoopfoundation.org/pt/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `https://gocoopfoundation.org/pt/aboutUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `https://gocoopfoundation.org/pt/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ]

  const sitemap = [
    ...defaultValuesEN,
    ...slugs.map((c) => ({
      url: `https://gocoopfoundation.org/en/details/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    })),
    ...defaultValuesPT,
    ...slugs.map((c) => ({
      url: `https://gocoopfoundation.org/pt/details/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    }))
  ]

  return sitemap as MetadataRoute.Sitemap;
}