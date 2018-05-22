import { googleProvider, rebase }  from './base';
import { Component } from 'react';

class FBMatches extends Component {
    SaveObjToFB (endpoint, objToSave, ) { //object  {}, endPoint "endPoint"
    console.log("object to save:", objToSave);
    return rebase.post(endpoint, {
      data: {objToSave}, 
        then(err) {
          if(err) {
            console.log("this is a scary errs", err);
          } else if (!err) {
            console.log("error free, baby!");
            console.log(objToSave);
          }
        }
      })
      .then((result) => {
        console.log("saved something to firebase and this was the result:", result);
        return result;
      })
  }
}

export default FBMatches
