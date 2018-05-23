import React from 'react';
import './profile.css';
import { logout } from './dbInteraction/auth';
import logo from './images/doLogo.png';
import Geolocated from './signIn/geolocated';
import { FavePark } from './parkParts/profile-matches';


/**
     * Profile. 
     * This image isn't perfectly centered, not sure why. Can't seem to get bootstrap to respond properly to any stylings. Help :'c
 */

class Profile extends React.Component {

    logoutGoogle() {
        logout();
        this.props.logoutApp();
    }


    render() {
        const user = this.props.user.providerData[0];
        const name = user.displayName;
        const profileImg = user.photoURL;
        // ? user.photoURL : userCircle;



        return (

            <div>
                <div className="d-flex justify-content-between">
                    <img className="top-nav-logo ml-4" src={logo} alt="do logo" onClick={this.props.viewCard}/>
                    <div className="top-nav-user-img mr-4 d-flex align-items-center">
                        <h4 onClick={() => this.logoutGoogle()}>logout</h4>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center">
                    <img className="main-profile-pic mx-auto" alt="user profile image" src={profileImg}/>
                    <h2 className="user-name-styles mt-3 mb-5">hey, {name}!</h2>

                    <Geolocated />

                    <svg id="heart-icon" xmlns="http://www.w3.org/2000/svg" width="53px" fill="#6BD628" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg>

                </div>
                <FavePark />
            </div>



        )
    }
}

export default Profile