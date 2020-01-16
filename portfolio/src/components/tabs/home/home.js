import React from "react";

import './home.scss'

const Home = () => {

  setTimeout(function() {
    window.location.href = "https://portfolio.nchampag23.now.sh/about";
  }, 8000);

  return (
    <div className="homeContainer">
      <div className="homeInfo">
        <h1 className="homeH1">
            Nisa Champagne
        </h1>
        <br />
        <br />
        <br />
        <div className="window">
          <div className='terminal'>
            <p className="command">git clone Nisas-Portfolio</p>
            <p className='log'>
              <span>
              Full stack web developer by day.<br />
              Artist by night.<br />
              From Stryker, Ohio.<br />
              Ready for my next adventure.<br />
              Let's get started!
              </span>
              </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;