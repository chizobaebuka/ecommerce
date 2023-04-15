import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { ImHome3 } from "react-icons/im";
import { MdCall, MdEmail } from "react-icons/md"
import { BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"}/>
            <BreadCrumb title="Contact Us" /> 
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220449.42842641528!2d-97.92055340078468!3d30.307657628451597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1681561646213!5m2!1sen!2sng" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between ">
                                <div>
                                    <h3 className="contact-title  mb-4">Contact</h3>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="text" className="form-control" placeholder='Name' />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder='Email' />
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder='Mobile Number'/>
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control"' cols="30" rows="4" placeholder='Comments'></textarea> 
                                        </div>
                                        <div>
                                            <button className="button border-0">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title  mb-4">Get In Touch WIth Us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <ImHome3 className='fs-5'/>
                                                <address className='mb-0'>No 129 Freedom, Texas Florida</address>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <MdCall className='fs-5'/>
                                                <a href="+1 (826) 465 8842">+1 (826) 465 8842</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <MdEmail className='fs-5'/>
                                                <a href="mailto:wellinton234@gmail.com">wellinton234@gmail.com</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <BsInfoCircleFill className='fs-5'/>
                                                <p className='mb-0'>Monday - Friday 1AM - 8PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;