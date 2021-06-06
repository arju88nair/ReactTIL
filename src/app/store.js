import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/UserSlice';
import {preferencesSlice} from '../features/PreferencesSlice';
import {alertSlice} from '../features/AlertSlice';
import {miscSlice} from '../features/MiscSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    preferences:preferencesSlice.reducer,
    alert:alertSlice.reducer,
    misc:miscSlice.reducer
  },
});
