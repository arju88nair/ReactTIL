import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import { misc } from './miscReducers';
import {boards} from "./boardReducer";
import {preferences} from "./preferencesReducer";

const rootReducer = combineReducers({
  authentication,
  boards,
  users,
  alert,
  misc,
  preferences
});

export default rootReducer;