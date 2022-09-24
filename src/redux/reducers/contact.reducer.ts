import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../models/Contact';

export interface IContactsState {
  contacts: Array<Contact>,
  currentContact: Contact,
  disableDone: boolean
}

const initialState: IContactsState = {
  contacts: [],
  currentContact: new Contact(),
  disableDone: true
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>): void => {
      state.contacts = state.contacts.concat(action.payload);
    }
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;