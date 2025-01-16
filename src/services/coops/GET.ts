import { getApi } from "../api";

type Request = {
    search: string;
}

type Response = {
    data: any;
    success: boolean;
    message: string;
}

export default async function GET(req: Request): Promise<Response> {
    const api = getApi();

    try {
        const res = await api.get(`/coops`);

        return {
            data: res.data,
            success: true,
            message: "Request successful."
        }
    } catch (err) {
        return {
            data: err,
            success: false,
            message: "Error fetching GET request. Route: ('/coops')"
        }
    }
}