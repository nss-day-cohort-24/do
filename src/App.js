import React, { Component } from 'react';
import { googleProvider, rebase } from './components/dbInteraction/base';
import './App.css';
import Signin from './components/signIn/signIn';
import ParkDetails from './components/parkdetails';
import Cardstack from './components/cardstack';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';
import Hammer from 'hammerjs';
import Geolocated from './components/signIn/geolocated';
import { SaveObjToFB } from './components/dbInteraction/auth';
import SaveComment from './components/dbInteraction/FB-comments';

const fakeObj = {name: "amber", last: "sharpe"};

<SaveComment uid="usersid" parkName="Park Name" commentText="This is a new comment." />


var name = "Potters Field";
//test string for querying database
var query = `?$where=park_name="${name}"`

var parksAPI = 
{
  link:`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
  type: 'parks'
}

var historyAPI = 
{
  link:`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
  type: 'history'
};

var artAPI = 
{
  link: `https://data.nashville.gov/resource/xakp-ess3.json$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
  type: 'art'
};


class App extends Component {


  constructor(props){

    super(props)
    this.state={
      pickedAnAPI: false,
      apiNumber: '',
      swiped: false,
      authed: false,
    }

    // this.logSwipe = this.logSwipe.bind(this);
    this.getAnAPI = this.getAnAPI.bind(this);
    this.swipeAnAPI = this.swipeAnAPI.bind(this);
    this.changeAuth = this.changeAuth.bind(this);
    this.logoutApp = this.logoutApp.bind(this);

    this.hammer = new Hammer(document.body, {preventDefault: true});
    this.hammer.on('swipe', this.swipeAnAPI);
  }

  swipeAnAPI(){
    this.setState({pickedAnAPI: false});
    this.getAnAPI();
  }

  getAnAPI(){
    this.setState({
      apiNumber: Math.floor(Math.random() * 3),
      pickedAnAPI: true
    })
  }

  changeAuth(user){
    this.setState({
      authed: true,
      user: user,
      pickedAnAPI: true
    })
  }

  logoutApp(){
    this.setState({
      authed: false,
      // user: user,
      // pickedAnAPI: true
    })
  }

  componentDidMount(){
    this.getAnAPI();
  }

  render() {    
    if (!this.state.authed) {
      return(
        <Signin  changeAuth={this.changeAuth}/>
      );
    }
    else if (this.state.authed && this.state.pickedAnAPI) {
      return(
        <NashvilleOpenData api={this.state.apiNumber} user={this.state.user} logoutApp={this.logoutApp} />
      )
    }else{
      return(
      <div>
        LOADING....
      </div>
      )
    }
}
}

export default App;
