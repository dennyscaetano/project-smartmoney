import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from 'react-native';

import {getAllCategories} from '../../../services/Categories';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories();
      setAllCategories(data);
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>Alimentação</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={allCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default NewEntryCategoryPicker;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  modalItemText: {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.white,
  },
  pickerButton: {
    backgroundColor: Colors.asphalt,
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    textAlign: 'center',
    color: Colors.white,
  },
  closeButton: {
    backgroundColor: Colors.background,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 14,
    color: Colors.green,
    textAlign: 'center',
  },
});
