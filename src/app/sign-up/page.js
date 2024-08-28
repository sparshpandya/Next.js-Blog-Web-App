import Link from "next/link"

export const metadata = {
    title: 'Sign Up | Techfacts Central',
    description: 'Sign Up with your email or social media account and get latest news related to tech everyday - techfacts central.',
    keywords: 'techfacts central, signup techfacts central, techfacts central account',
    author: 'Sparsh Pandya',
    openGraph: {
        title: 'Sign Up | Techfacts Central',
        description: 'Create account in techfacts central today to get the latest news related to tech everyday.'
    }
}

export default function Signup() {
    return (
        <div>
            <section className="eblog-sign-up-area tp-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8">
                                <h2 className="heading-title text-center">Sign Up</h2>
                                <form action="#">
                                    <div className="form-inner inner" >
                                        <div className="single-input-wrapper">
                                            <input type="text" name="name" placeholder="Full name" required="" />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="email" name="email" placeholder="Your email" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="password" name="password" placeholder="Password" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="password" name="password" placeholder="Re-enter password" required />
                                        </div>
                                        <div className="single-input-wrapper check">
                                            <input type="checkbox" id="terms" name="terms" value="terms of use" />
                                                <label for="terms"> I read and accept all <a href="#">terms of use.</a></label><br />
                                                </div>
                                                <div className="single-input-wrapper">
                                                    <button type="submit" className="subscribe-btn tp-btn btn-primary">Create an account</button>
                                                </div>
                                        </div>
                                        <div className="form-bottom-text">
                                            <p className="text-center">Have no account yet? <Link href="/sign-in">Sign in</Link> </p>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
