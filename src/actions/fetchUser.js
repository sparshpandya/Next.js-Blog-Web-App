"use server";
import clientPromise from "@/db/db";

export async function fetchUserByEmail(userEmail) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");

    const userData = await users.findOne({ email: userEmail });

    if (userData) {
        console.log(userData);
        return userData;
    } else {
        return false;
    }

}

export async function fetchUserById(userId) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");
    
    const userData = await users.findOne({ id: parseInt(userId) });
    
    if (userData) {
        return userData;
    } else {
        return false;
    }

}