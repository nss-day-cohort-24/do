import React, { Component } from 'react';
import times from '../images/times.svg';
import heart from '../images/heart.svg';
import arrow from '../images/undo-alt.svg';
import marker from '../images/btn-map-marker.svg';
import './btn-circles.css';
// import { SaveObjToFB  } from '../dbInteraction/auth';


class CircleButtons extends Component {

    greenHeartButton(user, parkname) {
        console.log(user, parkname);
        // push uid, park name to firebase 
        // calls the next random api   
    }
    
    redExButton() {
        // calls the next random api
    }

    render() {

    const userUID = this.props.user.uid;
    const parkname = this.props.parkname;
    console.log("circle-userUID", userUID);
    console.log("park-name", parkname);

    const parkObj = {
        userUID: userUID,
        parkname: parkname
    }
    console.log(parkObj)

    // SaveObjToFB('matches', parkObj);

    function clickOnHeartButton(fbFunction) {

 
    }

        return (
            <div className="d-flex">
                <div>
                    <button className="smallCircleLeftButton">
                        <img  src={arrow} alt="yellow circular arrow"/>
                    </button> 
                </div>
                <div>   
                    <button className="largeCircleButton">
                        <img src={times} alt="red letter X"/>    
                    </button>
                </div>
                <div>
                    <button className="largeCircleButton">
                        <img src={heart} alt="green heart"/>
                    </button>
                </div>
                <div>
                    <button className="smallCircleRightButton">
                        <img src={marker} alt="blue map marker"/>
                    </button>
                </div>
            </div>
        )
    }   
}

export default CircleButtons