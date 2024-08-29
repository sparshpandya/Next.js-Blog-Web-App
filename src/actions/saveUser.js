"use server";
import clientPromise from "@/db/db";
import generateId from "./generateId";

export const saveUser = async (session, provider) => {

    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const users = await db.collection("Users");
    // creating collections if not exists
    if (!users) {
        await db.createCollection("Posts");
    } else {
        // saving user to the db if the session has value
        try {
            if (session.email && provider) {
                const { id, name, email } = session;
                const providerId = parseInt(id);
                const userEmail = await users.findOne({ email: email });
                // generating a unique user id
                const userId = await generateId();

                if (!userEmail) {
                    // if user is not found, saving the data with the provider info
                    await users.insertOne({
                        id: userId,
                        providers: [{
                            name: provider,
                            id: providerId
                        }],
                        name: name,
                        email: email,
                        isVerified: true
                    });
                } else {
                    // if email is found, checking whether the providers array contains the data
                    const providerDoc = await userEmail.providers.filter(p => {
                        
                        return p.name === provider &&
                            p.id === providerId;
                    });
                    
                    
                    // if not, we will just update the providers array to have the provider's info
                    if (providerDoc.length === 0) {
                        
                        await users.updateOne({ email: userEmail.email }, {
                            $push: {
                                providers: {
                                    name: provider,
                                    id: providerId
                                }
                            },
                            $set: { isVerified: true }
                        })
                    }
                }
            } else{
                return false;
            }
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}