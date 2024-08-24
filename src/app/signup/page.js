import React from 'react'

const Signup = () => {
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
                                            <p className="text-center">You already have an account? <a href="sign-in.html">Sign in</a> </p>
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

export default Signup
