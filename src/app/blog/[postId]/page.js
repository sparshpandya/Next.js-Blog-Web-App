import { fetchCategoryById } from "@/actions/fetchCategories";
import { fetchPostById } from "@/actions/fetchPosts";
import { fetchUserById } from "@/actions/fetchUser";
import Comments from "@/Components/Comments";
import { Loader, SuspenseWrapper } from "@/Components/Loader";
import {
  CommentFormLoader,
  CommentsLoader,
} from "@/Components/loaders/CommentsLoader";
import MorePostsLoader from "@/Components/loaders/MorePostsLoader";
import NewsLoader from "@/Components/loaders/NewsLoader";
import MediaLoader from "@/Components/loaders/sidebar/MediaLoader";
import PopularLoader from "@/Components/loaders/sidebar/PopularLoader";
import SidebarLoader from "@/Components/loaders/sidebar/SidebarLoader";
import ManageComments from "@/Components/ManageComments";
import MorePosts from "@/Components/MorePosts";
import NewsLetter from "@/Components/NewsLetter";
import Sidebar from "@/Components/sidebar/Sidebar";
import SocialIcons from "@/Components/sidebar/SocialIcons";

export const metadata = {
  title: "Full Blog | Techfacts Central",
  description:
    "Read blogs techfacts, blog author information techfacts, comment on blogs techfacts, blogs related to gadgets, artificial intelligence and current technology trends - techfacts central.",
  keywords:
    "techfacts central blogs, blog authors, latest technology trends, technology posts",
  author: "Sparsh Pandya",
  openGraph: {
    title: "FUll Blog | Techfacts Central",
    description:
      "Explore our full blog page and get engaged with the author and comment on the blogs - techfacts central.",
  },
};

