import React from "react";
import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    // Create a new MongoClient and connect it to MongoDB
    try{
        client = new MongoClient("mongodb+srv://sparsh:password1884@cluster0.afvsm2s.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Store the connection promise in the global scope
        global._mongoClientPromise = client.connect();
        const db = client.db("Techfacts_Db");
        await db.createCollection("Posts");
    } catch(e) {
        console.log(e);
    }
}

// Reuse the connection promise if it already exists
clientPromise = global._mongoClientPromise;

export default clientPromise;