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
import Map from './map.js';

var picture;

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
        this.returnInfo = this.returnInfo.bind(this);
        this.viewMap = this.viewMap.bind(this);

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
            map: false,
        })
    }

    viewMap() {
        this.setState({
            map: true,
        })
    }

    returnInfo(){
        console.log("data log function launched");
        console.log(this.props.location);
        let allLocationInfo = this.props.info;
        console.log("this.props.info", this.props.info);
        console.log("allLocationInfo", allLocationInfo);
    }


    render() {
        console.log('what is this?', this.props)
        console.log("cardstack name props", this.props.name);
        console.log("this.props.type", this.props.type);
        this.returnInfo()

        
        if (this.state.details) {
            if (this.props.type === 'art') {
                picture = this.props.picture;
            } else {
                picture = ParkPic;
            }
            return(
                <div className="d-flex flex-column">
                    <ParkDetails picture={picture} allInfo={this.props.info} name={this.props.name} location={this.props.location} details={this.state.details} viewCard={this.viewCard} type={this.props.type} uid={this.props.user.uid}/>
                </div>
            )
        } else if (this.state.profile){
            return (
            <Profile user={this.props.user} viewCard={this.viewCard} logoutApp={this.props.logoutApp}/>
            )
        } else if(this.state.map){
            return (
                <Map viewCard={this.viewCard} />
            )
        } else {
            if(this.props.type === 'art'){
                picture = this.props.picture;
            }else{
                picture = ParkPic;
            }
            return (
                <div className="d-flex flex-column ml-4">
                    <TopNav user={this.props.user} viewProfile={this.viewProfile} />
                    <div className="parkcard">
                        <img src={picture} alt="park picture" className="parkpic" onClick={() => this.setState({ details: true })} />
                        {/* <ParkName name={this.props.name} /> */}
                        <h3 className="pt-2 pr-2 pl-2">{this.toTitleCase(this.props.name)}</h3>
                        <h2 className="pl-4">{this.props.type.charAt(0).toUpperCase() + this.props.type.substr(1).toLowerCase()}</h2>
                        <ParkRating />
                        <div className='fixed-bottom pb-4 pl-3'>
                            <CircleButtons showLast ={this.props.showLast} newPoi={this.props.newPoi} viewMap={this.viewMap} type={this.props.type} user={this.props.user} parkname={this.props.name}/>
                        </div>
                    </div>
                </div>
            )
         
        }
        
        
    }
}

export default Cardstack