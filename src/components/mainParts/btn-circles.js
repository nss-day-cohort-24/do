import React, { Component } from 'react';
import times from '../images/times.svg';
import heart from '../images/heart.svg';
import arrow from '../images/undo-alt.svg';
import marker from '../images/btn-map-marker.svg';
import './btn-circles.css';
import { SaveObjToFB  } from '../dbInteraction/FB-function';


var user, poi, type;

class CircleButtons extends Component {

    constructor(props){
        super(props)

        this.favoriteAPlace = this.favoriteAPlace.bind(this);
    }


    favoriteAPlace(){

        type = this.props.dataType;
        user = this.props.user.uid;
        poi = this.props.parkname;

        var FBObj = {
            userUID : user,
            poi : poi,
            type: type
        }

        console.log('trying to favorite a place', user, poi,type);
        SaveObjToFB("favorites", FBObj);
    }



    render() {
    
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
                        <img onClick={this.favoriteAPlace} src={heart} alt="green heart"/>
                    </button>
                </div>
                <div>
                    <button className="smallCircleRightButton">
                        <img src={marker} alt="blue map marker" onClick={this.props.viewMap}/>
                    </button>
                </div>
            </div>
        )
    }   
}

export default CircleButtons