export default async function ShowPostById({ params }) {
  const postId = parseInt(params.postId);

  const selectedPost = await fetchPostById(postId);
  const {
    title,
    categoryId,
    readingTime,
    createdAt,
    image,
    description,
    userId,
  } = selectedPost;

  const user = await fetchUserById(userId);
  const category = await fetchCategoryById(categoryId);
  const { id, name } = user;
  console.log(name);

  return (
    <>
      <section class="eblog-featured-post-area area-2 tp-section-gapTop">
        <div class="container">
          <div class="section-inner">
            <div class="row g-5 sticky-coloum-wrap">
              <div class="col-xl-9">
                <div class="left-side-post-area">
                  <div class="eblog-hero-banner">
                    <div class="image-area">
                      <Loader width={984} height={612}>
                        <a href="#">
                          <img src={image} alt={`${title} Image`} />
                        </a>
                      </Loader>
                    </div>
                    <div class="blog-content-area">
                      <ul class="blog-meta">
                        <Loader width={265.55} height={28}>
                          <li class="author">
                            <span>BY</span>
                            {name.toUpperCase()} - {createdAt}{" "}
                          </li>
                        </Loader>
                        <Loader width={179.11} height={26}>
                          <li class="category">
                            <span>CATEGORY - </span>
                            {category.toUpperCase()}{" "}
                          </li>
                        </Loader>
                        <Loader width={155.36} height={26}>
                          <li>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_4238_1230)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.85407 12.9565C4.93327 13.6776 6.20206 14.0625 7.5 14.0625C9.24049 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24049 14.0625 7.5C14.0625 6.20206 13.6776 4.93327 12.9565 3.85407C12.2354 2.77488 11.2105 1.93374 10.0114 1.43704C8.81222 0.940343 7.49272 0.810384 6.21972 1.0636C4.94672 1.31682 3.7774 1.94183 2.85961 2.85961C1.94183 3.7774 1.31682 4.94672 1.0636 6.21972C0.810384 7.49272 0.940343 8.81222 1.43704 10.0114C1.93374 11.2105 2.77488 12.2354 3.85407 12.9565ZM4.37492 2.82299C5.29995 2.2049 6.38748 1.875 7.5 1.875C8.99185 1.875 10.4226 2.46764 11.4775 3.52253C12.5324 4.57742 13.125 6.00816 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59739C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82299ZM7.03125 7.69219L9.65156 10.3125L10.3125 9.65156L7.96875 7.30312V3.28125H7.03125V7.69219Z"
                                  fill="#1E1E1E"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4238_1230">
                                  <rect width="15" height="15" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            {`${readingTime} Minute(s) Read`}
                          </li>
                        </Loader>
                        <Loader width={95.66} height={26}>
                          <li>
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="4.17773"
                                width="1.85714"
                                height="8.35714"
                                fill="#1E1E1E"
                              />
                              <rect
                                x="11.1426"
                                y="6.96387"
                                width="1.85714"
                                height="5.57143"
                                fill="#1E1E1E"
                              />
                              <rect
                                x="5.57227"
                                y="0.463867"
                                width="1.85714"
                                height="12.0714"
                                fill="#1E1E1E"
                              />
                            </svg>
                            1.9k views
                          </li>
                        </Loader>
                      </ul>
                      <div class="eblog-social">
                        <p class="tag">Share :</p>
                        <SuspenseWrapper component={<MediaLoader />}>
                          <SocialIcons />
                        </SuspenseWrapper>
                      </div>
                    </div>
                    <Loader width={984} height={52.8}>
                      <h2 class="heading-title">{title}</h2>
                    </Loader>
                    <Loader width={984} height={26} count={30}>
                      <p class="desc">{description}</p>
                    </Loader>
                    <p class="desc">
                      A few weeks later, I was throwing our trash away outside
                      and as I walked toward the back of the house, I heard what
                      sounded like water spraying on the ground. I got closer to
                      the sound and realized it was coming from under our house.
                      So I looked through one of the vents under our house and
                      saw that one of our hot water pipes was shooting water
                      under our house.
                    </p>
                    <p class="desc mb--20">
                      I, on the other hand, couldn’t picture this new kitchen
                      because all I saw were giant holes in the walls and dust
                      everywhere. Our house was a giant mess for 6 months! Let’s
                      just say that our family of five ate A LOT of microwaved
                      Dino Chicken Nuggets. All throughout the process, my wife
                      kept encouraging me to trust the process. Even, in my
                      questioning and worry, I knew my wife had a vision for
                      this new kitchen, I just needed to trust her.
                    </p>
                    <h3 class="heading-title two">
                      There is power when you have vision.
                    </h3>
                    <p class="desc">
                      Vision is being able to see before and beyond what others
                      can see, while also painting a practical picture of how to
                      get there. At Newbreak, our vision is to “Develop Christ
                      centered leaders who change their world.”{" "}
                    </p>
                    <p class="desc">
                      While we can say those words all day, the reality is this…
                      “Vision without execution is hallucination.” – Thomas
                      Edison For example, in our kitchen remodel, all I saw were
                      holes in the walls for months. But then something amazing
                      happened…we started taking steps to add things to our
                      kitchen.
                    </p>
                    <div class="image-area mb--30">
                      <img src="assets/images/blog/154.jpg" alt="" />
                    </div>
                    <h3 class="heading-title two">
                      Three ways we&apos;ll turn vision into reality.
                    </h3>
                    <p class="desc">
                      Consecrate means to make something sacred or holy. We do
                      this by giving priority to spiritual things over physical
                      things. The most dangerous Christian is the one who
                      settles for living a “good enough” faith. There is nothing
                      the devil loves more than a Christian who stops living a
                      life of purpose. Whether you have been following Jesus for
                      decades, or you just began your relationship with Him
                      yesterday, we all can take a next step toward Jesus.
                    </p>
                    <p class="desc">
                      Let this be the year where we consecrate ourselves for the
                      Kingdom of God through prayer and studying God’s word. We
                      are going to be a church that prays first in all things.
                      We are going to be a church that doesn’t just try to get
                      through the Bible in a year, but a church that gets the
                      Bible through us this year.
                    </p>
                    <p class="desc last">
                      As we take steps of faith this year, it’s going to require
                      a lot of courage. We believe God is going to ask us to
                      step out of our comfort zone to make an impact this year.
                      It may be scary serving, loving, and leading others but
                      that is a good place to be. God promises to be with us
                      through the highs and lows of life. Let’s take steps of
                      courage as a church this year!
                    </p>
                    <div class="bottom-area">
                      <div class="blog-actions">
                        <div class="tag-area">
                          <p>Tags:</p>
                          <div class="button-tag">
                            <ul>
                              <li>
                                <a href="#">Fashion,</a>
                              </li>
                              <li>
                                <a href="#">Life Style,</a>
                              </li>
                              <li>
                                <a href="#">Healthy Life</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="social-area">
                          <div class="social-title">
                            <p>Share:</p>
                          </div>
                          <SuspenseWrapper component={<MediaLoader />}>
                            <SocialIcons />
                          </SuspenseWrapper>
                        </div>
                      </div>
                      <div class="author-inner d-flex align-items-center mt--70">
                        <div class="image-area">
                          <img
                            src="assets/images/banner/author-2.jpg"
                            width="307"
                            alt=""
                          />
                        </div>
                        <div class="content-area">
                          <h3 class="heading-title">Maria Sipra</h3>
                          <p class="desc">
                            When we consecrate our lives, walk in courage, and
                            commit to God’s way of living, He is the one who
                            brings transformation and gives us the power to
                            change the world. When that happens, God’s vision
                            become a reality!
                          </p>
                          <div class="sign mt--20 mb--20">
                            <img src="/images/banner/signature.png" alt="" />
                          </div>
                          <div class="social-area">
                            <p class="tag">Follow Me-</p>
                            <SuspenseWrapper component={<MediaLoader />}>
                              <SocialIcons />
                            </SuspenseWrapper>
                          </div>
                        </div>
                      </div>
                      {/* Show Comments Component */}
                      <SuspenseWrapper component={<CommentsLoader />}>
                        <Comments postId={postId} />
                      </SuspenseWrapper>
                      {/* Manage Comments Component */}
                      <SuspenseWrapper component={<CommentFormLoader />}>
                        <ManageComments userId={id} postId={postId} />
                      </SuspenseWrapper>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar Component */}
              <SuspenseWrapper component={<SidebarLoader />}>
                <Sidebar />
              </SuspenseWrapper>
            </div>
          </div>
        </div>
      </section>
      {/* MorePosts Component */}
      <SuspenseWrapper component={<MorePostsLoader />}>
        <MorePosts />
      </SuspenseWrapper>

      {/* NewsLetter Component */}
      <SuspenseWrapper component={<NewsLoader />}>
        <NewsLetter />
      </SuspenseWrapper>
    </>
  );
}
