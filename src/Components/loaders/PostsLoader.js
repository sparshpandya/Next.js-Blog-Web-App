import { SkeletonLoader } from "../Loader";

export default function PostsLoader() {
  return (
    <>
      <div className="image-area">
        <SkeletonLoader width={983} height={550} />
      </div>
      <div className="blog-content">
        <ul className="blog-meta">
          <SkeletonLoader width={265.25} height={28} />
          <SkeletonLoader width={155.36} height={26} />
          <SkeletonLoader width={95.66} height={26} />
        </ul>
        <h4 className="heading-title">
          <SkeletonLoader width={208.09} height={40.8} />
        </h4>
        <SkeletonLoader width={128.1} height={26} />
      </div>
    </>
  );
}
