export const fetchCity = (state = [], action) => {
  switch (action.type) {
  case 'CITY':
    return action.payload.data || state;
  default:
  }

  return state;
};
