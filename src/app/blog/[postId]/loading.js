"use client";
import { SkeletonLoader } from "@/Components/Loader";
import {
  CommentFormLoader,
  CommentsLoader,
} from "@/Components/loaders/CommentsLoader";
import MorePostsLoader from "@/Components/loaders/MorePostsLoader";
import NewsLoader from "@/Components/loaders/NewsLoader";
import MediaLoader from "@/Components/loaders/sidebar/MediaLoader";
import SidebarLoader from "@/Components/loaders/sidebar/SidebarLoader";

export default function Loading() {
  return (
    <>
      <section class="eblog-featured-post-area area-2 tp-section-gapTop">
        <div class="container">
          <div class="section-inner">
            <div class="row g-5 sticky-coloum-wrap">
              <div class="col-xl-9">
                <div class="left-side-post-area">
                  <div class="eblog-hero-banner">
                    <div class="image-area">
                      <SkeletonLoader width={984} height={612} />
                    </div>
                    <div class="blog-content-area">
                      <ul class="blog-meta">
                        <SkeletonLoader width={265.55} height={28} />
                        <SkeletonLoader width={179.11} height={26} />
                        <SkeletonLoader width={155.36} height={26} />
                        <SkeletonLoader width={95.66} height={26} />
                      </ul>
                      <div class="eblog-social">
                        <p class="tag">Share :</p>
                        <MediaLoader />
                      </div>
                    </div>
                    <SkeletonLoader width={984} height={52.8} />
                    <SkeletonLoader width={984} height={26} count={30} />

                    <div class="bottom-area">
                      <div class="blog-actions">
                        <SkeletonLoader width={272.39} height={46} />
                        <div class="social-area">
                          <div class="social-title">
                            <p>Share:</p>
                          </div>
                          <MediaLoader />
                        </div>
                      </div>
                      <div class="author-inner d-flex align-items-center mt--70">
                        <div class="image-area">
                          <img
                            src="/images/banner/author-2.jpg"
                            width="307"
                            alt=""
                          />
                        </div>
                        <div class="content-area">
                          <SkeletonLoader width={625} height={39.6} />
                          <SkeletonLoader width={625} height={26} count={3} />
                          <div class="sign mt--20 mb--20">
                            <img src="/images/banner/signature.png" alt="" />
                          </div>
                          <div class="social-area">
                            <p class="tag">Follow Me-</p>
                            <MediaLoader />
                          </div>
                        </div>
                      </div>
                      {/* Comments Loader */}
                      <CommentsLoader />
                      <CommentsLoader />
                      <CommentsLoader />
                      {/* Comments Form Loader */}
                      <CommentFormLoader />
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar Loader */}
              <SidebarLoader />
            </div>
          </div>
        </div>
      </section>
      {/* MorePosts Loader */}
      <section class="eblog-bottom-post-area tp-section-gap">
        <div class="container">
          <h3 class="section-title text-center">You Might Like This</h3>
          <div class="section-inner">
            <div class="row g-5">
              <MorePostsLoader />
              <MorePostsLoader />
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter Loader */}
      <NewsLoader />
    </>
  );
}
