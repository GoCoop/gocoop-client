import { cookies } from "next/headers";
import type { CategoriesT } from "@/services/categories/GET";
import type { Res } from "@/services/types/res";

type Req = {
  name: string;
};

type CategoriesData = {
  id: number;
  name: string;
  label: CategoriesT;
  icon: string;
}

export type CoopDetailsT = {
  id: number;
  name: string;
  image_url: string;
  categories: CategoriesData[];
  short_desc: string;
  description: string;
  country: string;
  website_url: string;
  workers: number;
};

export default async function GET(req: Req): Promise<Res<CoopDetailsT>> {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
  const url = `${apiUrl}/coops/${req.name}`;

  const cookiesStore = await cookies();
  const userLang = cookiesStore.get("user_lang")?.value ?? "en";

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": userLang,
      },
      method: "GET",
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(
        `Response status: ${res.status} - ${err.message || "Unknown error"}`
      );
    }

    const json = await res.json();

    return {
      data: json,
      success: true,
      message: "Request successful.",
    };
  } catch (err) {
    return {
      data: null,
      success: false,
      message: "Error during GET request. " + err,
    };
  }
}
