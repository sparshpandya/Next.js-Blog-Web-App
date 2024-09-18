import { SkeletonLoader } from "../Loader";

export default function NewsLoader() {
  return (
    <section class="eblog-newsletter-area tp-section-gap">
      <div class="container">
        <div class="section-inner">
          <p class="sub-title">Weekly updates</p>
          <h2 class="section-title">
            Join our newsletter for <br />
            latest updates!
          </h2>
          <form action="#" class="newsletter-form">
            <div class="form-inner">
              <div class="single-input-wrapper">
                <SkeletonLoader width={330} height={53.6} />
              </div>
              <div class="single-input-wrapper">
                <SkeletonLoader width={124.3} height={52} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
