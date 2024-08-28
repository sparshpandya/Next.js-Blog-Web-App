"use server";

import clientPromise from "@/db/db";
import { writeFile } from "fs/promises";
import { join } from "path";

export const submitPostData = async (e) => {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const posts = await db.collection("Posts");
    const totalPosts = await db.collection("totalPosts");
    // creating collections if not exists
    if (!posts) {
        await db.createCollection("Posts");
    } else if (!totalPosts) {
        await db.createCollection("totalPosts");
    } else if (e) {
        try {
            // uploading the image file in the public folder
            const image = e.get("image") || null;

            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const rootDir = process.cwd();
            const path = join(rootDir, 'public', 'images', 'blog', image.name);

            await writeFile(path, buffer);
            if (path) {
                // adding a post count
                await totalPosts.findOneAndUpdate({ id: 'totalPosts' }, {
                    $set: { id: 'totalPosts' },
                    $inc: { count: 1 }
                }, { upsert: true });

                // fetching the latest record from the total posts
                const latestRecord = await totalPosts.find().sort({ timestamp: -1 }).limit(1).toArray();
                let postId;
                await latestRecord.map(record => {
                    // setting post id
                    postId = record.count;
                });

                if (postId) {
                    await posts.insertOne({
                        id: postId,
                        name: e.get("name"),
                        title: e.get("title"),
                        category: e.get("category"),
                        readingTime: e.get("readingTime"),
                        date: e.get("date"),
                        image: image.name,
                        description: e.get("description")
                    });
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
}

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

export const saveUser = async (session) => {
    
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");
    // creating collections if not exists
    if (!users) {
        await db.createCollection("Posts");
    } else {
        // saving user to the db if the session has value
        try {
            if (session) {
                const sessionEmail = session.email;
                const userEmail = await users.findOne({ email: sessionEmail });
                if(!userEmail) {
                    await users.insertOne(session);
                }
            }
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}