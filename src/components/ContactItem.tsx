import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, ListRenderItemInfo, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Contact } from '../models/Contact';
import { changeInputValue, setDisableDone } from '../redux/reducers/contact.reducer';
import { AppDispatch } from '../redux/store/store';
import { RootStackParamList } from '../views/RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Contacts'>;
const ContactItem = ({ item }: ListRenderItemInfo<Contact>) => {

  const navigation = useNavigation<authScreenProp>();

  const dispatch = useDispatch<AppDispatch>();

  const handleClickItem = (item: Contact) => {
    dispatch(changeInputValue(item));
    dispatch(setDisableDone(false));
    navigation.navigate('ManageContact');
  };

  return (
    <TouchableOpacity onPress={() => handleClickItem(item)}>
      <Text style={styles.lineStyle}>{item.UserName}</Text>
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  lineStyle: {
    color: '#f5f5f7',
    borderBottomWidth: 2,
    borderBottomColor: '#3B3B3B',
    paddingVertical: 10,
    fontWeight: '500'
  }
});