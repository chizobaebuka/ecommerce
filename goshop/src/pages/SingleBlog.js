import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs"

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"}/>
            <BreadCrumb title="Dynamic Blog Name" />

            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'> <BsArrowLeft className='fs-5'/> Go back to blogs</Link>
                                <h3 className="title">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog-1" />
                                <p>Experience sound like never before with virtual reality. Immerse yourself in a world where every whisper, every footstep, and every note is so real, you'll forget you're not actually there.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;