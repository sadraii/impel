export async function onRequest({ env }) {
  // Generate a UUID for the key
  const uuid = crypto.randomUUID();
  
  // Generate random number between 1 and 1000
  const randomValue = Math.floor(Math.random() * 1000) + 1;
  
  try {
    // Store the value in KV
    await env.MY_KV.put(uuid, randomValue.toString());
    
    // Return the created entry
    return new Response(
      JSON.stringify({ key: uuid, value: randomValue }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to store value" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
} 