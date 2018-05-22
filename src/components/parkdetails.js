    //includes internal-local components for comments and the add icon
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import './parkdetails.css';
    import App from'../App';
    import ParkRating from './parkParts/park-rating';
    import ParkPic from './parkParts/park1.jpg';
    import ParkAddress from './parkParts/park-address';
    import CardStack from './cardstack';
    import SaveComment from './dbInteraction/FB-comments'

    class ParkDetails extends Component {

        
        render() {
            const parkAddress = this.props.location;
            const allInfo = this.props.allInfo;
            const type = this.props.type;
            const ameneties = [];
            let listedAmeneties = [];
            console.log("Data type in ParkDetails: ", type);
            console.log("all info", allInfo);

            // Checks to see if the data type is a park (parks are the only datasets with ameneties listed)
            if(type === "park" || "parks") {
                console.log("its a park");
                console.log("list park ameneties: ", allInfo[0])
                for(let key in allInfo[0]) {
                    
                    
                    // Checks if the amenity is available at the location. AKA if it's key-value is "Yes" 
                    if(allInfo[0][key] === "Yes") {
                        console.log(key);
                        console.log(allInfo[0][key]);
                        // Capitalizes the first character of each amenity
                        let reformattedAmenety = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
                        
                        // Replaces all underscores '_' with a space " ".
                        ameneties.push(reformattedAmenety.replace(/_|\-/g, " "));
                        console.log("ameneties array: ", ameneties);
                    }
                }

                // Converts the ameneties in the 'ameneties' array into JSX list elements.
                listedAmeneties = ameneties.map(x => <li>{x}</li>);
                console.log('listedAmeneties',listedAmeneties);


            }else {
                console.log("its not a park");
            }


            return (
                <div>
                    <div>
    
                        <svg id="details-arrow" onClick={this.props.viewCard} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>

                            <img src={ParkPic} alt="park picture" className="detailparkpic" />

                        <h3>{this.props.name}</h3>
                        <div><ParkAddress address={parkAddress}/></div>
                        <ParkRating /> 
                        <ul id="ameneties-list">
                            {listedAmeneties}
                        </ul>
                    </div>
                    <form>
                        <label for="Textarea1">Make a Comment</label>
                        <textarea class="form-control" id="Textarea1" rows="3"></textarea>
                        <button type="button" class="btn btn-primary" onClick={SaveComment}>Submit</button>
                    </form>
                    <div>
                        <Comment userImage="#" commentID="001"  commentText="I love this park so much I'm going to diiiiieeeee!!" />
                        <Comment userImage="#" commentID="002"  commentText="I go here everday to stalk the pretty dogs and plot how to pet them." />
                    </div>
                </div>
            );
        };
    };

    // class ParkDetail extends Component{

    //     render() {
    //         return (
    //             <li>{this.props.detail}</li>
    //         );
    //     };
    // };

    class Comment extends Component {
        render () {
            return (
                <div>
                    <div>
                        <img src={this.props.userImage} />
                    </div>
                    
                    <div id={this.props.commentID}>
                        <p>{this.props.commentText}</p>
                    </div>
                </div>
            );
        };
    }

    export default ParkDetails;