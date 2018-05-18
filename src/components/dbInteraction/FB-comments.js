export function saveComment (userID, poiID, commentString) {
    console.log("This user, ", userID, "made this comment, ", commentString, "about this park,", poiID);
    // return rebase.initializedApp.database().ref().child(`comments/`)
    //   .update({
    //     email: user.email,
    //     name: user.displayName,
    //     portrait: user.photoURL,
    //     uid: user.uid,
    //   })
    //   .then(() => {
    //     return user;
    //   })
  }