    //includes internal-local components for comments and the add icon
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import './parkdetails.css';
    import App from'../App';
    // import ParkName from './parkParts/park-name';
    import ParkRating from './parkParts/park-rating';
    import ParkPic from './parkParts/park1.jpg';
    import ParkAddress from './parkParts/park-address';
    import CardStack from './cardstack';




    class ParkDetails extends Component {

        
        render() {
            const parkAddress = this.props.location;
            const allInfo = this.props.allInfo;
            const type = this.props.type;
            const ameneties = [];
            // const listedAmeneties = [];
            console.log("Data type in ParkDetails: ", type);
            console.log("all info", allInfo);


            if(type === "park" || "parks") {
                console.log("its a park");
                console.log("list park ameneties: ", allInfo[0])
                for(let key in allInfo[0]) {

                    if(allInfo[0][key] === "Yes") {
                        console.log(key);
                        console.log(allInfo[0][key]);
                        let reformattedAmenety = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase()
                        ameneties.push(reformattedAmenety.replace(/_|\-/, " "));
                        console.log("ameneties array: ", ameneties);
                    }
                }




            }else {
                console.log("its not a park");
            }


            return (
                <div>
   
                    <svg id="details-arrow" onClick={this.props.viewCard} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>

                    <img src={ParkPic} alt="park picture" className="detailparkpic" />

                    <h3>{this.props.name}</h3>
                    <div><ParkAddress address={parkAddress}/></div>

                    <ParkRating /> 

                    <ul>
                     {/* This is where ameneties should go if type = park. */}
                     {/* {listedAmeneties} */}
                        <p>{ameneties}</p>
                        {/* <ParkDetail detail="This is an amazing park"/>
                        <ParkDetail detail="There's a dog park nearby"/>
                        <ParkDetail detail="Has a great big pond in the middle"/> */}
                    </ul>
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