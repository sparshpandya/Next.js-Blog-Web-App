"use server";
import { successToast } from "@/Components/Form";
import clientPromise from "@/db/db";

export default async function saveComments(e) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const comments = await db.collection("Comments");

    if(!comments) {
        await db.createCollection("Comments");
    } else {
        const comment = e.get("comment");
        const userId = parseInt(e.get("userId"));
        const postId = parseInt(e.get("postId"));

        if(comment && userId && postId) {
            try {
                await comments.insertOne({
                    comment,
                    userId,
                    postId
                });
                return true;
            } catch(e) {
                console.error(e);   
                return false;  
            }
        } else {
            console.log("Error saving comment!");
            return false;
        }
    }
}