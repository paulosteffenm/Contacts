import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ManageContactHeader from '../../components/ManageContactHeader';
import ModalDeleteItem from '../../components/ModalDeleteItem';
import { Contact } from '../../models/Contact';
import { setDisableDone, IContactsState, changeInputValue, deleteContact, setShowModal } from '../../redux/reducers/contact.reducer';
import { AppDispatch, RootState } from '../../redux/store/store';
import { RootStackParamList } from '../RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'ManageContact'>;

const ManageContact = () => {

  const { currentContact, showModal } = useSelector<RootState, IContactsState>((state) => state.contact);

  const navigation = useNavigation<authScreenProp>();

  const dispatch = useDispatch<AppDispatch>();

  const handleChangeName = (name: string) => {
    const newContact = new Contact({
      ...currentContact,
      UserName: name,
    });
    dispatch(changeInputValue(newContact));
    handleDisableDone(newContact);
  };

  const handleChangePhone = (phone: string) => {
    const newContact = new Contact({
      ...currentContact,
      Phone: +phone,
    });
    dispatch(changeInputValue(newContact));
    handleDisableDone(newContact);
  };

  const handleDisableDone = (contact: Contact) => {
    const shouldDisable = !(Boolean(contact.Phone) && Boolean(contact.UserName.toString().length));
    dispatch(setDisableDone(shouldDisable));
  };

  const handleBack = () => {
    dispatch(changeInputValue(new Contact()));
    navigation.navigate('Contacts');
  };

  const handleDelete = () => {
    dispatch(setShowModal());
    //dispatch(deleteContact());
    //handleBack();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <ManageContactHeader />
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
        >
          <ModalDeleteItem />
        </Modal>
        <View style={styles.contactView}>
          <View style={styles.viewImage}>
            <Image
              source={{ uri: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg' }}
              style={styles.userImage}
            />
            <Text style={styles.addPhoto}>Add Photo</Text>
          </View>
          <View style={styles.viewInputs}>
            <TextInput
              style={[styles.textInput, styles.textBorder]}
              placeholder='Name'
              value={currentContact.UserName || ''}
              onChangeText={(text) => handleChangeName(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Number'
              value={currentContact.Phone?.toString() || ''}
              onChangeText={(text) => handleChangePhone(text)}
              keyboardType="numeric"
            />
            {currentContact.Id &&
              <TouchableOpacity onPress={() => handleDelete()}>
                <Text style={styles.deleteContact}>
                  Delete Contact
                </Text>
              </TouchableOpacity>}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ManageContact;

const styles = StyleSheet.create({
  safeView: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0E0E0E',
    height: '100%'
  },
  contactView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E0E0E',
    height: '100%'
  },
  viewImage: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 500
  },
  addPhoto: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 5
  },
  viewInputs: {
    width: '100%'
  },
  textInput: {
    padding: 5,
    color: '#f5f5f7',
    width: '100%',
    backgroundColor: '#3B3B3B',
    outlineStyle: 'none',
    borderColor: '#0F0F0F'
  },
  textBorder: {
    borderBottomWidth: 1,
    borderColor: '#636366',
  },
  deleteContact: {
    padding: 5,
    color: '#FF453A',
    width: '100%',
    backgroundColor: '#3B3B3B',
    outlineStyle: 'none',
    borderColor: '#636366',
    borderTopWidth: 1,
    fontWeight: '500'
  }
});