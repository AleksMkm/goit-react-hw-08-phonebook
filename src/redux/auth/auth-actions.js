import { createAction } from '@reduxjs/toolkit';

export const toggleModal = createAction('modal/toggle');

export const nullifyError = createAction('error/nullify');
