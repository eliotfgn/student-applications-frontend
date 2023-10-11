import React from 'react';

interface PostOptions {
    url: string;
    data?: object;
    headers?: HeadersInit | undefined;
}

interface PostResponse {
    data: any;
    status: number;
}

const BASE_URL: string = 'http://localhost:8181/api/v1';

export const usePost = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState<PostResponse>();

    const post = async (options: PostOptions): Promise<PostResponse> => {
        try {
            setIsLoading(true);
            const resp: Response = await fetch(BASE_URL + options.url, {
                method: 'POST',
                headers: { ...options.headers, 'Content-Type': 'application/json' },
                body: JSON.stringify(options.data),
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
        post,
    };
};
