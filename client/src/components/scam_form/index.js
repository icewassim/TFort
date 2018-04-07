import React, { Component } from 'react';

export default class ScamForm {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" placeholder="Usernam"/>
      <input type="text" placeholder="Title"/>
      <input type="text" placeholder="Decription"/>
      <button >Add Scam</button>
    );
  }
}
