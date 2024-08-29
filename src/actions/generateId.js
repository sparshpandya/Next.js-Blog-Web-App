"use server";
export default async function generateId() {
    // Get the current timestamp (in milliseconds)
    const timestamp = Date.now();

    // Generate a random number (between 1000 and 9999)
    const randomNum = Math.floor(1000 + Math.random() * 9000);

    // Combine the timestamp and random number to create a unique ID
    const uniqueId = `${timestamp}${randomNum}`;

    // Convert to a number (optional, but keeps it numeric)
    return parseInt(uniqueId, 10);
}