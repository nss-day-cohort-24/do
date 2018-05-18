//the parks/events that you swipe through
import React, { Component } from 'react';
import CircleButtons from './mainParts/btn-circles';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';
import ParkPic from './parkParts/park1.jpg';
import './cardstack.css';

class Cardstack extends Component {

    constructor(){
        super()
        this.toTitleCase = this.toTitleCase.bind(this);
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }

    render() {
        return <div>
            <div className="parkcard">
                <img src={ParkPic} alt="park picture" className="parkpic"/>
                {/* <ParkName name={this.props.name} /> */}
                <h3>{this.toTitleCase(this.props.name)}</h3>
                <h2>{this.props.type.charAt(0).toUpperCase()+this.props.type.substr(1).toLowerCase()}</h2>
                <ParkRating />            
            </div>
            <CircleButtons />
        </div>
    }
}

export default Cardstack