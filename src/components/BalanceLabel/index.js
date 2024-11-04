import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

export default BalanceLabel;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  panel: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
});
