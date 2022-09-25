import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../models/Contact';

export interface IContactsState {
  contacts: Array<Contact>,
  currentContact: Contact
}

const initialState: IContactsState = {
  contacts: [
    new Contact({Id: '1'}),
    new Contact({Id: '2'}),
    new Contact({Id: '3'}),
    new Contact({Id: '5'}),
    new Contact({Id: '4'}),
  ],
  currentContact: new Contact()
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state): void => {
      const newContact = new Contact({ ...state.currentContact });
      state.currentContact = new Contact();
      newContact.Id = new Date().toString();
      state.contacts = state.contacts.concat(newContact);
    }
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;