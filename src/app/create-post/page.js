import { fetchUserByEmail } from "@/actions/fetchUser";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { savePosts } from "@/actions/savePosts";
import { fetchCategories } from "@/actions/fetchCategories";
import Link from "next/link";
import Form from "@/Components/Form";

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
                                                        categories.map(category => {
                                                            const { id, name } = category;
                                                            return (
                                                                <option value={id}>{name}</option>
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
                                                <input type="file" accept="image/*" name="image" required />
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
            ) : (
                <>
                    <h1 className="text-center">Please Sign Up/In to create a post on our app</h1>
                    <Link className="text-center" href='sign-up'>Sign Up</Link>
                    <Link className="text-center" href='sign-in'>Sign In</Link>
                </>
            )}
        </div>
    )
}