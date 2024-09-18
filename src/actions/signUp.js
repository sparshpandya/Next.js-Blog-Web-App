"use server";
import clientPromise from "@/db/db";
import generateId from "./generateId";
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function signUp(e) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!users) {
        db.createCollection("Users");
    } else {
        const email = e.get("email");
        const password = e.get("password");
        const userEmail = await users.findOne({ email: email });
        const userId = await generateId();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // saving user data if email is not found
        if (!userEmail && hashedPassword) {
            await users.insertOne({
                id: userId,
                providers: [{
                    name: "techfacts",
                    id: userId
                }],
                name: e.get("name"),
                email: email,
                password: hashedPassword,
                isVerified: false
            });

            // generating json web token to encrypt the user id
            const sercretKey = process.env.USER_VERIFICATION_SECRET;
            const expiresIn = '1h';

            const token = jwt.sign(
                { userId }, 
                sercretKey, 
                { expiresIn } 
            );

            // sending verification email
            const response = await fetch(`${baseUrl}/api/mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, token })
            });

            const result = await response.json();
            console.log(result);

            return result;
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
                        password: hashedPassword
                    }
                })
            } else {
                console.log("account exists");
                return "Account Already Exists, please log in!";
            }
        }
    }
}