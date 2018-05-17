//the parks/events that you swipe through
import React, { Component } from 'react';
import CircleButtons from './mainParts/btn-circles';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';


class Cardstack extends Component {
    render(props) {
        return <div>
             <ParkName />
             <ParkRating />            
             <CircleButtons />
        </div>
    }
}

export default Cardstack