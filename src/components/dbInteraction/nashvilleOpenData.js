import React, { Component } from 'react';

//test string for querying database
var name = "Potters Field";
//test string for querying database
var query = `?$where=park_name="${name}"`

var parksAPI = 
{
  link:`https://data.nashville.gov/resource/xbru-cfzi.json$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
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
    fetch(url)
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

  //print parks
  if(this.state.dataLoaded && this.state.dataType === 'parks'){
  console.log("this.state.dataType in render" ,this.state.dataType);
      var somedata= this.state.data.map((item,index) =>{
      return (
        <div id={item.park_name} key={index}>
          {item.park_name}<br></br>
          {item.mapped_location_address}
        </div>
      )
  });


  //print art
  }else if(this.state.dataLoaded && this.state.dataType === 'art'){
        var somedata =this.state.data.map((item,index) =>{
        console.log(item.park_name.replace(/\s/g, '').toLowerCase());
        return (
          <div id={item.park_name} key={index}>
            {item.park_name}<br></br>
            {item.mapped_location_address}
          </div>
        )
    });



  //print history
  }else if(this.state.dataLoaded && this.state.dataType === 'history'){
    var somedata = this.state.data.map((item,index) =>{
        console.log(item.title);
        return (
          <div id={item.title} key={index}>
            {item.title}<br></br>
            {item.mapped_location_address}
          </div>
        )
    });

    return(
    <div>
    {somedata}
    </div>
    )
  }else if(!this.state.dataLoaded){
    return(
    <div>
      Loading.....
    </div>
    )
  }
}
}

export default NashvilleOpenData;