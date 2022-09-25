import { View, Text, ListRenderItemInfo, StyleSheet } from 'react-native';
import { Contact } from '../models/Contact';

const ContactItem = ({ item }: ListRenderItemInfo<Contact>) => {
  return (
    <View>
      <Text style={styles.lineStyle}>{item.UserName}</Text>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  lineStyle: {
    color: '#f5f5f7',
    borderBottomWidth: 2,
    borderBottomColor: '#3B3B3B',
    paddingVertical: 10,
  }
});