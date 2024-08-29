import { fetchPosts } from "@/actions/fetchPosts";

export default async function MorePosts() {
    const allPosts = await fetchPosts();
    return (
        <section class="eblog-bottom-post-area tp-section-gap">
            <div class="container">
                <h3 class="section-title text-center">You Might Like This</h3>
                <div class="section-inner">
                    <div class="row g-5">
                        {allPosts && allPosts.length > 0 ? allPosts.map(post => {
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
                            return (
                                <div class="col-xl-3 col-lg-6 col-md-6">
                                    <div class="eblog-featured-news style-two small">
                                        <div class="image-area">
                                            <a href={`/blog/${id}`}><img src={`/images/blog/${image}`} alt={`${category} post image`} /></a>
                                        </div>
                                        <div class="blog-content text-left">
                                            <p class="tag mb--15">{category}</p>
                                            <h4 class="heading-title ml--0 mb--10 text-start"><a class="title-animation text-center" href="#">{title}</a></h4>
                                            <ul class="blog-meta justify-content-start m--0">
                                                <li class="author"><span>BY</span>{name.toUpperCase()} - {date} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : ('No Posts')}
                    </div>
                </div>
            </div>
        </section>
    )
}