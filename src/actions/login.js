"use server";
import clientPromise from "@/db/db";
import bcrypt from 'bcrypt'

export default async function login(e) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");

    const email = e.get("email");
    const password = e.get("password");
    console.log(email);
    
    const userEmail = await users.findOne({ email });
    console.log(userEmail);
    

    if (userEmail) {
        // if email is found, checking whether the providers array contains the data
        const providerDoc = await userEmail.providers.filter(p => {

            return p.name === "techfacts";
        });

        if (providerDoc.length === 0) {
            return "No Account Found! Please Create a Account first!"
        } else {
            await bcrypt.compare(password, userEmail.password, function (err, result) {
                if (result) {
                    console.log("Logged In!");
                }
                else {
                    console.log("Invalid password!");
                }
            })
        }
    } else {
        console.log("Email Not Found!");
        return "Email Not Found!";
    }
}