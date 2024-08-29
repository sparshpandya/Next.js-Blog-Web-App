"use server";
import clientPromise from "@/db/db";
import { writeFile } from "fs/promises";
import { join } from "path";
export const savePosts = async (e) => {
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