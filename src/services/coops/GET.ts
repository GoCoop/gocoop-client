import { getApi } from "../api";

type Request = {
    search: string;
}

type Coop = {
    id: number;
    name: string;
    category: string;
    desc: string;
    imageUrl: string;
}

type Response = {
    data: Coop[] | null;
    success: boolean;
    message: string;
}

export default async function GET(req: Request): Promise<Response> {
    const api = getApi();

    try {
        const res = await api.get(`/coops?name=${req.search}`);

        return {
            data: res.data,
            success: true,
            message: "Request successful."
        }
    } catch (err) {
        return {
            data: null,
            success: false,
            message: "Error during GET request. " + err
        }
    }
}