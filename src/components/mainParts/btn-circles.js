import React, { Component } from 'react';
import times from '../images/times.svg';
import heart from '../images/heart.svg';
import './btn-circles.css';

class CircleButtons extends Component {
    render() {
        return (
            <div>
                <button className="largeCircleButton">
                    <img src={times} alt="red letter X"/>    
                </button>
                <button className="largeCircleButton">
                    <img src={heart} alt="green heart"/>
                </button>
            </div>
        )
    }   
}

export default CircleButtons