//the parks/events that you swipe through
import React, { Component } from 'react';
import CircleButtons from './mainParts/btn-circles';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';
import ParkPic from './parkParts/park1.jpg';
import './cardstack.css';
import './parkParts/park-parts.css';

class Cardstack extends Component {
    render() {
        console.log('what is this?', this.props)
        console.log("cardstack name props", this.props.name);
        console.log("this.props.type", this.props.type);
        return <div>
            <div className="parkcard">
                <img src={ParkPic} alt="park picture" className="parkpic"/>
                {/* <ParkName name={this.props.name} /> */}
                <h3>{this.props.name}</h3>
                <ParkRating />            
            </div>
            <CircleButtons />
        </div>
    }
}

export default Cardstack