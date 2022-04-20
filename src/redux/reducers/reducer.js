import { combineReducers } from 'redux';
import AddressReducer from './addressReducer';

const reducer = combineReducers({
  addresses: AddressReducer,
});

const rootReducer = (state, action) => reducer(state, action);

export default rootReducer;
