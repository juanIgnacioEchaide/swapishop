import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {People} from '../models';

export const ThumbNailSummary = ({item, uri}: {item: People; uri: string}) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{item?.name}</Text>
      <Image source={{uri: uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbNailContainer: {
    borderRadius: 8,
    justifyContent: 'space-around',
    height: 100,
    width: 375,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
