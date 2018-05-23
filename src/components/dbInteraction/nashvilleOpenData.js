import React, { Component } from 'react';
import CardStack from '../cardstack'; 
import Hammer from 'hammerjs';

var name = "Potters Field";
//test string for querying database
var query = `?$where=park_name="${name}"`


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
    this.hammer.on('swipe', this.pickAUrlAndCallAPI);
}

logSwipe(event){
  console.log(event);
}

// function that takes API url and dataType 
  pickAUrlAndCallAPI(){
    console.log('trying to pickAUrlAndCallAPI');
    switch(Math.floor(Math.random() * 3)) {
      case 0:
          var url = `https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;
          fetch(url)
          .then(data => data.json())
          .then((data) => {
            console.log('data from case0:', data);
            this.renderData(data, 'parks');
          })
          break;
      case 1:
          var url = `https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`
          fetch(url)
          .then(data => data.json())
          .then((data) => {
            console.log('data from case1:', data)
            this.renderData(data, 'art');
          })
          break;
      case 2:
          var url = `https://data.nashville.gov/resource/m4hn-ihe4.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;
          fetch(url)
          .then(data => data.json())
          .then((data) => {
            console.log('data from case2:', data);
            this.renderData(data, 'history');
          })   
          break;  
  }
  }

  renderData(data, type){
    this.setState({data: data, dataLoaded: true, dataType: type})
  }

  componentDidMount(){
    console.log('nashville open data mounted');
    this.pickAUrlAndCallAPI();
  }
  
  render() {  


//print parks
if(this.state.dataLoaded  && this.state.dataType === 'parks'){
  console.log("park api");
  var dataStuff = this.state.data;
  console.log("parks data", dataStuff);
    return (<CardStack  newPoi={this.pickAUrlAndCallAPI} info={dataStuff} name={dataStuff[0].park_name} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].mapped_location_address}/>)


// print art
}else if(this.state.dataLoaded && this.state.dataType === 'art'){
  console.log("art api");
  var dataStuff = this.state.data;
  console.log("art data", dataStuff);
  return (<CardStack  newPoi={this.pickAUrlAndCallAPI} picture ={dataStuff[0].photo_link} info={dataStuff} name={dataStuff[0].title} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].location}/>)

//print history
}else if(this.state.dataLoaded && this.state.dataType === 'history'){
  console.log("history api");
  var dataStuff = this.state.data;
  console.log("history data", dataStuff);
  return (<CardStack  newPoi={this.pickAUrlAndCallAPI} info={dataStuff} name={dataStuff[0].title} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].location} />)
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