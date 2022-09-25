import { FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ContactItem from '../../components/ContactItem';
import ContactsHeader from '../../components/ContactsHeader';
import { IContactsState } from '../../redux/reducers/contact.reducer';
import { RootState } from '../../redux/store/store';

const Contacts = () => {

  const { contacts } = useSelector<RootState, IContactsState>((state) => state.contact);

  console.log(contacts);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <ContactsHeader />
        <FlatList
          style={{marginTop: 100}}
          data={contacts}
          renderItem={ContactItem}
          keyExtractor={(item) => item.Id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  safeView: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0E0E0E',
    height: '100%'
  }
});