import { SkeletonLoader } from "../Loader";

export function CommentsLoader() {
  return (
    <div className="mt-5 text-center">
      <h1>Show Comments</h1>
      <SkeletonLoader width={984} height={45} />
      <SkeletonLoader width={984} height={45} />
      <SkeletonLoader width={984} height={45} />
    </div>
  );
}

export function CommentFormLoader() {
  return (
    <div class="post-comment-box mt--80">
      <h3 class="form-title">Leave A Reply</h3>
      <div class="form-inner inner">
        <div class="single-input-wrapper">
          <label for="terms"> Comment*</label>
          <SkeletonLoader width={984} height={160} />
        </div>
        <div class="single-input-wrapper">
          <SkeletonLoader width={174.78} height={52} />
        </div>
      </div>
    </div>
  );
}
