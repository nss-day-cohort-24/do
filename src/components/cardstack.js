//the parks/events that you swipe through
import React, { Component } from 'react';
import TopNav from './mainParts/top-nav.js';
import CircleButtons from './mainParts/btn-circles';
import ParkName from './parkParts/park-name';
import ParkRating from './parkParts/park-rating';
import ParkPic from './parkParts/park1.jpg';
import './cardstack.css';
import './parkParts/park-parts.css';
import ParkDetails from './parkdetails.js';
import Profile from './profile.js';

class Cardstack extends Component {
    constructor() {
        super()
        this.state = {
            details: false,
            profile: false,
        }
        this.toTitleCase = this.toTitleCase.bind(this);
        this.viewProfile = this.viewProfile.bind(this);
        this.viewCard = this.viewCard.bind(this);
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }

    viewProfile(){
        this.setState({
            profile: true,
        })
    }

    viewCard(){
        this.setState({
            details: false,
            profile: false,
        })
    }

    render() {
        console.log('what is this?', this.props)
        console.log("cardstack name props", this.props.name);
        console.log("this.props.type", this.props.type);
        
        if (this.state.details) {
            return(
                <div className="d-flex flex-column">
                    <ParkDetails details={this.state.details} viewCard={this.viewCard}/>
                </div>
            )
        } else if (this.state.profile){
            return (
            <Profile user={this.props.user} viewCard={this.viewCard} logoutApp={this.props.logoutApp}/>
            )
        } else {
            return (
                <div className="d-flex flex-column ml-4">
                    <TopNav user={this.props.user} viewProfile={this.viewProfile} />
                    <div className="parkcard">
                        <img src={ParkPic} alt="park picture" className="parkpic" onClick={() => this.setState({ details: true })} />
                        {/* <ParkName name={this.props.name} /> */}
                        <h3 className="pt-2 pr-2 pl-2">{this.toTitleCase(this.props.name)}</h3>
                        <h2 className="pl-4">{this.props.type.charAt(0).toUpperCase() + this.props.type.substr(1).toLowerCase()}</h2>
                        <ParkRating />
                        <div className='fixed-bottom pb-4 pl-3'>
                            <CircleButtons />
                        </div>
                    </div>
                </div>
            )
         
        }
        
        
    }
}

export default Cardstack