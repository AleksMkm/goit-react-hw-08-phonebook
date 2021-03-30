import { createAction } from '@reduxjs/toolkit';

export const toggleModal = createAction('modal/toggle');

export const nullifyError = createAction('error/nullify');

export const nullifyCreationCode = createAction('creationCode/nullify');

export const setModalType = createAction('modal/type');
