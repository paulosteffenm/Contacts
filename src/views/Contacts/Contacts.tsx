import { StyleSheet, SafeAreaView, SectionList, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ContactItem from '../../components/ContactItem';
import ContactsHeader from '../../components/ContactsHeader';
import { Contact } from '../../models/Contact';
import { IContactsState } from '../../redux/reducers/contact.reducer';
import { RootState } from '../../redux/store/store';

interface IGroupedContacts {
  title: string;
  data: Array<Contact>;
}

const Contacts = () => {

  const { contacts } = useSelector<RootState, IContactsState>((state) => state.contact);

  const groupedContacts = contacts.reduce((acc, curr) => {
    const group = [...curr.UserName][0].toUpperCase();
    const foundItem = acc.find((contact) => [...contact.title][0] === group);
    if (foundItem) {
      foundItem.data.push(curr);
    } else {
      acc.push({
        title: group,
        data: [curr]
      });
    }
    return acc;
  }, [] as Array<IGroupedContacts>)
    .sort((contactA, contactB) => contactA.title.localeCompare(contactB.title));

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <ContactsHeader />
        <SectionList<Contact>
          sections={groupedContacts as any}
          style={{ marginTop: 100, paddingHorizontal: 20 }}
          renderItem={(item) => ContactItem(item)}
          keyExtractor={(item) => item.Id}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.headerGroup}>{title}</Text>
          )}
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
  },
  headerGroup: {
    color: '#8E8E93',
    fontWeight: 'bold',
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#3B3B3B',
    paddingVertical: 10,
  }
});