import { fetchCategoryById } from "@/actions/fetchCategories";
import { fetchPosts } from "@/actions/fetchPosts";
import { fetchUserById } from "@/actions/fetchUser";
import Link from "next/link";

export default async function MorePosts() {
  const allPosts = await fetchPosts();
  return (
    <section class="eblog-bottom-post-area tp-section-gap">
      <div class="container">
        <h3 class="section-title text-center">You Might Like This</h3>
        <div class="section-inner">
          <div class="row g-5">
            {allPosts && allPosts.length > 0
              ? allPosts.map(async (post, index) => {
                  const {
                    id,
                    title,
                    categoryId,
                    readingTime,
                    createdAt,
                    image,
                    description,
                    userId,
                  } = post;

                  const user = await fetchUserById(userId);
                  const category = await fetchCategoryById(categoryId);
                  const { name } = user;
                  return (
                    <div class="col-xl-3 col-lg-6 col-md-6" key={index}>
                      <div class="eblog-featured-news style-two small">
                        <div class="image-area">
                          <Link href={`/blog/${id}`}>
                            <img src={image} alt={`${category} post image`} />
                          </Link>
                        </div>
                        <div class="blog-content text-left">
                          <p class="tag mb--15">{category}</p>
                          <h4 class="heading-title ml--0 mb--10 text-start">
                            <a class="title-animation text-center" href="#">
                              {title}
                            </a>
                          </h4>
                          <ul class="blog-meta justify-content-start m--0">
                            <li class="author">
                              <span>BY</span>
                              {name.toUpperCase()} - {createdAt}{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No Posts"}
          </div>
        </div>
      </div>
    </section>
  );
}
