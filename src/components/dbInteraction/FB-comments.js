import React from 'react';
import rebase from './base';
import { SaveObjToFB } from './FB-function';

export default class  SaveComment extends React.Component {
  render() {

    const commentObj = {
      userID : this.props.uid,
      parkName : this.props.parkName,
      commentString : this.props.commentText
    };

    return (
      console.log('The save comment button has been clicked'),
      console.log('commentObj'),
      SaveObjToFB('comments', commentObj)
    );

  };
}