import React, { Component } from 'react';
import './top-nav.css';
import logo from '../images/doLogo.png';
import userCircle from '../images/user-circle.svg';

class TopNav extends Component {
    render() {
        const user = this.props.user.providerData[0];
        const name = user.displayName;
        const profileImg = user.photoURL ? user.photoURL : userCircle;

        return(
            <React.Fragment>
                <div className="d-flex justify-content-between">
                    <img className="top-nav-logo" src={logo} alt="do logo"/>
                    <div className="top-nav-user-img mr-4">
                        <img className="img-thumbnail" src={profileImg} alt="user image" onClick={this.props.viewProfile}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TopNav