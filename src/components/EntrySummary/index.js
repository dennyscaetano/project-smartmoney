import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = () => {
  return (
    <View style={styles.container}>
      <EntrySummaryList />
      <EntrySummaryChart />
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
