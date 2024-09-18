import FeaturedPosts from "./FeaturedPosts";
import PopularPosts from "./PopularPosts";
import Categories from "./Categories";
import SocialIcons from "./SocialIcons";
import { fetchPosts } from "@/actions/fetchPosts";
import { Loader, SuspenseWrapper } from "../Loader";
import FeaturedLoader from "../loaders/sidebar/FeaturedLoader";
import PopularLoader from "../loaders/sidebar/PopularLoader";
import CategoryLoader from "../loaders/sidebar/CategoryLoader";
import MediaLoader from "../loaders/sidebar/MediaLoader";
export default async function Sidebar() {
  const posts = await fetchPosts();
  return (
    <div className="col-xl-3 tp-sticky-column-item">
      <div className="eblog-right-sidebar">
        {/* Featured Posts Component */}
        <SuspenseWrapper component={<FeaturedLoader />}>
          <FeaturedPosts posts={posts} />
        </SuspenseWrapper>

        {/* Popular Posts Component */}
        <SuspenseWrapper component={<PopularLoader />}>
          <PopularPosts posts={posts} />
        </SuspenseWrapper>

        {/* Categories Component */}
        <SuspenseWrapper component={<CategoryLoader />}>
          <Categories />
        </SuspenseWrapper>

        {/* Social Icons Component */}
        <>
          <Loader width={288} height={26}>
            <p className="title text-center m-3">Follow Me</p>
          </Loader>
          <SuspenseWrapper component={<MediaLoader />}>
            <SocialIcons />
          </SuspenseWrapper>
        </>
      </div>
    </div>
  );
}
