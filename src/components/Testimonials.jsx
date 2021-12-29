import React from "react";

export default function Testimonials() {
    return <div>
        <section id="testimonials" class="teal-section">
            <div class="row">
                <div class="col-lg-12">
                    <div id="testimonial-carousel" class="carousel slide" data-ride="carousel" data-interval="8000">
                        <div class="carousel-inner">
                            <div class="carousel-item active container-fluid">
                                <h3 class="testimonial-text">I told her for years that she should become a programmer. She finally listened to me.</h3>
                                <em>Dad (father)</em>
                            </div>
                            <div class="carousel-item container-fluid">
                                <h3 class="testimonial-text">Brenna is a lifesaver! She just knows what to do and does it.</h3>
                                <em>Every employer ever (not a direct quote)</em>
                            </div>
                            <div class="carousel-item container-fluid">
                                <h3 class="testimonial-text">She should be feeding us more. Like on the hour every hour. And she doesn't pet us enough. But otherwise, she's all right.</h3>
                                <em>Saga & Rumor (cats)</em>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <img class="line-break-gold" src="Images/Art Deco Logo-sm.png" alt="Art Deco line break" />
                </div>
            </div>
        </section>
    </div>
}