import React from 'react';
import ReactDOM from 'react-dom';

/**
     * Park Address
 */

 export function ParkAddress({address}) {


    const styles={
        color: "#707070",
        fontFamily: "raleway, sans-serif",
        fontWeight: "200"
    }


    return (

        <div>
            <h3 className="address" style={styles}>{address}</h3>
        </div>
    )
}
