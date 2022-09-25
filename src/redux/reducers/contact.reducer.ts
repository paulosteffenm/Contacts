import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../models/Contact';

export interface IContactsState {
  contacts: Array<Contact>,
  currentContact: Contact
}

const initialState: IContactsState = {
  contacts: [
    new Contact({Id: '1', Phone: 123123, UserName: 'Pwneir Frigh'}),
    new Contact({Id: '2', Phone: 123123, UserName: 'Radsjn Pfeji'}),
    new Contact({Id: '3', Phone: 123123, UserName: 'Tirohyg Kgbrej'}),
    new Contact({Id: '4', Phone: 123123, UserName: 'Sgjhkfs Mklsa'}),
    new Contact({Id: '5', Phone: 123123, UserName: 'Vsdgrh Queio'}),
    new Contact({Id: '5', Phone: 123123, UserName: 'asdgrh Queio'}),
    new Contact({Id: '4', Phone: 123123, UserName: 'agjhkfs Mklsa'}),
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