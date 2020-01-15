import React from "react";

import './home.scss'

const Home = React.memo(() => {
  return (
    <div className="homeContainer">
      <div className="homeInfo">
        <h1 className="homeH1">
            Nisa Champagne
        </h1>
        <br />
        <br />
        <br />
        <div className="text">
          <div className='homeShort'>
            <p className='descriptionOnHome1'>Full stack web developer by day.<br /> Artist by night.</p> 
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;