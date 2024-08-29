"use client";
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react';

export default function ManageSignIn() {
    const { data: session } = useSession();
    return (
        <div>{!session ? (

            <section className="eblog-sign-up-area tp-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8">
                                <h2 className="heading-title text-center">Sign In</h2>
                                <form>
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
                                            <button onClick={() => { signIn("google", {callbackUrl: '/'}) }} className="subscribe-btn tp-btn btn-email"> <i className="fab fa-google"></i> Login With Google</button>
                                        </div>

                                        <div className="single-input-wrapper">
                                            <button onClick={() => { signIn("facebook", {callbackUrl: '/'}); }} className="subscribe-btn tp-btn btn-facebook"> <i className="fab fa-facebook"></i> Login With Facebook</button>
                                        </div>

                                        <div className="single-input-wrapper">
                                            <button onClick={() => { signIn("github", {callbackUrl: '/'}); }} className="subscribe-btn tp-btn btn-facebook"> <i className="fab fa-github"></i> Login With Github</button>
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
        ): (<h1 className='text-center m-3'>User Already Logged In</h1>)}
        </div>
    )
}
