import React, { Component } from 'react';

export default class ScamForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Usernam"/>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Decription"/>
        <button >Add Scam</button>
      </div>
    );
  }
}
