import React from 'react';
import geolib from 'geolib';



let Radius = (props) => {
    let sortedDistance = geolib.orderByDistance({latitude: props.lat, longitude: props.long}, props.array);  

    let oneMile = sortedDistance.filter(place => place.distance <= 1609)
    console.log('one',oneMile);

    let fiveMile = sortedDistance.filter(place => place.distance <= 8046)
    console.log('5', fiveMile);

    let tenMile = sortedDistance.filter(place => place.distance <= 16093)
    console.log('10', tenMile);
    return(
        <div>
            <div className="d-flex justify-content-center mb-4">
                <div className="mi-styles mx-3">
                    <p>1 mi</p>
                </div>

                <div className="mi-styles mx-3">
                    <p>5 mi</p>
                </div>
                
                <div className="mi-styles mx-3">
                    <p>10 mi</p>
                </div>
            </div>  
        </div>
    )
}

export default Radius;