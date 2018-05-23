import React, { Component } from 'react';
import times from '../images/times.svg';
import heart from '../images/heart.svg';
import arrow from '../images/undo-alt.svg';
import marker from '../images/btn-map-marker.svg';
import './btn-circles.css';
import { SaveObjToFB  } from '../dbInteraction/FB-function';


var user, poi, type, newPoi, showLastLocation;

class CircleButtons extends Component {

    constructor(props){
        super(props)

        this.favoriteAPlace = this.favoriteAPlace.bind(this);
        this.newPoiFunction = this.newPoiFunction.bind(this);
        this.showLast = this.showLast.bind(this);
    }

    showLast(){
        showLastLocation = this.props.showLast;
        showLastLocation();
    }

    favoriteAPlace(){
        type = this.props.type;
        user = this.props.user.uid;
        poi = this.props.parkname;
        newPoi = this.props.newPoi;

        var FBObj = {
            userUID : user,
            poi : poi,
            type: type
        }

        console.log('trying to favorite a place', user, poi,type);
        SaveObjToFB("favorites", FBObj);

        newPoi();
    }

    newPoiFunction(){
        newPoi = this.props.newPoi;
        newPoi()
    }



    render() {
    
        return (
            <div className="d-flex">
                <div>
                    <button className="smallCircleLeftButton">
                        <img  onClick={this.showLast} src={arrow} alt="yellow circular arrow"/>
                    </button> 
                </div>
                <div>   
                    <button className="largeCircleButton">
                        <img onClick={this.newPoiFunction} src={times} alt="red letter X"/>    
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