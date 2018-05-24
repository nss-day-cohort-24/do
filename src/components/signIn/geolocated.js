import React from 'react';
import {geolocated} from 'react-geolocated';
import Radius from './raduis';
import gif from '../images/loading.gif'


class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat:'',
            long: '',
            time:false,
            locations: []
        }
    }
    
    
    componentDidMount(){


        // fetch for the History api
        fetch(`https://data.nashville.gov/resource/m4hn-ihe4.json?$limit=99`)
        .then(data => data.json())
        .then((data) => {
                data.map((item, index) => {
                  if(item.latitude)
                    this.state.locations[item.title] = {latitude: Number(item.latitude), longitude: Number(item.longitude)}  
                    })  
        })

        // fetch for the Art api
        fetch(`https://data.nashville.gov/resource/xakp-ess3.json?$limit=99`)
        .then(data => data.json())
        .then((data) => {
                data.map((item, index) => {
                  if(item.latitude)
                    this.state.locations[item.title] = {latitude: Number(item.latitude), longitude: Number(item.longitude)}  
                    })  
        })

        // fetch for the Parks api
        fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=99`)
        .then(data => data.json())
        .then((data) => {
                data.map((item, index) => {
                        this.state.locations[item.park_name] = {latitude: Number(item.mapped_location.coordinates[1]), longitude: Number(item.mapped_location.coordinates[0])}  
                    })  
                })
        
    }




    render() {
        return !this.props.isGeolocationAvailable
        ? <div className="text-center">Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div className="text-center">Geolocation is not enabled</div>
            : this.props.coords
            ? 
                <Radius 
                lat={this.props.coords.latitude}
                long={this.props.coords.longitude} 
                array={this.state.locations}/>
                
            :  
            <div>
                <p className="text-center">Finding your location...</p>  
                <img className="img-thumbnail border-0" src={gif} alt="" />
            </div>
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
//   userDecisionTimeout: 4000,
})(Demo);