import React, { Component } from 'react';

import AutoCompleteListItem from './auto_complete_list_item';

const AutoCompleteList = ({suggestions, selectCity}) => {
  if (!suggestions || suggestions.length === 0) {
    return <span></span>
  }
  
  const suggestionsJSX = suggestions.map(item => {
    return (
      <AutoCompleteListItem
        name={item}
        selectCity={selectCity}
      />
    );
  });
  
  return (
    <span>
      {suggestionsJSX}
    </span>
  );
};

export default AutoCompleteList;