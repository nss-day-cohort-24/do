  // set options to prevent default behaviors for swipe, pinch, etc
import Hammer from 'hammerjs';
   
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);

  function swiped (event){
      console.log(event);
      return Math.floor(Math.random() * 3);
  }

  export default swiped