import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import SignIn from './components/SignIn/SignIn';
import Scroll from './components/Scroll/Scroll'
import Boxes from './components/Boxes/Boxes';
import Footer from './components/Footer/Footer';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 100
      }
    },
    move: {
      direction: "bottom-right",
      enable:true,
      random: true,
      speed: 3    
    },
    interactivity: {
      onhover: {
        enable:true,
        mode: "grab"
      }
    },
  }
}

const initialState = {
      input:'',
      imageUrl: '',
      box: {},
      route: 'SignIn',
      isSignedIn: false, 
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
}

  loaduser = (data) => {
    this.setState({user:{
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if(route === 'SignOut'){
      this.setState(initialState);
    } else if (route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Particles className='particles'
          params={particlesOptions}
        />
          {route === 'home' 
          ? <div>
          <Logo/>
          <Scroll>
          <Boxes name = {this.state.user.name}/>
          </Scroll>
          <Footer/>
          </div>
          :(
          route === 'SignIn'
          ?<SignIn loaduser = {this.loaduser} onRouteChange={this.onRouteChange}/>
          :<Register loaduser = {this.loaduser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
