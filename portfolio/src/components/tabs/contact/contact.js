import React from "react";
import GH from './github.png'
import Twitter from './twitter.png'
import LinkedIn from './linked.png'

import './contact.scss';


export default function Contact(){
    return (
      <div>
        <div className="contactContainer">
          <div>
            <div className="companyinfo">
              <h1 className='contactH1'>Let's Connect!</h1>
                <div className="contactText">
                  <i className="phone" /> (813) 344 - 8993
                </div>
                <div className="contactText">
                  <i className="email" /> nchampag23@gmail.com
                </div>
                <div className='socialsHolder'>
                <div className="contactText">
                  <a href='https://twitter.com/nisa_Champagne' className='socials'><img src={Twitter} className='twitter' alt='twitter logo' width="40px" height="40px" /></a>
                </div>
                <div className="contactText">
                  <a href='https://github.com/nisaChampagne' className='socials'><img src={GH} className='gh' alt='github logo' width="40px" height="40px" /></a>
                </div>
                <div className="contactText">
                  <a href="https://www.linkedin.com/in/nisa-champagne-32782b182/" className='socials' ><img src={LinkedIn} className='linkedin' alt='linkedin logo' width="40px" height="40px" /></a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }