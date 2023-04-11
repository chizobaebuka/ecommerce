import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsTwitter, BsPinterest, BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text py-3" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  No. 1259 Freedom, <br /> Texas, Florida <br />
                  PinCode: 110101
                </address>
                <a href="tel: +1 (826) 465 8842" className="mt-3 d-block mb-2 text-white">
                  +1 (826) 465 8842
                </a>
                <a href="mailto: wellinton234@gmail.com" className="mt-2 d-block mb-2 text-white">
                  wellinton234@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsTwitter className='fs-4' />
                  </a>
                  <a className="text-white" href="">
                    <BsFacebook className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsPinterest className='fs-4'/>
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className='fs-4'/>
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ's</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear() }: MarC Holdings </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;