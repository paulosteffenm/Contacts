import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../models/Contact';

export interface IContactsState {
  contacts: Array<Contact>,
  filteredContacts: Array<Contact>,
  filterParam: string,
  currentContact: Contact,
  disableDone: boolean,
  showModal: boolean,
}

const DATUM = [
  new Contact({ Id: '0', Phone: 123123, UserName: 'Paulo Machado' }),
  new Contact({ Id: '1', Phone: 123123, UserName: 'Pwneir Frigh' }),
  new Contact({ Id: '2', Phone: 123123, UserName: 'Radsjn Pfeji' }),
  new Contact({ Id: '3', Phone: 123123, UserName: 'Tirohyg Kgbrej' }),
  new Contact({ Id: '4', Phone: 123123, UserName: 'Sgjhkfs Mklsa' }),
  new Contact({ Id: '5', Phone: 123123, UserName: 'Vsdgrh Queio' }),
  new Contact({ Id: '5', Phone: 123123, UserName: 'Asdgrh Queio' }),
  new Contact({ Id: '4', Phone: 123123, UserName: 'Agjhkfs Mklsa' }),
];

const initialState: IContactsState = {
  contacts: DATUM,
  filteredContacts: DATUM,
  filterParam: '',
  currentContact: new Contact(),
  disableDone: true,
  showModal: false
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    changeInputValue: (state, action: PayloadAction<Contact>): void => {
      state.currentContact = action.payload;
    },
    changeFilterParam: (state, action: PayloadAction<string>): void => {
      state.filterParam = action.payload;
      const copyContacts = [...state.contacts];
      if (state.filterParam !== '') {
        state.filteredContacts = copyContacts.filter((contact) => contact.UserName.toLowerCase().includes(state.filterParam.toLowerCase()));
      } else {
        state.filteredContacts = copyContacts;
      }
    },
    addContact: (state): void => {
      const newContact = new Contact({ ...state.currentContact });
      state.currentContact = new Contact();
      newContact.Id = new Date().toString();
      state.contacts = state.contacts.concat(newContact);
      if (state.filterParam === '') {
        state.filteredContacts = [...state.contacts];
      } else {
        state.filteredContacts = [...state.contacts.filter((contact) => contact.UserName.toLowerCase().includes(state.filterParam.toLowerCase()))];
      }

    },
    updateContact: (state): void => {
      const newContact = new Contact({ ...state.currentContact });
      state.currentContact = new Contact();
      const copyContacts = [...state.contacts.filter((contact) => contact.Id !== newContact.Id)];
      state.contacts = copyContacts.concat(newContact);
      if (state.filterParam === '') {
        state.filteredContacts = [...state.contacts];
      } else {
        state.filteredContacts = [...state.contacts.filter((contact) => contact.UserName.toLowerCase().includes(state.filterParam.toLowerCase()))];
      }
    },
    deleteContact: (state): void => {
      const copyContacts = [...state.contacts.filter((contact) => contact.Id !== state.currentContact.Id)];
      state.currentContact = new Contact();
      state.contacts = copyContacts;
      if (state.filterParam === '') {
        state.filteredContacts = [...state.contacts];
      } else {
        state.filteredContacts = [...state.contacts.filter((contact) => contact.UserName.toLowerCase().includes(state.filterParam.toLowerCase()))];
      }
    },
    setDisableDone: (state, action: PayloadAction<boolean>): void => {
      state.disableDone = action.payload;
    },
    setShowModal: (state): void => {
      state.showModal = !state.showModal;
    }
  },
});

export const { addContact, setDisableDone, changeInputValue, updateContact, deleteContact, setShowModal, changeFilterParam } = contactSlice.actions;

export default contactSlice.reducer;