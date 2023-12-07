import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {People} from '../models';

export const ThumbNailSummary = ({
  item,
  uri,
  notAvailable,
}: {
  item: People;
  uri: string;
  notAvailable: boolean;
}) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{item?.name}</Text>
      <Image source={{uri: notAvailable ? '' : uri}} />
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
