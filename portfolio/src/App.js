import React from 'react';
import NavBar from './components/navbar/navbar'
import './App.css';
import MagicBall from './components/magic8ball/Home';
import About from './components/tabs/about/about'
import Contact from './components/tabs/contact/contact'
import Projects from './components/tabs/projects/projects'
import Home from './components/tabs/home/home'
import { Route, Switch } from 'react-router-dom'
import Snow from './components/svg/snowSVG'
import Drums from './components/tabs/drum/drum';
import Resume from './components/tabs/resume/resume'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/magic8ball' component={MagicBall}/>
        <Route exact path='/drum' component={Drums}/>
        <Route exact path='/resume' component={Resume}/>
      </Switch>
      <Snow />
    </div>
  );
}

export default App;
