import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { contactsOperations, contactsActions } from 'redux/contacts';

const { fetchContacts, addContact, deleteContact } = contactsOperations;
const { changeFilter } = contactsActions;

const entries = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

export const contacts = combineReducers({
  entries,
  filter,
  isLoading,
  error,
});
