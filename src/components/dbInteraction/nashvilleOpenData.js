import React, { Component } from 'react';
import CardStack from '../cardstack'; 

var name = "Potters Field";
//test string for querying database
var query = `?$where=park_name="${name}"`

// var parksAPI = `https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;
// var historyAPI = `https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;
// var artAPI = `https://data.nashville.gov/resource/m4hn-ihe4.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`;

class NashvilleOpenData extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      dataLoaded: false,
      dataType: []
    }
}

// function that takes API url and dataType 
  getThatAPI(apiNumber){
    switch(apiNumber) {
      case 0:
          this.setState({dataType: 'parks', dataLoaded: false})
          this.callTheAPI(`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
          break;
      case 1:
          this.setState({dataType: 'parks', dataLoaded: false})
          this.callTheAPI(`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
          break;
      case 2:
          this.setState({dataType: 'parks', dataLoaded: false})
          this.callTheAPI(`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
      break;        
  }
  }

  // getThatAPI(apiNumber){
  //   switch(apiNumber) {
  //     case 0:
  //         this.setState({dataType: 'parks', dataLoaded: false})
  //         this.callTheAPI(`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
  //         break;
  //     case 1:
  //         this.setState({dataType: 'art',  dataLoaded: false})
  //         this.callTheAPI(`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
  //         break;
  //     case 2:
  //         this.setState({dataType: 'history',  dataLoaded: false})
  //         this.callTheAPI(`https://data.nashville.gov/resource/m4hn-ihe4.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
  //       break;         
  // }
  // }

  callTheAPI(url){
    fetch(url)
    .then(data => data.json())
    .then((data) => {
      this.setState({data: data, dataLoaded: true});
    })
  }

  componentDidMount(){
    this.getThatAPI(this.props.api);
  }
  
  render() {

  //print parks
  if(this.state.dataLoaded  && this.state.dataType === 'parks'){
    console.log("park api");
    var dataStuff = this.state.data;
    console.log("parks data", dataStuff);
      return (<CardStack  info={dataStuff} name={dataStuff[0].park_name} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].mapped_location_address}/>)

  // print art
  }else if(this.state.dataLoaded && this.state.dataType === 'art'){
    console.log("art api");
    var dataStuff = this.state.data;
    console.log("art data", dataStuff);
    return (<CardStack  info={dataStuff} name={dataStuff[0].title} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].location}/>)

  //print history
  }else if(this.state.dataLoaded && this.state.dataType === 'history'){
    console.log("history api");
    var dataStuff = this.state.data;
    console.log("history data", dataStuff);
    return (<CardStack  info={dataStuff} name={dataStuff[0].title} type={this.state.dataType} user={this.props.user} logoutApp={this.props.logoutApp} location={dataStuff[0].location} />)
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