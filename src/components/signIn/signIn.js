import React, { Component } from 'react';
import { loginWithGoogle, logout  } from './auth';
import { rebase } from './base.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
class Signin extends Component {

    authenticate(){
        console.log('App: calling autheticate for google');
        loginWithGoogle();
      }

    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center">
                    <button type="button" onClick={() => this.authenticate('google')} className="btn btn-primary btn-lg active" aria-pressed="true">Login with Google</button>
                </div>
            </div>
        )
    }
}

export default Signin;