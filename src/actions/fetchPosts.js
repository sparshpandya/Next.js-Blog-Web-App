"use server";
import clientPromise from "@/db/db";
export async function fetchPosts() {
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

export async function fetchPostById(postId) {
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

export async function fetchPostsByCategoryId(categoryId) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const posts = await db.collection("Posts");

    if (posts) {
        // returning a single post by its id
        const selectedPosts = await posts.find({ categoryId }).toArray();
        console.log("category posts", selectedPosts);

        return selectedPosts;
    } else {
        return "Post Not Found!";
    }
}