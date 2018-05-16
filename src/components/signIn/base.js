import Rebase from 're-base';
import firebase from 'firebase';


const app = firebase.initializeApp({
  apiKey: "AIzaSyDMTwhHHRFeaB2_Lgw8yvkxK0s9gzedj1c",
  authDomain: "day-out-app-89200.firebaseapp.com",
  databaseURL: "https://day-out-app-89200.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();