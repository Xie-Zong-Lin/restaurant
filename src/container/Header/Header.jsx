import React from 'react';


// import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';



const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">生活如茶，</h1>
      <h1 className="app__header-h1">以茶佐味人生</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in dignissimos, ipsum, earum mollitia laboriosam totam velit laborum consectetur repellat at. Nulla atque dolores officia distinctio eum odit, nihil architecto.</p>
      <button type="button" className="custom__button ">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cover} alt="header img" className="" />
    </div>
  </div>
);

export default Header;
