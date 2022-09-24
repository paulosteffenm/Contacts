import { View, StyleSheet, Image, TextInput, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ManageContactHeader from '../../components/ManageContactHeader';
import { IContactsState } from '../../redux/reducers/contact.reducer';
import { RootState } from '../../redux/store/store';

const ManageContact = () => {

  const { currentContact } = useSelector<RootState, IContactsState>((state) => state.contact);

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeView}>
          <ManageContactHeader />
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
                value={currentContact.UserName}
              />
              <TextInput
                style={styles.textInput}
                placeholder='Number'
                value={currentContact.Phone?.toString()}
                keyboardType="numeric"
              />
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
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
  }
});