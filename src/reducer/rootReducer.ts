import { combineReducers } from 'redux';
import { techSlice } from './tech/techSlice';

const rootReducer = combineReducers({
  techSlice: techSlice.reducer,
});

export default rootReducer;
