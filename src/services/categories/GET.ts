export type CategoryT = {
    id: number;
    name: string;
    icon: string;
}

type Response = {
    data: CategoryT[] | null;
    success: boolean;
    message: string;
}

export default async function GET(): Promise<Response> {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
    const url = `${apiUrl}/categories`;

    try {
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(`Response status: ${res.status} - ${err.message || 'Unknown error'}`);
        };

        const json = await res.json();

        return {
            data: json,
            success: true,
            message: 'Request successful.'
        }
    } catch(err) {
        return {
            data: null,
            success: false,
            message: 'Error during GET requests. ' + err
        };
    }
}