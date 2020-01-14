import React from "react";
import Dev from './devfolio.jpg'

const Home = React.memo(() => {
  return (
    <div className="homeContainer">
      <div className="homeInfo">
        <h1>
            Nisa Champagne
        </h1>
        <div className="text">
          <div className='homeShort'>
            <img src={Dev} className='icon' alt='developer' /> 
            <p className='descriptionOnHome'>Full stack web developer by day.</p> 
            <br />
            <p className='descriptionOnHome'>Artist by night</p>
          </div>
        </div>
        <img
          src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/60542009_10219123148534277_1429164283438039040_n.jpg?_nc_cat=106&_nc_oc=AQly8WbgVMyME79P2P7semUDgi0XemydnCl9ZDaOnubPf3NAFkNAbhDpRXtwr0UNG3g&_nc_ht=scontent-iad3-1.xx&oh=ad6c49a4c9f13c26142f0b4485b2c3ce&oe=5E11E76D'
          alt="Nisa"
          width="300" height="400" 
          className="NisasPhoto"
        />
      </div>
    </div>
  );
});

export default Home;