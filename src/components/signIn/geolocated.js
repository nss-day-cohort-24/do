import React from 'react';
import {geolocated} from 'react-geolocated';
import Radius from './raduis';

 
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat:'',
            long: '',
            time:false
        }
    }




    render() {
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords
            ? 
                <Radius 
                lat={this.props.coords.latitude}
                long={this.props.coords.longitude} />
            :<div></div>
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
//   userDecisionTimeout: 4000,
})(Demo);