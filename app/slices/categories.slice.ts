import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const {} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
