"use client";

import { SkeletonLoader } from "@/Components/Loader";

export default function MediaLoader() {
  return (
    <>
      <div className="eblog-right-side-post social-area">
        <div className="social-area area-2">
          <ul className="social-wrapper">
            <li>
              <SkeletonLoader width={32} height={32} circle={true} />
            </li>
            <li>
              <SkeletonLoader width={32} height={32} circle={true} />
            </li>
            <li>
              <SkeletonLoader width={32} height={32} circle={true} />
            </li>
            <li>
              <SkeletonLoader width={32} height={32} circle={true} />
            </li>
            <li>
              <SkeletonLoader width={32} height={32} circle={true} />
            </li>
            <li>
              <SkeletonLoader width={32} height={32} circle={true} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
