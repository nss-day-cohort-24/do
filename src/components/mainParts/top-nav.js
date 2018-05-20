import React, { Component } from 'react';
import './top-nav.css';
import logo from '../images/doLogo.png';
import userCircle from '../images/user-circle.svg';

class TopNav extends Component {
    render() {
        return(
            <div className="d-flex">
                <img className="top-nav-logo" src={logo} alt="do logo"/>
                <img />
            </div>
        )
    }
}

export default TopNav