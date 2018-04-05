import React from 'react';
import HomeSocial from './HomeSocial';
import '../../styles/home.css';
// import logo from "../../Images/logo3.png";

const Home = () => {
  return (
    <div>
      <div className="home-main" >
        {/* <img src={logo} id="home-logo" alt="" /> */}
        <h1>&lt;Abdul Imran &#8725;&gt;</h1>
        <h2 className="home-subtitle" >Web Designer and Developer</h2>
      </div>
      <HomeSocial />
    </div>
  );
};

export default Home;
