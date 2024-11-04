import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
    </View>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
