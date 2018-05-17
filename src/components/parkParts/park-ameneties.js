import React from 'react';
import ReactDOM from 'react-dom';

/**
     * Park Ameneties
 */

 export function ParkAmeneties({amenities}) {


    const styles={
        color: "#707070",
        fontFamily: "raleway, sans-serif",
        fontWeight: "200"
    }


    return (

        <div>
            <ul style={styles}>
            
                <li>first</li>
                <li>second</li>
                <li>third</li>
            
            </ul>
        </div>
    )
}