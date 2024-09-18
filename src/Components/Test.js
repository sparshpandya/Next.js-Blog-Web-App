"use client";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Test() {
  return (
    <>
      <Skeleton
        width={307}
        height={408.53}
        baseColor="#e0e0e0"
        highlightColor="#f0f0f0"
      />
    </>
  );
}
