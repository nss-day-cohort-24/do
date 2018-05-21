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
          this.setState({dataType: 'art',  dataLoaded: false})
          this.callTheAPI(`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
          break;
      case 2:
          this.setState({dataType: 'history',  dataLoaded: false})
          this.callTheAPI(`https://data.nashville.gov/resource/m4hn-ihe4.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`);
        break;         
  }
  }

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
  var dataStuff = this.state.data;
      return (<CardStack  name={dataStuff[0].park_name} type={this.state.dataType}  />)

  // print art
  }else if(this.state.dataLoaded && this.state.dataType === 'art'){
    var dataStuff = this.state.data;
        return (<CardStack name={dataStuff[0].title} type={this.state.dataType}  />)

  //print history
  }else if(this.state.dataLoaded && this.state.dataType === 'history'){
    var dataStuff = this.state.data;
        return (<CardStack name={dataStuff[0].title} type={this.state.dataType}  />)
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