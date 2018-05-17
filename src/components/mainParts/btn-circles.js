import React, { Component } from 'react';
import times from '../images/times.svg';
import heart from '../images/heart.svg';
import arrow from '../images/undo-alt.svg';
import marker from '../images/btn-map-marker.svg';
import './btn-circles.css';

class CircleButtons extends Component {
    render() {
        return (
            <div className="buttonContainer">
                <button className="smallCircleLeftButton">
                    <img src={arrow} alt="yellow circular arrow"/>
                </button>    
                <button className="largeCircleButton">
                    <img src={times} alt="red letter X"/>    
                </button>
                <button className="largeCircleButton">
                    <img src={heart} alt="green heart"/>
                </button>
                <button className="smallCircleRightButton">
                    <img src={marker} alt="blue map marker"/>
                </button>
            </div>
        )
    }   
}

export default CircleButtons