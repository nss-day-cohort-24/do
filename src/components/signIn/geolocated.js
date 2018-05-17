import React from 'react';
import {geolocated} from 'react-geolocated';
 
class Demo extends React.Component {




    componentDidMount = () => {
        setTimeout(() => {
            let lat = this.props.coords.latitude;
            let long = this.props.coords.longitude;
            console.log('you are here: ', lat, long);
            

        }, 4500);
    }

    render() {
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords
            ? <table>
                <tbody>
                <tr><td>Found you</td></tr>
                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                </tbody>
            </table>
            : <div>Hang on, im looking for you&hellip; </div>;
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 4000,
})(Demo);