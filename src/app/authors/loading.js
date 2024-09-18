import { SkeletonLoader } from "@/Components/Loader";
import MediaLoader from "@/Components/loaders/sidebar/MediaLoader";

export default function Loading() {
  return (
    <div>
      <section className="eblog-author-area tp-section-gap2Top">
        <div className="container">
          <div className="section-inner">
            <div className="image-area">
              <SkeletonLoader width={307} height={408.53} circle={true} />
            </div>
            <div className="content-area">
              <SkeletonLoader width={625} height={42.5} />
              <SkeletonLoader width={625} height={156} count={6} />
              <SkeletonLoader width={625} height={26} circle={true} />
              <MediaLoader />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
