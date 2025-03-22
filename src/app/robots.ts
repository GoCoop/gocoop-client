import { MetadataRoute } from "next";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot", 
          "Slurp", 
          "Bingbot", 
          "Duckduckbot",
          "Applebot",
          "LinkedInBot",
          "Twitterbot",
          "facebookexternalhit",
          "Pinterestbot",
          "Discordbot",
          "Yandex",
          "Baiduspider"
        ],
        allow: ["/"],
      },
      {
        userAgent: '*',
        disallow: ["/"]
      }
    ],
    sitemap: ["https://gocoopfoundation.org/sitemap.xml"]
  };
}