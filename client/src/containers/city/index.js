import React, { Component } from 'react';

export default class ClassName extends Component{
  constructor() {
    super();

    this.state = {
      cityId: 'paris',
      name: 'initial city',
      header: 'imgSrc',
      scams : [
        {
          scamId: 'id2',
          header: 'Deaf signtures',
          description: 'Blah Blah Blah description',
          position: 'map coordonates',
          previewPic: 'previewPic',
          author: 'icewassim',
          date: 'date of comment',
          upVotes: 10,
          downVotes: 5,
        },
      ],
    }
  }
  
  render() {
    const scamsJSX = this.state.scams.map(scam => {
      return (
        <div>
          <div>Header: {scam.header}</div>
          <div>Content: {scam.description}</div>
          <div>Date: {scam.date}</div>
          <div> Votes: {scam.upVotes - scam.downVotes} </div>
        </div>
      );
    });
    
    
    return (
      <div>
        <div>Name: { this.state.name }</div>
        <br />
        {scamsJSX}
      </div>
    );
  }
}