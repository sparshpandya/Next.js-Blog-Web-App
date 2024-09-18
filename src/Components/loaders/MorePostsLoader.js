import { SkeletonLoader } from "../Loader";

export default function MorePostsLoader() {
  return (
    <div class="col-xl-3 col-lg-6 col-md-6">
      <div class="eblog-featured-news style-two small">
        <div class="image-area">
          <SkeletonLoader width={308} height={308} />
        </div>
        <div class="blog-content text-left">
          <SkeletonLoader width={69.15} height={27} />
          <h4 class="heading-title ml--0 mb--10 text-start">
            <SkeletonLoader width={26.03} height={28} />
          </h4>
          <ul class="blog-meta justify-content-start m--0">
            <SkeletonLoader width={235.26} height={28} />
          </ul>
        </div>
      </div>
    </div>
  );
}
