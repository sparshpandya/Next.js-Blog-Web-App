"use server";
import clientPromise from "@/db/db";
import { writeFile } from "fs/promises";
import { join } from "path";
import { v2 as cloudinary } from "cloudinary";
let imageUrl;
export async function GetImageUrl(result) {
    if (result.event === "success") {
        imageUrl = result.info.secure_url;
    } else {
        return false;
    }
}

export async function savePosts(e) {
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
            
            if (imageUrl) {
                console.log("image backend", imageUrl);
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
                        title: e.get("title"),
                        categoryId: parseInt(e.get("category")),
                        readingTime: parseInt(e.get("readingTime")),
                        createdAt: e.get("date"),
                        image: imageUrl,
                        description: e.get("description"),
                        userId: e.get("userId")
                    });
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
}