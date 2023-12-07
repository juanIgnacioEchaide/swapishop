/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {People} from '../models';

export const ThumbNailSummary = ({
  item,
  uri,
}: {
  item: People;
  uri: string;
  notAvailable: boolean;
}) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text style={styles.text}>{item?.name}</Text>
      <Image
        height={200}
        width={200}
        source={{uri: uri}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.blur} />
    </View>
  );
};

const styles = StyleSheet.create({
  celuloidBorder: {
    width: 20,
    height: 20,
    backgroundColor: 'grey',
  },
  text: {
    top: 100,
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'left',
    position: 'absolute',
    zIndex: 3,
    color: 'white',
  },
  thumbNailContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    justifyContent: 'space-around',
    height: 150,
    width: 370,
    backgroundColor: '#99fff',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'flex-end',
    paddingTop: 20,
    height: 200,
    width: 200,
    backgroundColor: '#9999',
  },
  blur: {
    height: 100,
    backgroundColor: 'black',
    opacity: 0.9,
  },
});
