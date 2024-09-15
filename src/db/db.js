import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    // Create a new MongoClient and connect it to MongoDB
    try{
        client = new MongoClient(process.env.MONGODB_CONN_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Store the connection promise in the global scope
        global._mongoClientPromise = client.connect();
    } catch(e) {
        console.log(e);
    }
}

// Reuse the connection promise if it already exists
clientPromise = global._mongoClientPromise;

export default clientPromise;