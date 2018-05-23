import React, { Component } from 'react';
// import { googleProvider, rebase } from './components/dbInteraction/base';
import './App.css';
import Signin from './components/signIn/signIn';
// import ParkDetails from './components/parkdetails';
// import Cardstack from './components/cardstack';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';
// import Geolocated from './components/signIn/geolocated';


// var name = "Potters Field";
//test string for querying database
// var query = `?$where=park_name="${name}"`

// var parksAPI = 
// {
//   link:`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
//   type: 'parks'
// }

// var historyAPI = 
// {
//   link:`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
//   type: 'history'
// };

// var artAPI = 
// {
//   link: `https://data.nashville.gov/resource/xakp-ess3.json$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
//   type: 'art'
// };


class App extends Component {

  constructor(props){

    super(props)
    this.state={
      openData: false,
      apiNumber: '',
      swiped: false,
      authed: false,
    }
    this.changeAuth = this.changeAuth.bind(this);
    this.logoutApp = this.logoutApp.bind(this);
    this.reRenderOpenData = this.reRenderOpenData.bind(this);


  }

  reRenderOpenData(boo){
    this.setState({openData: boo})
  }

  changeAuth(user){
    this.setState({
      authed: true,
      user: user,
      openData: true
    })
  }

  logoutApp(){
    this.setState({
      authed: false,

    })
  }

  render() {
   
    if (!this.state.authed) {
      return(
        <Signin  changeAuth={this.changeAuth}/>
      );
    }
    else if (this.state.authed && this.state.openData) {
      // console.log('trying to render nashvilleopendata component');
      return(
        <NashvilleOpenData reRenderOpenData={this.reRenderOpenData} user={this.state.user} logoutApp={this.logoutApp}/>
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
