import React, { Component } from 'react';
import { loginWithGoogle, logout  } from './auth';
import { rebase } from './base.js';
import Geolocated from './geolocated';
import logo from './doLogo.png';
import GoogleBtn from './btn_google_signin_dark_normal_web.png';
import './signIn.css';
// import { rebase } from './base.js';



const styles = {
    backgroundColor: "white",
    border: "none"
}



class Signin extends Component {
    
    authenticate(){
        console.log('App: calling autheticate for google');
        loginWithGoogle();
    }
    
    render() {
        

        return (
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="mx-auto mt-5 pt-5 mb-0 pb-0" src={logo} alt="do. logo" />
                    <button style={styles} className="mx-auto" type="button" onClick={() => this.authenticate('google')} className="login-btn btn btn-secondary btn-lg"><img src={GoogleBtn} alt="do. logo" /></button>
                    {/* <Geolocated /> */}
                </div>
            </div>
        )
    }
}

export default Signin;