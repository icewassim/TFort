import React, { Component } from 'react';

import AutoCompleteList from '../../components/search_bar/auto_complete_list';

export default class SearchBar extends Component{
  constructor() {
    super()
    this.cities = [
      'PARIS',
      'ROME',
      'PRAGUE'
    ];
    
    this.state = {
      suggestions: [],
      searchTerm: '',
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }
    
  selectCity(city) {
    console.log('selectedCity ::', city);

    this.setState({ 
      suggestions: [],
      searchTerm: '',
    });
  }
    
  handleInputChange({ target }) {
    if (!target) {
      return;
    }
    
    const value = target.value;
    const suggestions = this.cities.filter(city => city.indexOf(value.toUpperCase()) !== -1);
    this.setState({
      suggestions,
      searchTerm: value,
    });
  }
  
  render() {
    return (
      <div>
        <input 
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="City Name"
        />
        <AutoCompleteList 
          suggestions={this.state.suggestions}
          selectCity={this.selectCity}
        />
      </div>
    );
  }
}