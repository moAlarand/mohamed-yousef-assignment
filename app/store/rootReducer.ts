import {combineReducers} from '@reduxjs/toolkit';
import {moviesReducer} from '../slices';
import {PersistConfig, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reducers = combineReducers({
  categories: moviesReducer,
});

const persistConfig: PersistConfig<RootStore> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: [],
};

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
