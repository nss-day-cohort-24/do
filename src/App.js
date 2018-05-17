import React, { Component } from 'react';
import './App.css';
import Signin from './components/signIn/signIn';
import Cardstack from './components/cardstack';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Signin /> */}
        <Cardstack />
      </div>
    );
  }
}

export default App;
