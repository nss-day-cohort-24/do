import React from 'react';



class ParkComments extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            comment: [],
            comLoaded: false
        })
    }
    
    componentDidMount = () => {
        let name = this.props.name;
        fetch(`https://day-out-app-89200.firebaseio.com/comments.json`)
        .then(data => data.json())
        .then((data) => {
            let commentArray = Object.keys(data).map((item, index) => {
                if(data[item].parkName === name) {
                    return( 
                        <div key={index} className="d-flex flex-row border-bottom bg-light">
                            <div className="col-8 align-self-center py-2" id={this.props.commentID}>
                                <p>{data[item].commentString}</p>
                            </div>
                        </div>
                )}
                
            })
                this.setState({
                    comment: commentArray,
                    comLoaded:true
                }) 
            
        }
        )}


    render() {
        return(        
        this.state.comLoaded 
        ?
            <div className="p-2 mt-3">
                {this.state.comment}
            </div>
        : null
        )
    }
}

export default ParkComments;



