import React, { Component } from 'react';
import './App.css';
import Signin from './components/signIn/signIn';
import Cardstack from './components/cardstack';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';
import swiper from './hammerTime';


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      pickedAnAPI: false,
      apiNumber: ''
    }
    this.getAnAPI = this.getAnAPI.bind(this);
  }

  getAnAPI(){
    this.setState({
      apiNumber: Math.floor(Math.random() * 3),
      pickedAnAPI: true
    })
  }

  componentDidMount(){
    this.getAnAPI();
  }

  render() {
    if(this.state.pickedAnAPI){
    return (
      <div>
        {/* <Signin /> */}
        {/* <Cardstack /> */}
        <NashvilleOpenData api={this.state.apiNumber} />
      </div>
    )
  }else{
    return(
    <div>
      Loading....
    </div>
    )
  }
}
}

export default App;
