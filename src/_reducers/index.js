import { combineReducers } from 'redux';
import { authentication } from './loginReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import { misc } from './miscReducers';
import {categories} from "./categoryReducer";
import {home} from "./homeReducer";

const rootReducer = combineReducers({
  authentication,
  categories,
  users,
  alert,
  misc,
  home
});

export default rootReducer;