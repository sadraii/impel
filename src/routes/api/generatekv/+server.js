import { json } from '@sveltejs/kit';

export async function GET(context) {
    // Generate a UUID for the key
    const uuid = crypto.randomUUID();
    
    // Generate random number between 1 and 1000
    const randomValue = Math.floor(Math.random() * 1000) + 1;
    
    try {
      // Store the value in KV
      await context.platform.env.MY_KV.put(uuid, randomValue.toString());
      
      // Return the created entry
      return json({
        uuid,
        randomValue
      });
    } catch (error) {
      return json(
        "Failed to store value"
      );
    }
  } 