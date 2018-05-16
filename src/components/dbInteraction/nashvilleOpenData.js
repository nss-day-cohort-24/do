import React, { Component } from 'react';

//test string for querying database
var name = "Potters Field";
//test string for querying database
var query = `?$where=park_name="${name}`

var parksAPI = 
{
  link:'https://data.nashville.gov/resource/xbru-cfzi.json',
  type: 'parks'
}
var historyAPI = 
{
  link:'https://data.nashville.gov/resource/m4hn-ihe4.json',
  type: 'history'
};
var artAPI = 
{
  link: 'https://data.nashville.gov/resource/xakp-ess3.json',
  type: 'art'
};

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
  getThatAPI(url, type,name){
    console.log("getThatAPI url", url+name);
    console.log("getThatAPI type", type);
    fetch(url+name)
    .then(data => data.json())
    .then((data) => {
      console.log(data);
      this.setState({data: data, dataLoaded: true, dataType: type});
    })
  }

  componentDidMount(){
    this.getThatAPI(this.props.url, this.props.dataType,this.props.name);
  }
  
  render() {

  // if type "park" print 
  if(this.state.dataLoaded && this.state.dataType === 'parks'){
  console.log("this.state.dataType in render" ,this.state.dataType);
  var somedata = this.state.data.map((item,index) =>{
    // inside here will go the POI objects which we will pass props to.
      return (
        <div key={index}>
          {item.park_name}<br></br>
          {item.mapped_location_address}
        </div>
      )
  });
  }else if(this.state.dataLoaded && this.state.dataType === 'art'){
   // inside here will go the POI objects which we will pass props to.
    return (<div>art data</div>)
  }else if(this.state.dataLoaded && this.state.dataType === 'history'){
    return(<div>history data </div>)
  }

  if(this.state.dataLoaded){
    console.log(somedata);
    return (
      <div>
        {somedata}
      </div>
    );
  }
  else if(!this.state.dataLoaded){
    return(
    <div>
      Loading.....
    </div>
    )
  }
}
}

export default NashvilleOpenData;