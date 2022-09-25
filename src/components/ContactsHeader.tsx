import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../views/RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Contacts'>;

const ContactsHeader = () => {
  const navigation = useNavigation<authScreenProp>();

  const handleNewContact = () => {
    navigation.navigate('ManageContact');
  };

  return (
    <View style={styles.safeView}>
      <View style={styles.contactsPlus}>
        <AntDesign name="plus" size={24} color="transparent" />
        <Text style={styles.contactsText}>Contacts</Text>
        <TouchableOpacity onPress={() => handleNewContact()}>
          <AntDesign name="plus" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchView}>
        <AntDesign
          style={styles.searchIcon}
          name="search1"
          size={16}
          color="#f5f5f7" />
        <TextInput
          style={styles.search}
          placeholder='Search'
        />
      </View>
    </View>
  );
};

export default ContactsHeader;

const styles = StyleSheet.create({
  safeView: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0E0E0E',
    position: 'absolute',
    zIndex: 10,
    width: '100%'
  },
  contactsPlus: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactsText: {
    color: '#f5f5f7',
    fontWeight: '500',
    fontSize: 15
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 5,
    zIndex: 10,
  },
  search: {
    padding: 5,
    paddingLeft: 25,
    color: '#f5f5f7',
    width: '100%',
    backgroundColor: '#3B3B3B',
    borderWidth: 2,
    borderRadius: 10,
    outlineStyle: 'none',
    borderColor: '#0F0F0F'
  }
});