import Link from "next/link";

export const metadata = {
  title: "Reset Password | Techfacts Central",
  description:
    "Reset your account password by verifying your email address - techfacts central.",
  keywords:
    "techfacts central account, techfacts central reset password, techfacts central forgot password",
  author: "Sparsh Pandya",
  openGraph: {
    title: "Reset Password | Techfacts Central",
    description: "Reset your account password - techfacts central.",
  },
};

export default function ResetPassword() {
  return (
    <section class="eblog-sign-up-area tp-section-gap">
      <div class="container">
        <div class="section-inner">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-8">
              <h2 class="heading-title text-center">Reset Password</h2>
              <form action="#">
                <div class="form-inner inner">
                  <div class="single-input-wrapper">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div class="single-input-wrapper check two">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="terms of use"
                    />
                    <label htmlFor="terms">{`I'm not a robot`}</label>
                    <br />
                  </div>
                  <div class="single-input-wrapper">
                    <button
                      type="submit"
                      class="subscribe-btn tp-btn btn-primary"
                    >
                      Reset password
                    </button>
                  </div>
                </div>
                <div class="form-bottom-text">
                  <p class="text-center">
                    Remember your password? <Link href="/sign-in">Sign in</Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
