import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchCity from '../../actions/fetch_city';
import Scam from '../../components/scam';

class City extends Component{
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      city: {},
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchCity();
  }

  render() {
    console.log('new rendering !!!!', this.props);
    if(!this.props.city || !this.props.city.scams) {
      return <button onClick={ this.props.fetchCity }> Go fetch </button>
    }

    const scamsJSX = this.props.city.scams.map(content => <Scam content={content}  />);

    const city = this.props.city;
    return (
      <div>
        <div> Name: {city.name } </div>
        <div> cityDescription: {city.description } </div>
        <div> banner: {city.bannerImg } </div>
        <br />
        {scamsJSX}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCity }, dispatch);
}

const mapStateToProps = state => {
  return {
    city: state.fetchCityResult,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
