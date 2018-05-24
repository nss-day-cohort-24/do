import React, { Component } from 'react';
import CardStack from '../cardstack'; 
import Hammer from 'hammerjs';

// var name = "Potters Field";
//test string for querying database
// var query = `?$where=park_name="${name}"`
var lastLocation = [];


class NashvilleOpenData extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      dataLoaded: false,
      dataType: []
    }
    this.renderData = this.renderData.bind(this);
    this.hammer = new Hammer(document.body, {preventDefault: true});
    this.logSwipe = this.logSwipe.bind(this);
    this.pickAUrlAndCallAPI = this.pickAUrlAndCallAPI.bind(this);
    this.showLast = this.showLast.bind(this);
    this.hammer.on('swipe', this.pickAUrlAndCallAPI);
}

logSwipe(event){
  // console.log(event);
}

// function that takes API url and dataType 
  pickAUrlAndCallAPI(){
    var url;
    switch(Math.floor(Math.random() * 3)) {
      case 0:
           url = `https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;
          fetch(url)
          .then(data => data.json())
          .then((data) => {
            this.renderData(data, 'parks');
          })
          break;
      case 1:
           url = `https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`
          fetch(url)
          .then(data => data.json())
          .then((data) => {
            this.renderData(data, 'art');
          })
          break;
      case 2:
           url = `https://data.nashville.gov/resource/m4hn-ihe4.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;
          fetch(url)
          .then(data => data.json())
          .then((data) => {
            this.renderData(data, 'history');
          })   
          break;  
          
  }
  }

  renderData(data, type){
    //  console.log('lastLocation length', lastLocation.length);
    if(lastLocation.length <= 1){
      var location = {
        info: data,
        type: type
      }
      lastLocation.push(location);
      // console.log('last location array push', lastLocation);
    }else if(lastLocation.length === 2){
      lastLocation.splice(0,1);
        location = {
        info: data,
        type: type
      }
      lastLocation.push(location);
      // console.log('last location array splice', lastLocation);
    }
    this.setState({data: data, dataLoaded: true, dataType: type})
  }

  showLast(){
    var info = lastLocation[0].info;
    var type = lastLocation[0].type;

    if(lastLocation.length >= 2){
    var location = {
      info: info,
      type: type
    }
    lastLocation.splice(0,1);
    lastLocation.push(location);
    this.setState({data: info, dataLoaded: true, dataType: type });
    }
  }

  componentDidMount(){
    // console.log('nashville open data mounted');
    this.pickAUrlAndCallAPI();
  }
  
  render() {  

var dataStuff;
//print parks
if(this.state.dataLoaded  && this.state.dataType === 'parks'){
   dataStuff = this.state.data;
    return (<CardStack  showLast={this.showLast} newPoi={this.pickAUrlAndCallAPI} info={dataStuff} name={dataStuff[0].park_name} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].mapped_location_address}/>)


// print art
}else if(this.state.dataLoaded && this.state.dataType === 'art'){
   dataStuff = this.state.data; 
  return (<CardStack showLast={this.showLast} newPoi={this.pickAUrlAndCallAPI} picture ={dataStuff[0].photo_link} info={dataStuff} name={dataStuff[0].title} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].location}/>)

//print history
}else if(this.state.dataLoaded && this.state.dataType === 'history'){
   dataStuff = this.state.data;
  return (<CardStack  showLast={this.showLast} newPoi={this.pickAUrlAndCallAPI} info={dataStuff} name={dataStuff[0].title} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].location} />)
}else if (!this.state.dataLoaded){
    return(
      <div>
        Loading....
      </div>

        )
      }
}
}

export default NashvilleOpenData;