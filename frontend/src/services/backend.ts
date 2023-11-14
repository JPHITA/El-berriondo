import isDocker from 'is-docker';


export async function fetchBackend(path: string, options?: RequestInit): Promise<Response> {
    const url = isDocker() ? 'http://backend:3000' : 'http://localhost:3000';

    const response = await fetch(`${url}${path}`, options);
    return response;
}
