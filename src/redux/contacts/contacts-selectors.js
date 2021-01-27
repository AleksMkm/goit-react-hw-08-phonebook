import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getLoadingData = state => state.isLoading;

export const getErrorData = state => state.error;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact?.name?.toLowerCase().includes(normalizedFilter),
    );
  },
);
