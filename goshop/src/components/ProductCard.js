import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch_1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}>
                <Link to="/product/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={wish} alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="product" />
                        <img src={watch1} className='img-fluid' alt="product" />
                    </div>

                    <div className="product-details">
                        <h6 className="brand">Hermes</h6>
                        <h5 className="product-title">
                            Kids Headphone bulk 10 multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={true}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptates officiis laborum doloremque. Voluptatum, quibusdam.
                        </p>
                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src={prodcompare} alt="compare" />
                            </Link>
                            <Link>
                                <img src={view} alt="view" />
                            </Link>
                            <Link>
                                <img src={addcart} alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={wish} alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src={watch} className='img-fluid' alt="product" />
                    <img src={watch1} className='img-fluid' alt="product" />
                </div>

                <div className="product-details">
                    <h6 className="brand">Hermes</h6>
                    <h5 className="product-title">
                        Kids Headphone bulk 10 multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad saepe deserunt quod adipisci odit, magnam pariatur doloribus dicta quia.
                    </p>
                    <p className="price">$100.00</p>
                </div>

                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src={prodcompare} alt="compare" />
                        </Link>
                        <Link>
                            <img src={view} alt="view" />
                        </Link>
                        <Link>
                            <img src={addcart} alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
            </div>
        </>
    );
};

export default ProductCard