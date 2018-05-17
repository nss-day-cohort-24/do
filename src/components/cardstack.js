//the parks/events that you swipe through
import React, { Component } from 'react';
import CircleButtons from './mainParts/btn-circles';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';
import ParkPic from './parkParts/park1.jpg';
import './cardstack.css';


class Cardstack extends Component {
    render(props) {
        return <div>
            <div className="parkcard">
                <img src={ParkPic} alt="park picture" className="parkpic"/>
                <ParkName />
                <ParkRating />            
            </div>
            <CircleButtons />
        </div>
    }
}

export default Cardstack