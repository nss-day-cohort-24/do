import React, { Component } from 'react';
import times from '../images/times.svg';
import heart from '../images/heart.svg';
import arrow from '../images/undo-alt.svg';
import marker from '../images/btn-map-marker.svg';
import './btn-circles.css';

class CircleButtons extends Component {
    render() {
        return (
                <div className="d-flex">
                    <div>
                        <button className="smallCircleLeftButton">
                            <img src={arrow} alt="yellow circular arrow"/>
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