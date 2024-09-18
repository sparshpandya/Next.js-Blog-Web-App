import { SkeletonLoader } from "@/Components/Loader";
import NewsLoader from "@/Components/loaders/NewsLoader";
import PostsLoader from "@/Components/loaders/PostsLoader";
import SidebarLoader from "@/Components/loaders/sidebar/SidebarLoader";

export default function Loading() {
  return (
    <>
      <section className="eblog-featured-post-area area-2 tp-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5 sticky-coloum-wrap">
              <div className="col-xl-9">
                <div className="left-side-post-area">
                  <div className="featured-post area-2">
                    <div className="post-section-inner">
                      <div className="row g-5">
                        <div className="col-lg-12">
                          <div className="eblog-featured-news style-two big">
                            {/* Posts Loader */}
                            <PostsLoader />
                            <PostsLoader />
                            <PostsLoader />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="button-area">
                            <SkeletonLoader width={124.5} height={40} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar Loader */}
              <SidebarLoader />
            </div>
          </div>
        </div>
      </section>
      {/* NewsLetter Loader */}
      <NewsLoader />
    </>
  );
}
