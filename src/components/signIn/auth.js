import { googleProvider, rebase }  from './base.js';

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

  export function loginWithGoogle () {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
      console.log('user data', data);
      saveUser(data.user);
    });
  }

    export function checkUser () {
    rebase.initializedApp.auth().onAuthStateChanged(function (user) {
        if (user) {
        // Your code here
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
          })
          .then(() => {
            return user;
          })
      }