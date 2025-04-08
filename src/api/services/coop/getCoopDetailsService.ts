import { cookies } from "next/headers";
import type { Res } from "@/api/models/response";
import type { CoopDetailsT } from "@/api/models/coop";
import type { Req } from "@/api/controllers/coop/GET";

export default async function getCoopDetailsService(req: Req): Promise<Res<CoopDetailsT>> {
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
