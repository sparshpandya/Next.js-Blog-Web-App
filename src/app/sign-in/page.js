import React from 'react'

function SignIn() {
    return (
        <div>
            <section className="eblog-sign-up-area tp-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8">
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
                                                    <label for="terms"> Remember me</label><br />
                                                    </div>
                                                    <a href="reset-password.html" className="forgot-password">Forgot password?</a>
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
                                            <p className="text-center">Have no account yet? <a href="sign-up.html">Sign up</a> </p>
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

export default SignIn
