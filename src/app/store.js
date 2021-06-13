import { configureStore } from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import { userSlice } from '../features/UserSlice';
import {preferencesSlice} from '../features/PreferencesSlice';
import {alertSlice} from '../features/AlertSlice';
import {miscSlice} from '../features/MiscSlice';
import {boardsSlice} from '../features/BoardsSlice';
import {store} from "../_helpers";
// const loggerMiddleware = createLogger();


const localStorageKey = "darkMode";
const persistedTheme = localStorage.getItem(localStorageKey);

const preloadedState = {
  preferences: {
    darkThemeEnabled:persistedTheme
  },
}

const reducer = {
  user: userSlice.reducer,
  preferences:preferencesSlice.reducer,
  alert:alertSlice.reducer,
  misc:miscSlice.reducer,
  boards:boardsSlice.reducer
}

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState
});

store.subscribe(() => {
 console.log("Ssss")
});
//
// store.subscribe(() => {
//   console.log("s")
//   const preferences = store.getState().preferences;
//   if (!preferences) return;
//
//   localStorage.setItem("darktheme", JSON.stringify(preferences));
// });
