import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { fetchCity } from '../modules/city/reducers';
import { postScam } from '../modules/scams/reducers';

const rootReducer = combineReducers({
  formReducer,
  postScamResult: postScam,
  fetchCityResult: fetchCity,
});

export default rootReducer;
