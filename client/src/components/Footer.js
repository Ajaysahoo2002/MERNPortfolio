import React from 'react'
import "./footer.css"
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footerSection'>
            <footer className="footer">
                <div className="container">
                    <p>Copyright © 2023 My Website. All rights reserved.</p>
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
