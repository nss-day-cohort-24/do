//the parks/events that you swipe through
import React, { Component } from 'react';
import CircleButtons from './mainParts/btn-circles';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';
import ParkPic from './parkParts/park1.jpg';
import './cardstack.css';
import './parkParts/park-parts.css';

class Cardstack extends Component {

    constructor(){
        super()
        this.state = {
            details: false,
        }
        this.toTitleCase = this.toTitleCase.bind(this);
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }

    render() {
        console.log('what is this?', this.props)
        console.log("cardstack name props", this.props.name);
        console.log("this.props.type", this.props.type);

        
        if (this.state.details) {
            return(
                <div className="d-flex flex-column">
                 <h1>hi</h1>
                <img src={ParkPic} alt="park picture" className="parkpic" onClick={() => this.setState({ details: false })} />
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-column">
                    <div className="parkcard">
                        <img src={ParkPic} alt="park picture" className="parkpic" onClick={() => this.setState({ details: true })} />
                        {/* <ParkName name={this.props.name} /> */}
                        <h3>{this.toTitleCase(this.props.name)}</h3>
                        <h2>{this.props.type.charAt(0).toUpperCase() + this.props.type.substr(1).toLowerCase()}</h2>
                        <ParkRating />
                        <div>
                            <CircleButtons />
                        </div>
                    </div>
                </div>
            )
         
        }
        
        
    }
}

export default Cardstack