/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // Check if the request is for the generatekv API
    if (event.url.pathname === '/api/generatekv') {
        // Redirect to the Cloudflare Function
        const response = await fetch(`${event.url.origin}/functions/api/generatekv`, {
            method: event.request.method,
            headers: event.request.headers,
            body: event.request.body
        });
        return response;
    }

    // For all other routes, proceed normally
    return await resolve(event);
} 