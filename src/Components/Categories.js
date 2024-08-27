import { fetchPosts } from "@/app/actions"
import Link from "next/link";

export default async function Categories({ posts }) {
    return (
        <div className="eblog-right-side-post category2">
            <p className="title">Browse Category</p>
            <div className="category-area">
                <ul className="category-wrapper">
                    {posts && posts.length > 0 ? (
                        posts.map(post => {
                            const {
                                id,
                                name,
                                title,
                                category,
                                readingTime,
                                date,
                                image,
                                description
                            } = post;

                            return (<>
                                <li>
                                    <div className="image-area">
                                        <Link href="#"><img src="/images/category/category-01.jpg" alt="" /></Link>
                                        <p className="text"><Link href="#">{category}</Link></p>
                                    </div>
                                </li>
                            </>)
                        })) : (<p>No Posts</p>)}

                </ul>
            </div>
        </div>
    )
}