import { rebase }  from './base';

    export function SaveObjToFB (endpoint, objToSave, ) { //object  {}, endPoint "endPoint"
    // console.log("object to save:", objToSave);
    return rebase.push(endpoint, {
      data: objToSave, 
        then(err) {
          if(err) {
            // console.log("this is a scary errs", err);
          } else if (!err) {
            // console.log("error free, baby!");
            // console.log(objToSave);
          }
        }
      })
      .then((result) => {
        // console.log("saved something to firebase and this was the result:", result);
        return result;
      })
  }

  export function DeleteFromFB (endpoint, itemID) { //example "users" endpoint and itemID of specific user "userid"
    return rebase.remove(endpoint + "/" + itemID, function(err){
      if(err){
        // console.log("this is a scary error", err);
    } else if (!err) {
      // console.log("deleted item successfully");
    }
    })
  }

  export function GetFromFB (endpoint){
    console.log('Getting Stuff from FB:', endpoint);
    return rebase.fetch(endpoint, {
      context: this,
      asArray: true, 
      then(data) {
        let myObj = JSON.stringify(data);
        console.log('Has data?',  myObj);
        return myObj;
      }

    })
  }


