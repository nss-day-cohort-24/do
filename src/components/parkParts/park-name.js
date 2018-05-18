import React from 'react';
// import ReactDOM from 'react-dom';
import './park-parts.css';

/**
     * Park Name
 */


function ParkName({name}){
    return (
        <div>
            <h3 className="name">{this.props.name}</h3>
        </div>
    )
}

export default ParkName