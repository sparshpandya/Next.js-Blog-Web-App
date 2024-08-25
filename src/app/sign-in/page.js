import { Skeleton } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Sign In | Techfacts Central',
    description: 'Sign In/Log In page - techfacts central.',
    keywords: 'techfacts central, signin techfacts central, techfacts central login, techfacts central account',
    author: 'Sparsh Pandya',
    openGraph: {
        title: 'Sign In | Techfacts Central',
        description: 'Sign In/Log In to your account - techfacts central.'
    }
}

export default function SignIn() {
    return (
        <div>
            <section className="eblog-sign-up-area tp-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8">
                                <Skeleton variant="rectangular" width="60%" height="2rem" />
                                <h2 className="heading-title text-center">Sign In</h2>
                                <form action="#">
                                    <div className="form-inner inner">
                                        <div className="single-input-wrapper">
                                            <input type="email" name="email" placeholder="Your email" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="password" name="password" placeholder="Password" required />
                                        </div>
                                        <div className="single-input-wrapper check two">
                                            <div className="check-inner">
                                                <input type="checkbox" id="terms" name="terms" value="terms of use" />
                                                <label htmlFor="terms"> Remember me</label><br />
                                            </div>
                                            <Link href="/reset-password" className="forgot-password">Forgot password?</Link>
                                        </div>
                                        <div className="single-input-wrapper">
                                            <button type="submit" className="subscribe-btn tp-btn btn-primary">Log in</button>
                                        </div>

                                        <div className="form-separator-or">
                                            <p className="text-center">OR</p>
                                        </div>

                                        <div className="single-input-wrapper">
                                            <button type="submit" className="subscribe-btn tp-btn btn-email"> <i className="fal fa-envelope"></i> Login With Email</button>
                                        </div>

                                        <div className="single-input-wrapper">
                                            <button type="submit" className="subscribe-btn tp-btn btn-facebook"> <i className="fab fa-facebook"></i> Login With Facebook</button>
                                        </div>

                                    </div>
                                    <div className="form-bottom-text">
                                        <p className="text-center">Have no account yet? <Link href="/sign-up">Sign up</Link> </p>
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
