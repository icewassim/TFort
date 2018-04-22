const fetchCityReducer = (state = [], action) => {
  switch (action.type) {
  case 'CITY':
    return action.payload.data || state;
  default:
  }

  return state;
};

export default fetchCityReducer;
