import React, { Component } from 'react';
import './App.css';
import Signin from './components/signIn/signIn';
import Cardstack from './components/cardstack';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';
import Geolocated from './components/signIn/geolocated';


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
      whichAPI: `https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
      type: 'parks',
      pickedAnAPI: false
    }
    this.getAnAPI = this.getAnAPI.bind(this);
  }

  getAnAPI(){

    var apiNumber = Math.floor(Math.random() * 3);
    console.log("apiNumber", apiNumber);

    switch(apiNumber) {
      case 0:
          this.setState
          ({
            whichAPI:`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
            type: 'parks',
            pickedAnAPI: true
          })
          break;
      case 1:
          this.setState
          ({
            whichAPI:`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
            type: 'art',
            pickedAnAPI: true
          })
          break;
      case 2: 
        this.setState
        ({
          whichAPI:`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
          type: 'history',
          pickedAnAPI: true
        })
        break;         
  }
  }

  componentDidMount(){
    this.getAnAPI();
  }


  render() {
    if(this.state.pickedAnAPI){
    return (
      <div>
        {/* <Signin /> */}
        {/* <Cardstack /> */}
        <Geolocated />
        <NashvilleOpenData url={this.state.whichAPI} dataType={this.state.type} />
      </div>
    )
  }else{
    return(
    <div>
      Loading....
    </div>
    )
  }
}
}

export default App;
