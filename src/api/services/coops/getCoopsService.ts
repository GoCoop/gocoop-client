import { cookies } from "next/headers";

import type { Coop } from "@/api/models/coops";
import type { Req } from "@/api/controllers/coops/GET";
import type { Res } from "@/api/models/response";

export default async function getCoopsService(req: Req): Promise<Res<Coop[]>> {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
  const url = `${apiUrl}/coops?query=${encodeURIComponent(
    req.search
  )}&category=${encodeURIComponent(req.category)}`;

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
      message: "Error during GET request. " + err,
    };
  }
}
