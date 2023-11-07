import React from 'react';
import { FiFacebook,FiTwitter, FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">830高雄市鳳山區五權路109號</p>
        <p className="p__opensans">0921-104-691</p>
        
      </div>
      <div className="app__footer-links_logo">
        <img src={images.ching} alt="footer_logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:'15px'}}  />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>

        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">10:am-8:pm</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">10:am-7:pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 ChING-TEA All Right Reserved</p>
    </div>
  </div>
);

export default Footer;
