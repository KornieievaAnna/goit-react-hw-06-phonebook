import { configureStore } from "@reduxjs/toolkit";
import { persistedContactsReducer } from './contactSlice';


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: {},
  },
});