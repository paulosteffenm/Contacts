import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../redux/reducers/contact.reducer';
import { AppDispatch } from '../redux/store/store';

const ModalDeleteItem = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = () => {
    dispatch(setShowModal());
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Are you sure?</Text>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.cancelButton}>
              Cancel
            </Text>
          </TouchableOpacity>

          <View style={styles.rectangle} />

          <TouchableOpacity>
            <Text style={styles.deleteButton}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalDeleteItem;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080'
  },
  modalView: {
    margin: 20,
    backgroundColor: '#48484A',
    borderRadius: 10,
    width: 150,
    height: 100,
    alignItems: 'center',
    elevation: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  modalText: {
    color: '#fff',
    fontWeight: '500',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: '#3B3B3B',
  },
  deleteButton: {
    marginTop: 5,
    color: '#FF453A',
    fontWeight: '500'
  },
  cancelButton: {
    marginTop: 5,
    color: '#007AFF',
    fontWeight: '500'
  },
  rectangle: {
    width: 2,
    height: 30,
    backgroundColor: '#3B3B3B',
  },
});