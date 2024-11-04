import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  return (
    <View>
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
  input: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 28,
    textAlign: 'center',
    color: Colors.white,
  },
});
