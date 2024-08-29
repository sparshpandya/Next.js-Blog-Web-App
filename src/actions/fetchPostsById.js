"use server";
import clientPromise from "@/db/db";

export const fetchPostById = async (postId) => {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const posts = await db.collection("Posts");

    if (posts) {
        // returning a single post by its id
        const selectedPost = await posts.findOne({ id: postId });

        return selectedPost;
    } else {
        return "Post Not Found!";
    }
}