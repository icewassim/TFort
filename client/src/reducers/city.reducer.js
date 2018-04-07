//import { fetchRentConf } from '../config/actions.conf';

const fetchCityReducer = (state = [], action) => {
  switch (action.type) {
    case 'CITY':
      console.log('action.payload.data', action.payload.data);
      return action.payload.data || state;
    default:
  }

  return state;
};

export default fetchCityReducer;
