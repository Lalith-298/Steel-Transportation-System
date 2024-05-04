import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Buy Steel on India's Largest Network of Steel Traders and get delivered in 3-5 days.</p>
            <div className="footer-social-icons">
               <a href="https://www.facebook.com/" target='/blank'> <img src={assets.facebook_icon} alt="" /></a>
               <a href="https://twitter.com/?lang=en" target='/blank'> <img src={assets.twitter_icon} alt="" /></a>
               <a href="https://www.linkedin.com/" target='/blank'> <img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Steel Services</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 - 9687562345</li>
                <li>contact@steelservices.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © SteelServices.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
