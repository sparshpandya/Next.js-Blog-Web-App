import { SkeletonLoader } from "@/Components/Loader";
import CategoryLoader from "./CategoryLoader";
import FeaturedLoader from "./FeaturedLoader";
import MediaLoader from "./MediaLoader";
import PopularLoader from "./PopularLoader";

export default function SidebarLoader() {
  return (
    <div className="col-xl-3 tp-sticky-column-item">
      <div className="eblog-right-sidebar">
        {/* Featured Posts Loader */}
        <div className="eblog-right-side-post feature">
          <p className="title">Feature Post</p>
          <div className="featured-post sidebar">
            <FeaturedLoader />
            <FeaturedLoader />
          </div>
        </div>

        {/* Popular Posts Loader */}
        <div className="eblog-right-side-post popular">
          <p className="title">Popular Post</p>
          <div className="small-post">
            <div className="eblog-post-list-style">
              <PopularLoader />
              <PopularLoader />
            </div>
          </div>
        </div>

        {/* Categories Loader */}
        <CategoryLoader />

        {/* Social Icons Loader */}

        <p className="title text-center m-3">Follow Me</p>
        <MediaLoader />
      </div>
    </div>
  );
}
