    //includes internal-local components for comments and the add icon
    import React, { Component } from 'react';
    // import ParkName from './parkParts/park-name';
    import ParkRating from './parkParts/park-rating';
    import ParkPic from './parkParts/park1.jpg';
    import ParkAddress from './parkParts/park-address';
    export class ParkDetails extends Component {
        
        render() {
            const parkAddress = this.props.address;
            return (
            <div>    
                <div>
                    <img src={ParkPic} alt="park picture" className="parkpic"/>
                    <h3>{this.props.name}</h3>
                    <p><ParkAddress address={parkAddress}/></p>
                    {/* <ParkRating />   */}
                    <ul>
                        <ParkDetail detail="This is an amazing park"/>
                        <ParkDetail detail="There's a dog park nearby"/>
                        <ParkDetail detail="Has a great big pond in the middle"/>
                    </ul>
                </div>
                <div>
                    <div>
                        <AddComment />
                    </div>
                    <div>
                        <Comment userImage="#" commentID="001"  commentText="I love this park so much I'm going to diiiiieeeee!!" />
                        <Comment userImage="#" commentID="002"  commentText="I go here everday to stalk the pretty dogs and plot how to pet them." />
                    </div>
                </div>
            </div>
            );
        };
    };

    class ParkDetail extends Component{
        render() {
            return (
                <li>{this.props.detail}</li>
            );
        };
    };

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

    class AddComment extends Component {
        render() {
            return (
                <button type="button" className="btn btn-primary">Add Comment</button>
            );
        };
    }
