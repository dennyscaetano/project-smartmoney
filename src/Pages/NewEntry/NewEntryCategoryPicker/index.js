import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
        <Text>Modal</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default NewEntryCategoryPicker;

const styles = StyleSheet.create({
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
});
