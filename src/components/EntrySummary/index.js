import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

import Colors from '../../styles/Colors';

const EntrySummary = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <View style={styles.actionContainer}>
        <Text style={styles.actionLabel}>Últimos 7 dias</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="insert-chart" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    padding: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    margin: 5,
  },
  title: {
    marginBottom: 5,
    fontSize: 12,
    color: Colors.white,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    marginTop: 3,
    marginRight: 2,
    color: Colors.white,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});
