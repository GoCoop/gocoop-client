import { cookies } from "next/headers";

import type { CategoryT } from "@/api/models/categories";
import type { Res } from "@/api/models/response";

export default async function getCategoriesService(): Promise<Res<CategoryT[]>> {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
  const url = `${apiUrl}/categories`;

  const cookiesStore = await cookies();
  const userLang = cookiesStore.get("user_lang")?.value ?? "en";

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": userLang 
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
      message: "Error during GET requests. " + err,
    };
  }
}

