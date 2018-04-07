import { combineReducers } from 'redux';

import fetchCityReducer from './city.reducer';

const rootReducer = combineReducers({
  fetchCityResult: fetchCityReducer,
});

export default rootReducer;
