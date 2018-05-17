import React from 'react';
import ReactDOM from 'react-dom';
import './park-parts.css';

/**
     * Park Name
 */

function ParkName({name}){

    const styles = {
        color: "#6BD628",
        fontFamily: "raleway, sans-serif",
        fontWeight: "200"
    }


    return (
        <div>
            <h3 className="name" style={styles}>{name}</h3>
        </div>
    )
    
}


//     return (
//         <div>
//             <h3 className="name">Shelby Bottoms</h3>
//         </div>
//     )
// }

export default ParkName
