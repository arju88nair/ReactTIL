import { configureStore } from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import { userSlice } from '../features/UserSlice';
import {preferencesSlice} from '../features/PreferencesSlice';
import {alertSlice} from '../features/AlertSlice';
import {miscSlice} from '../features/MiscSlice';
import {boardsSlice} from '../features/BoardsSlice';
// const loggerMiddleware = createLogger();

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    preferences:preferencesSlice.reducer,
    alert:alertSlice.reducer,
    misc:miscSlice.reducer,
    boards:boardsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
