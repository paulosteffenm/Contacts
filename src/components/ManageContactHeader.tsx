import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../models/Contact';
import { addContact, changeInputValue, IContactsState, updateContact, setDisableDone } from '../redux/reducers/contact.reducer';
import { AppDispatch, RootState } from '../redux/store/store';
import { RootStackParamList } from '../views/RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'ManageContact'>;

const ManageContactHeader = () => {

  const navigation = useNavigation<authScreenProp>();

  const dispatch = useDispatch<AppDispatch>();

  const { disableDone, currentContact } = useSelector<RootState, IContactsState>((state) => state.contact);

  const handleBack = () => {
    dispatch(changeInputValue(new Contact()));
    dispatch(setDisableDone(true));
    navigation.navigate('Contacts');
  };

  const handleDone = () => {
    if (currentContact.Id) {
      dispatch(updateContact());
    } else {
      dispatch(addContact());
    }
    handleBack();
  };

  return (
    <View style={styles.safeView}>
      <TouchableOpacity onPress={() => handleBack()}>
        <Text style={styles.navigateButtons}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.contactsText}>Contacts</Text>
      <TouchableOpacity disabled={disableDone} onPress={() => handleDone()}>
        <Text style={(disableDone) ? styles.disableDone : styles.navigateButtons}>Done</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ManageContactHeader;

const styles = StyleSheet.create({
  safeView: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0E0E0E',
    position: 'absolute',
    zIndex: 10,
    width: '100%'
  },
  contactsText: {
    color: '#f5f5f7',
    fontWeight: '500',
    fontSize: 15
  },
  navigateButtons: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 14
  },
  disableDone: {
    color: '#48484A',
    fontWeight: '500',
    fontSize: 14
  }
});