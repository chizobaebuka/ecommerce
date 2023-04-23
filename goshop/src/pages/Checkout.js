import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import tab from "../images/tab.jpg";


const Checkout = () => {
    return (
        <>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">McZoba</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark total-price' to="/cart">Cart</Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item  total-price active" aria-current="page">
                                            Information
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active">
                                            Shipping
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>

                                <h4 className="title total">Contact Information</h4>
                                <p className="user-details">Nelson Handerson (nelsonhander212@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'> 
                                        <select name="" className='form-control form-select' id="">
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='First Name' className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Last Name' className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Apartment, Suite, etc' className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='City' className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="" selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Zip Code' className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex gap-15 justify-content-between align-items-center">
                                            <Link to="/cart" className='text-dark'><BiArrowBack className='mb-2'/> Return to Cart</Link>
                                            <Link to="/cart" className='button'>Continue Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className="d-flex gap-10 mb-2 align-items-center">
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span style={{ top: "-10px", right: "2px" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                            <img className='img-fluid' src={tab} alt="product" />
                                        </div>

                                        <div>
                                            <h5 className="total">Honor T1 7.0 1GB RAM 8 GB ROM 7 inch <br /> with Wi-Fi + 3G Tablet</h5>
                                            <p className='total-price'>s / #ghshsjs </p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$100.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Subtotal</p>
                                    <p className="total-price">$200.00</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$19.65</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$219.65</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;