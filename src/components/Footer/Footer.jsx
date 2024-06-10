/* eslint-disable no-unused-vars */
import React from 'react';
import '../Footer/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import footer from '../../assets/img/photo (1).svg'

const Footer = () => {
  return (
    <div id='footer'>
        <img className='footer-img' src={footer} alt="" />
      <div className="footer-container">
        <div className="footer">
          <h1>LOGO</h1>
          <div className='contectns'>
            <div>
              <p>Contacts:</p>
              <h3>shop@coffee.com</h3>
              <h3>+1 (999) 999-9999</h3>
              <div className='footer_icons'>
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
              </div>
            </div>
            <div className='location'>
              <p>Location:</p>
              <h3>Куренкеева 138</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;