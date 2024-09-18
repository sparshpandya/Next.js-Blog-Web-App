"use client";

import { SkeletonLoader } from "@/Components/Loader";

export default function PopularLoader() {
  return (
    <>
      <div className="image-area">
        <SkeletonLoader width={40.35} height={40.35} />
      </div>
      <div className="blog-content">
        <h4 className="heading-title">
          <SkeletonLoader width={71.94} height={46} />
        </h4>
        <ul className="blog-meta">
          <SkeletonLoader width={94.15} height={42} />
        </ul>
      </div>
    </>
  );
}
