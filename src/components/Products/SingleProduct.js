import React from 'react';

const SingleProduct = () => {
    return (
        <div className="col-sm-4">
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center">
                        <img src="images/home/product1.jpg" alt=""/>
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#nourl" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div className="product-overlay">
                        <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#nourl" className="btn btn-default add-to-cart">
                                <i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                        <li>
                            <a href="#nourl">
                                <i className="fa fa-plus-square"></i>Add to wishlist</a>
                        </li>
                        <li>
                            <a href="#nourl">
                                <i className="fa fa-plus-square"></i>Add to compare</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;