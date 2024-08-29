"use client";
import { savePosts } from "@/actions/savePosts";
import { useRef } from "react";

export default function CreatePost() {
    const ref = useRef();
    const today = new Date().toISOString().split("T")[0];

    return (
        <div>
            <section className="eblog-sign-up-area tp-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8">
                                <h2 className="heading-title text-center">Create A Blog Post</h2>
                                <form ref={ref} action={(e) => { savePosts(e); ref.current.reset(); }}>
                                    <div className="form-inner inner" >
                                        <div className="single-input-wrapper">
                                            <select name="category" required>
                                                <option value="artificialIntelligence">Artificial Intelligence</option>
                                                <option value="gadgets">Gadgets</option>
                                                <option value="ecom">E-commerce</option>
                                                <option value="vr">Virtual Reality</option>
                                            </select>
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="text" name="name" placeholder="Full Name" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="text" name="title" placeholder="Post Title" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="text" name="readingTime" placeholder="Post Reading Time" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="date" name="date" defaultValue={today} placeholder="Post Date" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <input type="file" accept="image/*" name="image" required />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <textarea name="description" placeholder="Post Description - Write in paragraphs" required />
                                        </div>
                                        <div className="single-input-wrapper check">
                                            <input type="checkbox" id="terms" name="terms" value="terms of use" required />
                                            <label htmlFor="terms"> I read and accept all <a href="#">terms of use.</a></label><br />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <button type="submit" className="subscribe-btn tp-btn btn-primary">Create Post</button>
                                        </div>
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