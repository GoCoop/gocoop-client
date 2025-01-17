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
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
    const url = `${apiUrl}/coops?name=${encodeURIComponent(req.search)}`;

    try {
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(`Response status: ${res.status} - ${err.message || 'Unknown error'}`);
        }

        const json = await res.json();

        return {
            data: json,
            success: true,
            message: 'Request successful.'
        };
    } catch(err) {
        return {
            data: null,
            success: false,
            message: "Error during GET request. " + err
        }
    }
}