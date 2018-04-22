import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fetchCityReducer from './city.reducer';
import scamsReducer from './scams.reducer';

const rootReducer = combineReducers({
  formReducer,
  postScamResult: scamsReducer,
  fetchCityResult: fetchCityReducer,
});

export default rootReducer;
