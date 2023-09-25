// src/store.js
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Form/reducer';
import submitPageReducer from './Submit/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  submitPage: submitPageReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
