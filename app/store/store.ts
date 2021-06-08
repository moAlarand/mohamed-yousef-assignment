import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {rootReducer, RootStore} from './rootReducer';

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(rootStore);

export type AppDispatch = typeof rootStore.dispatch;
export type AppThunk = ThunkAction<void, RootStore, unknown, Action<string>>;
