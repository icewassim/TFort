import React from 'react';

const AutoCompleteListItem = (props) => {
  return (
    <div onClick={() => props.selectCity(props.name)} >
      {props.name}
    </div>
  );
};

export default AutoCompleteListItem;