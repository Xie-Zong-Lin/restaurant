import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';


 import images  from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [ toggleMenu , setToggleMenu ] = useState(false);

  return(
    <nav className="app__navbar"> 
      <div className="app__navbar-logo"> 
        <Link to="/"><img src={images.ching} alt="app logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / Register</a>
        <div/>
        <Link to="/OrderList" className="p__opensans">OrderList</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        {/* 如果toggleMenu狀態為true 顯示以下清單 */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
              <li className="p__opensans"><Link to="/OrderList">OrderList</Link></li>
            </ul>
          </div>
        )}
      </div>  
    </nav>
  )
};

export default Navbar;
