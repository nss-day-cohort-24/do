import React from 'react';
import ReactDOM from 'react-dom';

/**
     * Park Image
 */

// const image = "https://www.nashville.gov/portals/0/SiteContent/Parks/images/planning/Centennial/lakewatauga.jpg";

 export function ParkImage({image}) {


        return (

            <div>
                <img src={image}/>
            </div>
        )
}