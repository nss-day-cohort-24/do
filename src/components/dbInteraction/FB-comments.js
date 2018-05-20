import React from 'react';
import rebase from './base';

export default class  SaveComment extends React.Component {
  render() {

    const commentObj = {
      userID : this.props.uid,
      commentID : this.props.commentID,
      commentString : this.props.commentText
    };

    return (
      console.log('The save comment button has been clicked'),
      console.log('commentObj')
    );

  };
}