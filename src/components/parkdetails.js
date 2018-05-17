//includes internal-local components for comments and the add icon
import React, { Component } from 'react';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';
import ParkPic from './parkParts/park1.jpg';

export class ParkDetails extends Component {
    return (
    <img src={ParkPic} alt="park picture" className="parkpic"/>
    <h3>{this.props.name}</h3>
    <h2>{this.props.type}</h2>
    <ParkRating /> 
    );
};