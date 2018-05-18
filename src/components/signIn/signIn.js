import React, { Component } from 'react';
import { loginWithGoogle, logout  } from './auth';
// import { rebase } from './base.js';
import Geolocated from './geolocated';

class Signin extends Component {

    authenticate(){
        console.log('App: calling autheticate for google');
        loginWithGoogle();
      }

    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center">
                    <h1> Google Login</h1>
                    <button type="button" onClick={() => this.authenticate('google')} className="login-btn btn btn-secondary btn-lg">Login</button>
                    <Geolocated />
                </div>
            </div>
        )
    }
}

export default Signin;