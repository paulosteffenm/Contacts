import { FlatList } from 'react-native';
import ContactsHeader from '../../components/ContactsHeader';

const Contacts = () => {
  return (
    <>
      <ContactsHeader />
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      </FlatList> */}
    </>
  );
};

export default Contacts;