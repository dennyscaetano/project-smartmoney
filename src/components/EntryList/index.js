import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

import {getEntries} from '../../services/Entries';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <Container
      title="Últimos lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;

const styles = StyleSheet.create({});
