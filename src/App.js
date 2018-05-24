import React, { Component } from 'react';
import './App.css';
import Signin from './components/signIn/signIn';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';




class App extends Component {

  constructor(props){

    super(props)
    this.state={
      openData: false,
      apiNumber: '',
      swiped: false,
      authed: false,
    }
    this.changeAuth = this.changeAuth.bind(this);
    this.logoutApp = this.logoutApp.bind(this);
    this.reRenderOpenData = this.reRenderOpenData.bind(this);


  }

  reRenderOpenData(boo){
    this.setState({openData: boo})
  }

  changeAuth(user){
    this.setState({
      authed: true,
      user: user,
      openData: true
    })
  }

  logoutApp(){
    this.setState({
      authed: false,

    })
  }

  render() {
   
    if (!this.state.authed) {
      return(
        <div>
        <Signin  changeAuth={this.changeAuth}/>
        {console.log('sign in component ')}
        </div>
      );
    }
    else if (this.state.authed && this.state.openData) {
      // console.log('trying to render nashvilleopendata component');
      return(
        <div>
        <NashvilleOpenData reRenderOpenData={this.reRenderOpenData} user={this.state.user} logoutApp={this.logoutApp}/>
        {console.log("open data component", this.state.authed, this.state.openData)}
        </div>
      )
    }else{
      return(
      <div>
        LOADING....
      </div>
      )
    }
}
}

export default App;
