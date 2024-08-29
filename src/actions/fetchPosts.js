"use server";
import clientPromise from "@/db/db";
export const fetchPosts = async () => {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const posts = await db.collection("Posts");

    if (posts) {
        // returning all the posts from db
        const allPosts = await posts.find({}).toArray();
        return allPosts;
    } else {
        return "No Posts For Now, Check Again Later!!";
    }
}