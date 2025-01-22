import { type CategoriesT } from "@/icons/Icon/Icon";

type Req = {
  name: string;
};

export type CoopDetailsT = {
  id: number;
  name: string;
  imageUrl: string;
  category: CategoriesT;
  shortDesc: string;
  desc: string;
  location: string;
  websiteURL: string;
  workers: number;
};

type Res = {
  data: CoopDetailsT[] | null;
  success: boolean;
  message: string;
};

export default async function GET(req: Req): Promise<Res> {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
  const url = `${apiUrl}/details?name=${req.name}`;

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
