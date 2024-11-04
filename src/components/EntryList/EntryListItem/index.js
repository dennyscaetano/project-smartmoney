import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);

  // const bulletColor = entry.category.color || Colors.white;
  const bulletColor = Colors.blue;

  return (
    <View>
      <Svg height="50" width="30">
        {showBulletLine && (
          <Rect
            x="9"
            y={bulletLineY}
            width="1.5"
            height={bulletLineHeight}
            fill={Colors.background}
          />
        )}

        <Circle
          cx="10"
          cy="25"
          r={8}
          stroke={Colors.background}
          strokeWidth="1.5"
          fill={bulletColor}
        />
      </Svg>
    </View>
  );
};

export default EntryListItem;

const styles = StyleSheet.create({});
