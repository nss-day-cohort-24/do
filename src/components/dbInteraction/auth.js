import { googleProvider, rebase }  from './base';

// export function auth (email, pw) {
//     return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
//       .then((data) => {
//         console.log("data is", data);
//         saveUser(data);
//       })
//   }

  export function logout () {
    return rebase.initializedApp.auth().signOut()
  }

  export function loginWithGoogle (update) {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
      console.log('user data', data);
      saveUser(data.user);
      console.log('has updated?', update());
      update(data.user);
    });
  }

    export function checkUser () {
    rebase.initializedApp.auth().onAuthStateChanged(function (user) {
        if (user) {
          this.setState({
            authed: true,
          });
        }
    })
    }

    export function saveUser (user) {
        console.log("save user", user);
        return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
          .update({
            email: user.email,
            name: user.displayName,
            portrait: user.photoURL,
            uid: user.uid,
            name: user.displayName,
            portrait:user.photoURL
          })
          .then(() => {
            return user;
          })
      }

  export function SaveObjToFB (endpoint, objToSave) { //object  {}, endPoint "endPoint"
    console.log("object to save:", objToSave);
    return rebase.post(endpoint, {
      data: {objToSave}, 
        then(err) {
          if(err) {
            console.log("this is a scary error", err);
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

  export function deleteFromFB (endpoint) {
    return rebase.remove(endpoint, function(err){
      if(err){
        console.log("this is a scary error", err);
    } else if (!err) {
      console.log("deleted item successfully");
    }
    })
  }