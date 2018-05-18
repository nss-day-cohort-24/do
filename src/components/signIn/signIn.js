import React, { Component } from 'react';
import { loginWithGoogle, logout  } from './auth';
import { rebase } from './base.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Geolocated from './geolocated';
import logo from './doLogo.png';
import GoogleBtn from './btn_google_signin_dark_normal_web.png';
import './signIn.css';
// import { rebase } from './base.js';



class Signin extends Component {

    authenticate(){
        console.log('App: calling autheticate for google');
        loginWithGoogle();
      }

    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center">
                    <img className="mx-auto mt-5 pt-5 mb-0 pb-0" src={logo} alt="do. logo" />
                    <button type="button" onClick={() => this.authenticate('google')} className="btn btn-primary btn-lg active" aria-pressed="true">Login with Google</button>
                    <Geolocated />
                </div>
            </div>
        )
    }
}

export default Signin;