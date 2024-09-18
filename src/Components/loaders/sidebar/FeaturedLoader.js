"use client";

import { SkeletonLoader } from "@/Components/Loader";

export default function FeaturedLoader() {
  return (
    <>
      <div className="image-area">
        <SkeletonLoader width={308} height={308} />
      </div>
      <div className="blog-content">
        <ul className="blog-meta">
          <SkeletonLoader width={155.36} height={26} />
          <SkeletonLoader width={95.66} height={26} />
        </ul>
        <h5 className="heading-title">
          <SkeletonLoader width={115.61} height={22.4} />
        </h5>
        <SkeletonLoader width={308} height={26} />
        <SkeletonLoader width={79.15} height={26} />
      </div>
    </>
  );
}
