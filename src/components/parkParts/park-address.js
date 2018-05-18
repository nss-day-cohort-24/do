import React from 'react';

/**
     * Park Address
 */

 export default class ParkAddress extends React.Component {
    render() {
        return (
            <div>
                <h3 className="address">{this.props.address}</h3>
            </div>
        );
    };
}
