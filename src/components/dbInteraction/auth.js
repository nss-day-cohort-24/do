import { googleProvider, rebase }  from './base';

  export function logout () {
    return rebase.initializedApp.auth().signOut()
  }

  export function loginWithGoogle (update) {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
      // console.log('user data', data);
      saveUser(data.user);
      // console.log('has updated?', update());
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
        // console.log("save user", user);
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
