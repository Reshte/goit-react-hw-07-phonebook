import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterReducer } from 'redux/filterSlice';
import { contactsReducer } from 'redux/contactsSlice';

const mainReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
