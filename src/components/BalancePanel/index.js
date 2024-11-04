import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

const BalancePanel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  container: {},
  panel: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: -25,
    marginRight: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
