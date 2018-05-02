import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postScam } from '../../modules/scams/actions'

class ScamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      description: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this.props.postScam('paris', this.state);
    this.setState({
      username: '',
      title: '',
      description: '',
    });
  }

  handleInputChanges(evt) {
    const target = evt.target;
    const stateToUpdate = {};

    stateToUpdate[target.name] = target.value;
    this.setState(stateToUpdate);
  }

  render() {
    return (
      <form form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleInputChanges.bind(this)}
          value={this.state.username}
          name='username'
        />

        <input
          type="text"
          placeholder="Title"
          name='title'
          onChange={this.handleInputChanges.bind(this)}
          value={this.state.title}
        />

        <input
          type="text"
          placeholder="Decription"
          name='description'
          onChange={this.handleInputChanges.bind(this)}
          value={this.state.description}
        />

        <button type="submit" >Add Scam</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postScam }, dispatch);
};

const mapStateToProps = state => {
  return {
    city: state.fetchCityResult,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScamForm);
