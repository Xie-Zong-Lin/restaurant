import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';


 import images  from '../../constants/images';
import './OrderNavbar.css';

const OrderNavbar = () => {
  const [ toggleMenu , setToggleMenu ] = useState(false);

  return(
    <nav className="app__navbar"> 
      <div className="app__navbar-logo"> 
        <Link to="/"><img src={images.ching} alt="app logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/ShoppingCart">Shopping-Cart</Link></li>

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
              <li className="p__opensans"><Link to="/">Home</Link></li>
              <li className="p__opensans"><Link to="/ShoppingCart">Shopping-Cart</Link></li>

            </ul>
          </div>
        )}
      </div>  
    </nav>
  )
};

export default OrderNavbar;
