import { json } from '@sveltejs/kit';

export async function GET() {
    // Generate a random key-value pair
    const key = Math.random().toString(36).substring(7);
    const value = Math.random().toString(36).substring(7);

    return json({
        key,
        value
    });
}