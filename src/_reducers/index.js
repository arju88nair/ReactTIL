import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import { misc } from './miscReducers';
import {categories} from "./categoryReducer";
import {preferences} from "./preferencesReducer";

const rootReducer = combineReducers({
  authentication,
  categories,
  users,
  alert,
  misc,
  preferences
});

export default rootReducer;