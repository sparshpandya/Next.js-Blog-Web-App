"use client";

import { SkeletonLoader } from "@/Components/Loader";

export default async function CategoryLoader() {
  return (
    <div className="eblog-right-side-post category2">
      <p className="title">Browse Categories</p>
      <div className="category-area">
        <ul className="category-wrapper">
          <li>
            <div className="image-area">
              <SkeletonLoader
                width={308}
                height={70.22}
                baseColor="#e0e0e0"
                highlightColor="#f0f0f0"
                count={4}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
