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
          "LinkedInBot"
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