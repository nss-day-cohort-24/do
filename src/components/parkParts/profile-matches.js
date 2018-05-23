import React from 'react';
import ParkRating from './park-rating';
import ParkAddress from './park-address';
import {DeleteFromFB} from '../dbInteraction/FB-function';

export class FavePark extends React.Component {
 
    render() {
        const parkid = this.props.name;
        let userid = this.props.uid;
        return (
            <div>
                <div className="favePark">
                    {/* <h3 className="pt-2 pr-2 pl-2">{this.toTitleCase(this.props.name)}</h3> */}
                    <p><ParkAddress address="Test address"/></p>
                    <ParkRating /> 
                </div>
                <DeleteButton parkName={parkid} userid={userid}/>
            </div>
        )
    }
}

class DeleteButton extends React.Component {
    render() {
        return (
        <div>
            <img src="#" onClick={DeleteFromFB(this.props.parkName, this.props.userid)} />
        </div>
    )}
}