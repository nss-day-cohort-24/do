import React from 'react';
import ParkRating from './park-rating';
import ParkAddress from './park-address';
import {DeleteFromFB} from '../dbInteraction/FB-function';

export class FavePark extends React.Component {
    
    render() {
        console.log('A new fave park was added');
        const parkid = this.props.parkName;
        let address = this.props.address;
        let userid = this.props.uid;
        let deleteComment = (parkname, uid) => { DeleteFromFB(parkname, uid)};
        return (
            <div>
                <div className="favePark">
                    <h3 className="pt-2 pr-2 pl-2">{parkid}</h3>
                    <ParkAddress address={"Test address"}/>
                    <ParkRating /> 
                </div>
                <div>
                    <img src="#" onClick={deleteComment(parkid, userid)} />
                </div>
            </div>
        )
    }
}