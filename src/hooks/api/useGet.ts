import React from 'react';

interface GetOptions {
    url: string;
    headers?: HeadersInit;
}

interface GetResponse {
    data: any;
    status: number;
}

const BASE_URL: string = 'http://localhost:8181/api/v1';

export const useGetFetch = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState<GetResponse | null>(null);

    const get = async (options: GetOptions): Promise<GetResponse> => {
        try {
            setIsLoading(true);
            const resp = await fetch(BASE_URL + options.url, {
                method: 'GET',
                headers: options.headers,
            });
            const data = await resp.json();
            setResponse({ data, status: resp.status });
            setIsLoading(false);
            return { data, status: resp.status };
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setError(err);
            setIsLoading(false);
            throw err;
        }
    };

    return {
        isLoading,
        error,
        response,
        get,
    };
};
