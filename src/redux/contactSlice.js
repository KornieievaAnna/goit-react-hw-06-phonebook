import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'todos',
  initialState: contactInitialState,

  reducers: {
    addContact(state, { payload }) {
      state.push({
        id: nanoid(),
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact(state, action) {
      return state = state.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export const ContactReducer = contactSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  ContactReducer
);

//Selectors

export const getContacts = state => state.contacts;
