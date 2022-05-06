import {combineReducers} from 'redux';
import {userSlice} from "../features/UserSlice";
// import {preferencesSlice} from "../features/PreferencesSlice";
import {alertSlice} from "../features/AlertSlice";
import {miscSlice} from "../features/MiscSlice";
// import {boardsSlice} from "../features/BoardsSlice";
// import darkModeReducer from "../features/DarkModeSlice";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    // preferences: preferencesSlice.reducer,
    alert: alertSlice.reducer,
    misc: miscSlice.reducer,
    // boards: boardsSlice.reducer,
    // darkMode:darkModeReducer
});

export default rootReducer;
