import React from 'react';
import {geolocated} from 'react-geolocated';
import Radius from './raduis';

 
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat:'',
            long: ''
        }
    }



    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                lat: this.props.coords.latitude,
                long: this.props.coords.longitude
            });
            console.log('you are here: ', this.state.lat, this.state.long);
            

        }, 4500);
    }

    render() {
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.state.lat
            ? 
                <Radius 
                lat={this.state.lat}
                long={this.state.long} />
            : <div>Hang on, im looking for you&hellip; </div>
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
//   userDecisionTimeout: 4000,
})(Demo);