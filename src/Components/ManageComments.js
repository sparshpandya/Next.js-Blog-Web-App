export default function ManageComments() {
    return (
        <div class="post-comment-box mt--80">
            <form action="#">
                <h3 class="form-title">Leave A Reply</h3>
                <p class="desc mb--40">Your email address will not be published. Repuired fields are marked*</p>
                <div class="form-inner inner">
                    <div class="single-input-wrapper">
                        <label for="terms"> Comment*</label>
                        <textarea name="comment" required=""></textarea>
                    </div>
                    <div class="single-input-wrapper name">
                        <label for="terms"> Name*</label>
                        <input type="text" name="name" required />
                    </div>
                    <div class="single-input-wrapper email">
                        <label for="terms"> Email*</label>
                        <input type="email" name="email" required />
                    </div>
                    <div class="single-input-wrapper">
                        <label for="terms"> Website*</label>
                        <input type="text" name="website" required />
                    </div>
                    <div class="single-input-wrapper check">
                        <input type="checkbox" id="terms" name="terms" value="terms of use" />
                        <label for="terms"> Save my name, email, and website in this browser for the next time I Comment.</label><br />
                    </div>
                    <div class="single-input-wrapper">
                        <button type="submit" class="subscribe-btn tp-btn btn-primary">Post A Comment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}