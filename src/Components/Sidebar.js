import FeaturedPosts from './FeaturedPosts';
import PopularPosts from './PopularPosts';
import Categories from './Categories';
import SocialIcons from './SocialIcons';
import { fetchPosts } from '@/app/actions';
export default async function Sidebar() {
    const posts = await fetchPosts();
    return (
        <div className="col-xl-3 tp-sticky-column-item">
            <div className="eblog-right-sidebar">
                {/* Featured Posts Component */}
                <FeaturedPosts posts={posts} />

                {/* Popular Posts Component */}
                <PopularPosts posts={posts} />

                {/* Categories Component */}
                <Categories posts={posts} />

                {/* Social Icons Component */}
                <>
                    <p className="title text-center m-3">Follow Me</p>
                    <SocialIcons />
                </>
            </div>
        </div>
    )
}