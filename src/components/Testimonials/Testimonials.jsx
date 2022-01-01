import React from "react";

export default function Testimonials() {
    return <div>
        <section id="testimonials" className="teal-section">
            <div className="row">
                <div className="col-lg-12">
                    <div id="testimonial-carousel" className="carousel slide" data-ride="carousel" data-interval="8000">
                        <div className="carousel-inner">
                            <div className="carousel-item active container-fluid">
                                <h3 className="testimonial-text">I told her for years that she should become a programmer. She finally listened to me.</h3>
                                <em>Dad (father)</em>
                            </div>
                            <div className="carousel-item container-fluid">
                                <h3 className="testimonial-text">Brenna is a lifesaver! She just knows what to do and does it.</h3>
                                <em>Every employer ever (not a direct quote)</em>
                            </div>
                            <div className="carousel-item container-fluid">
                                <h3 className="testimonial-text">She should be feeding us more. Like on the hour every hour. And she doesn't pet us enough. But otherwise, she's all right.</h3>
                                <em>Saga & Rumor (cats)</em>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <img className="line-break-gold" src="Images/Art Deco Logo-sm.png" alt="Art Deco line break" />
                </div>
            </div>
        </section>
    </div>
}