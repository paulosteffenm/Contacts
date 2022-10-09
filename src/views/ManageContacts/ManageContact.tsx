import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ManageContactHeader from '../../components/ManageContactHeader';
import ModalDeleteItem from '../../components/ModalDeleteItem';
import { Contact } from '../../models/Contact';
import { setDisableDone, IContactsState, changeInputValue, setShowModal } from '../../redux/reducers/contact.reducer';
import { AppDispatch, RootState } from '../../redux/store/store';


const ManageContact = () => {

  const { currentContact, showModal } = useSelector<RootState, IContactsState>((state) => state.contact);

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

  const handleChangeEmail = (email: string) => {
    const newContact = new Contact({
      ...currentContact,
      Email: email,
    });
    dispatch(changeInputValue(newContact));
    handleDisableDone(newContact);
  };

  const handleChangeBirthDate = (birthDate: string) => {
    const newContact = new Contact({
      ...currentContact,
      BirthDate: birthDate,
    });
    dispatch(changeInputValue(newContact));
    handleDisableDone(newContact);
  };

  const handleChangeCompany = (company: string) => {
    const newContact = new Contact({
      ...currentContact,
      Company: company,
    });
    dispatch(changeInputValue(newContact));
    handleDisableDone(newContact);
  };

  const handleDisableDone = (contact: Contact) => {
    const shouldDisable = !(contact.UserName.toString().length);
    dispatch(setDisableDone(shouldDisable));
  };

  const handleDelete = () => {
    dispatch(setShowModal());
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
              source={{ uri: 'https://ksastcorpsites.blob.core.windows.net/site/general/63703629760793-image.jpg?width=100' }}
              style={styles.userImage}
            />
            <Text style={styles.addPhoto}>Add Photo</Text>
          </View>
          <View style={styles.viewInputs}>
            <TextInput
              style={[styles.textInput, styles.textBorder]}
              placeholder='Name'
              placeholderTextColor="#f5f5f7"
              value={currentContact.UserName || ''}
              onChangeText={(text) => handleChangeName(text)}
            />
            <TextInput
              style={[styles.textInput, styles.textBorder]}
              placeholder='Number'
              placeholderTextColor="#f5f5f7"
              value={currentContact.Phone?.toString() || ''}
              onChangeText={(text) => handleChangePhone(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.textInput, styles.textBorder]}
              placeholder='Email'
              placeholderTextColor="#f5f5f7"
              value={currentContact.Email || ''}
              onChangeText={(text) => handleChangeEmail(text)}
            />
            <TextInput
              style={[styles.textInput, styles.textBorder]}
              placeholder='Birth Date'
              placeholderTextColor="#f5f5f7"
              value={currentContact?.BirthDate || ''}
              onChangeText={(text) => handleChangeBirthDate(text)}
            />
            <TextInput
              style={[styles.textInput, styles.textBorder]}
              placeholder='Company'
              placeholderTextColor="#f5f5f7"
              value={currentContact.Company || ''}
              onChangeText={(text) => handleChangeCompany(text)}
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
    borderColor: '#636366',
    borderTopWidth: 1,
    fontWeight: '500'
  }
});