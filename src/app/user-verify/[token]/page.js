import clientPromise from '@/db/db';
import jwt from 'jsonwebtoken';
export default async function EmailVerification({ params }) {

    async function handleUserVerification() {
        "use server";
        const token = params.token;
        const sercretKey = process.env.USER_VERIFICATION_SECRET;
        try {
            const userVerification = jwt.verify(token, sercretKey);
            const userId = userVerification.userId;

            const client = await clientPromise;
            const db = await client.db("Techfacts_Db");
            const users = await db.collection("Users");

            const userData = await users.findOne({ id: userId });

            await users.updateOne({ id: userData.id }, {
                $set: { isVerified: true }
            });

            return `Thank You ${userData.name} for verifying your email. Email Successfully Verified!!`;
        } catch (e) {
            console.log(e);
            return "An Error Occurred, please try again.";
        }
    }

    const result = await handleUserVerification();

    return (
        <h1>{result || 'Please Wait!'}</h1>
    )
}