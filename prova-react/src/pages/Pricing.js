import React from "react";


function Pricing() {
    return (
        <section className="pricing">
            <div className="card card_border mb-5">
                <div className="cards__heading">
                    <h3>Pricing Tables -<span> Version 1</span></h3>
                </div>
                <div className="card-body">
                    <section className="w3l-pricing1">
                        <div className="row px-2">
                            <div className="col-md-4 px-2">
                                <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                                    <div className="card-header p-0 card-heading">
                                        <h4 className="mb-4">Free</h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <h1 className="card-title pricing-card-title my-price-title">$0<small
                                            className="text-dull">/month</small>
                                        </h1>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <ul className="list-unstyled list-pricing mt-3 mb-4">
                                            <li>1 Domain</li>
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <div className="mt-4">
                                            <a href="signup.html" className="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                                                free</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                                    <div className="card-header p-0 card-heading">
                                        <h4 className="mb-4">Regular <span className="label label-popular">Popular</span></h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <h1 className="card-title pricing-card-title my-price-title">$49<small
                                            className="text-dull">/month</small>
                                        </h1>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <ul className="list-unstyled list-pricing mt-3 mb-4">
                                            <li>10 Domain</li>
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <div className="mt-4">
                                            <a href="#" className="btn btn-lg btn-primary btn-style">Get started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                                    <div className="card-header p-0 card-heading">
                                        <h4 className="mb-4">Premium</h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <h1 className="card-title pricing-card-title my-price-title">$199<small
                                            className="text-dull">/month</small>
                                        </h1>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <ul className="list-unstyled list-pricing mt-3 mb-4">
                                            <li>30 Domain</li>
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <div className="mt-4">
                                            <a href="#" className="btn btn-lg btn-outline-primary btn-style border-btn">Contact us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Pricing;

