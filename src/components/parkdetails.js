    //includes internal-local components for comments and the add icon
    import React, { Component } from 'react';
    import './parkdetails.css';
    import ParkRating from './parkParts/park-rating';
    import ParkAddress from './parkParts/park-address';
    import { SaveObjToFB } from './dbInteraction/FB-function';
    import ParkComments from './parkComments';





    class ParkDetails extends Component {
       
        constructor(props) {
            super(props);
            this.state = {value: ''};
        }

        handleChange= (event) => {
            this.setState({value: event.target.value});
        }

        // Called when user clicks 'Submit' on the comment form.
        handleSubmit = (event) => {
            this.CommentToSave(this.props.uid, this.props.name, this.state.value);
            event.preventDefault();
            event.target.value = "";
            this.setState({
                value: ""
            })

        }

       CommentToSave = (uid, parkName, commentText) => {
        //    console.log('uid to save', uid);
           const commentObj = {
            userID : uid,
            parkName : parkName,
            commentString : commentText
          };
            SaveObjToFB('comments', commentObj);
        }

        render() {
            const parkAddress = this.props.location;
            const allInfo = this.props.allInfo;
            const type = this.props.type;
            const ameneties = [];
            let listedAmeneties = [];

            // Checks to see if the data type is a park (parks are the only datasets with ameneties listed)
            if(type === "park" || "parks") { 
                for(let key in allInfo[0]) {
                    // Checks if the amenity is available at the current location. AKA if it's key-value is "Yes" 
                    if(allInfo[0][key] === "Yes") {
                        let reformattedAmenety = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
                        ameneties.push(reformattedAmenety.replace(/_|/g, " "));
                    }
                }

                listedAmeneties = ameneties.map(x => <li key={x}>{x}</li>);


            }

            return (
                <div>
                    <div>
    
                        <svg id="details-arrow" onClick={this.props.viewCard} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>

                            <img src={this.props.picture} alt="park" className="detailparkpic" />

                        <h3 id="parkName">{this.props.name}</h3>
                        <div><ParkAddress address={parkAddress}/></div>
                        <ParkRating /> 
                        <ul id="ameneties-list">
                            {listedAmeneties}
                        </ul>
                    </div>
                    <form ref="form" id="comment-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="Textarea1">Make a Comment</label>
                        <input type="textarea" className="form-control" id="Textarea1" rows="3" value={this.state.value} onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                    </form>
                    <div>
                        <h3 className="text-center">Comments</h3>
                        <ParkComments
                        name={this.props.name} 
                        userImage={this.props.userImage}
                        commentID={this.props.uid} />
                    </div>
                </div>
            );
        };
    };

    // class Comment extends Component {
    //     render () {
    //         return (
    //             <div>
    //                 <div>
    //                     <img src={this.props.userImage} />
    //                 </div>
                    
    //                 <div id={this.props.commentID}>
    //                     <p>{this.props.commentText}</p>
    //                 </div>
    //             </div>
    //         );
    //     };
    // }

    export default ParkDetails;