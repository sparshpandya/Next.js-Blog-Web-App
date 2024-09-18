"use client";

import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Loader({ children, width, height, count }) {
  return (
    <Suspense
      fallback={
        <Skeleton
          width={width}
          height={height}
          baseColor="#e0e0e0"
          highlightColor="#f0f0f0"
          count={count}
        />
      }
    >
      {children}
    </Suspense>
  );
}

export function SuspenseWrapper({ component, children }) {
  return <Suspense fallback={component}>{children}</Suspense>;
}

export function SkeletonLoader({ width, height, count, circle, styles }) {
  return (
    <Skeleton
      width={width}
      height={height}
      baseColor="#e0e0e0"
      highlightColor="#f0f0f0"
      circle={circle}
      count={count}
      {...styles}
    />
  );
}
