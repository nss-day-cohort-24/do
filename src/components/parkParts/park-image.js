import React from 'react';
import ReactDOM from 'react-dom';

/**
     * Park Image
 */

const image = "./images/sample-image.png";

 export function ParkImage({image}) {

        return (

            <div>
                <img className="image" src="./images/sample-image.png" />
            </div>
        )
}