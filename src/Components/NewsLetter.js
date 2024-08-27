export default function NewsLetter() {
    return (
        <section class="eblog-newsletter-area tp-section-gap">
            <div class="container">
                <div class="section-inner">
                    <p class="sub-title">Weekly updates</p>
                    <h2 class="section-title">Join our newsletter for <br />
                        latest updates!</h2>
                    <p class="desc">Nisi dignissim tortor sed quam sed ipsum ut. <br />
                        Montes, morbi euismod elit.</p>
                    <form action="#" class="newsletter-form">
                        <div class="form-inner">
                            <div class="single-input-wrapper">
                                <input type="email" name="email" placeholder="Your email address" required />
                            </div>
                            <div class="single-input-wrapper">
                                <button type="submit" class="subscribe-btn tp-btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}