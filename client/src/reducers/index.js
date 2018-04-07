import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // autocompleCities: zipCodeReducer,
  // rentQueryResult: rentQueryReducer,
  form: formReducer,
});

export default rootReducer;
