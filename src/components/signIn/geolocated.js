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
                <div>
                    <div className="d-flex justify-content-center mb-4">
                        <div className="mi-styles mx-3">
                            <p>1 mi</p>
                        </div>

                        <div className="mi-styles mx-3">
                            <p>5 mi</p>
                        </div>
                        
                        <div className="mi-styles mx-3">
                            <p>10 mi</p>
                        </div>
                    </div>

                    <Radius 
                    lat={this.props.coords.latitude}
                    long={this.props.coords.longitude} />
                </div>
            :   <div></div>
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
//   userDecisionTimeout: 4000,
})(Demo);