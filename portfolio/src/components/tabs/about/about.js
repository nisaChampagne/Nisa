import React from 'react'
import './about.scss';
import Snow from '../../svg/snowSVG'



class Click extends React.Component {
  constructor(){
      super();
      this.state = {render:''}
  }
  handleClick(cardName, e){
      console.log(cardName);
      this.setState({render:cardName});        
  }
  _renderSubComp(){
      switch(this.state.render){
          case 'About Me': return <About1/>
          case 'My Stack' : return <About2/>
      }
  }
  render() {
      return (
          <div className="cards">
              <ul className="aboutUl">
                  <li className="li1" onClick={this.handleClick.bind(this, 'About Me')}>About Me</li>
                  <li className="li2" onClick={this.handleClick.bind(this, 'My Stack')}>My Stack</li>
              </ul>
              {this._renderSubComp()}
              <Snow />
          </div>
      );
  }
}
export default Click;

class About1 extends React.Component{
  render(){
    return(
        <div className="aboutContainer">
        <div className="Info">
          <h1 className='aboutInfoh1'>Hi, I'm Nisa.</h1>
          <div className="text">
            <div className="aboutText">
              <p className='aboutInfoP'>Based out of northwest Ohio.Fueled by my passion for understanding the ins and out
              of web development. I would consider myself a forever student, 
              eager to both build on my academic foundations in web development and cyber security.
              Check out my projects in the projects tab!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class About2 extends React.Component{
  render(){
    return(
        <div className="aboutContainer">
        <div className="Info">
          <h1 className='aboutInfoh1'>Skills</h1>
          <div className="text">
            <div className="aboutText">
              <h2 className="aboutInfoh2">Languages</h2>
              <hr/>
              <p className='aboutInfoP'>HTML</p>
              <br/>
              <p className='aboutInfoP'>CSS</p>
              <br/>
              <p className='aboutInfoP'>JavaScript</p>
              <br/>
              <p className='aboutInfoP'>Java</p>
              <br />
              <h2 className="aboutInfoh2">Frameworks and Libraries</h2>
              <hr />
              <p className='aboutInfoP'>ReactJS</p>
              <br/>
              <p className='aboutInfoP'>LESS/SASS</p>
              <br/>
              <p className='aboutInfoP'>Bootstrap</p>
              <br/>
              <p className='aboutInfoP'>Semantic-UI</p>
              <br/>
              <p className='aboutInfoP'>Redux</p>
              <br/>
              <p className='aboutInfoP'>Styled-Components</p>
              <br />
              <h2 className="aboutInfoh2">Databases</h2>
              <hr />
              <p className='aboutInfoP'>PostgeSQL</p>
              <br />
              <h2 className="aboutInfoh2">Version Control</h2>
              <hr />
              <p className='aboutInfoP'>Git</p>
              <br/>
              <p className='aboutInfoP'>Github</p>
              <br/>
              <p className='aboutInfoP'>Heroku</p>
              <br/>
              <p className='aboutInfoP'>Zeit</p>
              <br/>
              <p className='aboutInfoP'>Terminal</p>
              <br/>
              <p className='aboutInfoP'>Windows</p>
              <br />
              <h2 className="aboutInfoh2">Software Development</h2>
              <hr />
              <p className='aboutInfoP'>Pair Programming</p>
              <br/>
              <p className='aboutInfoP'>Object Oriented Programming</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}