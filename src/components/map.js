import './profile.css';
import { logout } from './dbInteraction/auth';
import Geolocated from './signIn/geolocated';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import '../App.css';





var API_KEY = 'AIzaSyBFArv5hJebxtu-iUHl_XQYlq4gmuf2Xeo';

export class MapContainer extends React.Component {

  

    render() {
        

        return (

            <div>
                <svg id="details-arrow" onClick={this.props.viewCard} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" /></svg>
                <div>
                    <Map google={this.props.google} zoom={14} className="main-map">
                        <Marker name={'Current location'} />
                    </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(MapContainer)

