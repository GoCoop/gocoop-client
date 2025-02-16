import { headers } from "next/headers";
import type { CategoriesT } from "@/icons/Icon/Icon";
import type { Res } from "../types/res";

export type CategoryT = {
  id: number;
  name: string;
  icon: CategoriesT;
};

export default async function GET(): Promise<Res<CategoryT[]>> {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
  const url = `${apiUrl}/categories`;
  const headersList = await headers();
  const acceptLanguage = headersList.get('Accept-Language');

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": acceptLanguage ?? "en",
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
