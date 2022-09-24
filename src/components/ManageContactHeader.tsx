import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../views/RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'ManageContact'>;

const ManageContactHeader = () => {

  const navigation = useNavigation<authScreenProp>();

  const handleBack = () => {
    navigation.navigate('Contacts');
  };

  return (
    <View style={styles.safeView}>
      <TouchableOpacity onPress={() => handleBack()}>
        <Text style={styles.navigateButtons}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.contactsText}>Contacts</Text>
      <Text style={styles.navigateButtons}>Done</Text>
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
    zIndex:10,
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
  }
});