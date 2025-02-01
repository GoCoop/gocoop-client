import type { CategoriesT } from "@/icons/Icon/Icon";
import type { Res } from "@/services/types/res";

type Req = {
  name: string;
};

export type CoopDetailsT = {
  id: number;
  name: string;
  imageURL: string;
  category: CategoriesT;
  shortDesc: string;
  desc: string;
  location: string;
  websiteURL: string;
  workers: number;
};

export default async function GET(req: Req): Promise<Res<CoopDetailsT>> {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
  const url = `${apiUrl}/coops/${req.name}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
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
