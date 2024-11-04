import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.debitButton}>
        <Text style={styles.debitButtonPrefix}>-</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue && onChangeValue(rawValue);
        }}
        style={styles.input}
      />
    </View>
  );
};

export default NewEntryInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debitButton: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.white,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
  input: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 20,
    fontSize: 28,
    textAlign: 'right',
    color: Colors.white,
  },
});
