import React from 'react';

let comments = '';
let ParkComments = () => {

    let name = document.getElementById('parkName').textContent;

    fetch(`https://day-out-app-89200.firebaseio.com/comments.json`)
    .then(data => data.json())
    .then((data) => {
        Object.values(data).map((item) => {
                if(item.parkName === name) {
                    console.log('THIS IS THE COMMENT ARTHUR!!', item.commentString);
                    return (comments = <p>{item.commentString}</p>)
                    console.log('COMMENTSssssss', comments);
                }
            })
              
    })

    return(
        <div>
        {console.log('COMMENTS', comments)}
            {comments}
        </div>
    )
}

export default ParkComments;



