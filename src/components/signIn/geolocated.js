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



    componentDidMount = () => {
        if(this.props.isGeolocationEnabled) {
            setTimeout(() => {
                this.setState({
                    lat: this.props.coords.latitude,
                    long: this.props.coords.longitude,
                    time: true

                });
                console.log('you are here: ', this.state.lat, this.state.long);
                

            }, 4000);
        }   
    }

    render() {
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.state.time
            ? 
                <Radius 
                lat={this.state.lat}
                long={this.state.long} />
            :<div></div>
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
//   userDecisionTimeout: 4000,
})(Demo);