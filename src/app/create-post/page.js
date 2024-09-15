import { fetchUserByEmail } from "@/actions/fetchUser";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GetImageUrl, savePosts } from "@/actions/savePosts";
import { fetchCategories } from "@/actions/fetchCategories";
import { CldUploadButton } from "next-cloudinary";
import Link from "next/link";
import Form from "@/Components/Form";
import UploadImages from "@/Components/UploadImages";


export const metadata = {
    title: 'Create Post | Techfacts Central',
    description: 'Create post on our blog to showcase your knowledge about tech - techfacts central.',
    keywords: 'techfacts central, create post techfacts central, share your knowledge',
    author: 'Sparsh Pandya',
    openGraph: {
        title: 'Create Post | Techfacts Central',
        description: 'Create post on techfacts central.'
    }
}

export default async function CreatePost() {
    const categories = await fetchCategories();
    const today = new Date().toISOString().split("T")[0];
    const userSession = await getServerSession(authOptions);
    const user = await fetchUserByEmail(userSession?.user?.email);
    const { id } = user;

    return (
        <div>
            {userSession && Object.keys(userSession).length !== 0 ? (
                <section className="eblog-sign-up-area tp-section-gap">
                    <div className="container">
                        <div className="section-inner">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-8">
                                    <h2 className="heading-title text-center">Create A Blog Post</h2>
                                    <Form action={savePosts}>
                                        <div className="form-inner inner" >
                                            <div className="single-input-wrapper">
                                                <select name="category" required>
                                                    {categories && categories.length > 0 ?
                                                        categories.map((category, index) => {
                                                            const { id, name } = category;
                                                            return (
                                                                <option key={index} value={id}>{name}</option>
                                                            )
                                                        }) : 'No Categories Found!'
                                                    }
                                                </select>
                                            </div>
                                            <div className="single-input-wrapper">
                                                <input type="text" value={id} name="userId" hidden />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <input type="text" name="title" placeholder="Post Title" required />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <input type="number" name="readingTime" placeholder="Post Reading Time" required />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <input type="date" name="date" defaultValue={today} placeholder="Post Date" required />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <UploadImages />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <textarea name="description" placeholder="Post Description - Write in paragraphs" required />
                                            </div>
                                            <div className="single-input-wrapper check">
                                                <input type="checkbox" id="terms" name="terms" value="terms of use" required />
                                                <label htmlFor="terms"> I read and accept all <a href="#">terms of use.</a></label><br />
                                            </div>
                                            <div className="single-input-wrapper">
                                                <button type="submit" className="subscribe-btn tp-btn btn-primary">Create Post</button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : ((<div><h3 className="text-center">Please <Link href='/sign-up'>Sign Up</Link>/<Link href='/sign-in'>Sign In</Link> to create posts!!</h3></div>))}
        </div>
    )
}