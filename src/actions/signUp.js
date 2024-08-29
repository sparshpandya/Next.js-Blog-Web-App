"use server";
import clientPromise from "@/db/db";
import generateId from "./generateId";

export default async function signUp(e) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");

    if (!users) {
        db.createCollection("Users");
    } else {
        const email = e.get("email");
        const userEmail = await users.findOne({ email: email });
        const userId = await generateId();
        // saving user data if email is not found
        if (!userEmail) {
            await users.insertOne({
                id: userId,
                providers: [{
                    name: "techfacts",
                    id: userId
                }],
                name: e.get("name"),
                email: email,
                password: e.get("password"),
                isVerified: false
            });

            // sending verification email
            // const response = await fetch("http://localhost:3000/api/mail", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email })
            // });

            // const result = await response.json();
            // console.log(result);

            // return result;
        } else {
            // if email is found, checking whether the providers array contains the data
            const providerDoc = await userEmail.providers.filter(p => {
                return p.name === "techfacts";
            });

            if (providerDoc.length === 0 && userEmail.isVerified) {
                await users.updateOne({ email: userEmail.email }, {
                    $push: {
                        providers: {
                            name: "techfacts",
                            id: userEmail.id
                        }
                    },
                    $set: {
                        password: e.get("password")
                    }
                })
            }
        }
    }
}