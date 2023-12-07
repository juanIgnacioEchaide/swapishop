import React from 'react';
import {StyleSheet, Image} from 'react-native';

export const ThumbNailImage = ({uri}: {uri: string}) => {
  return (
    <Image
      height={200}
      width={200}
      source={{uri: uri}}
      style={styles.image}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'flex-end',
    paddingTop: 20,
    height: 200,
    width: 300,
    backgroundColor: '#9999',
  },
});
