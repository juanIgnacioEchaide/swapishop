import React, {ReactNode} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Color} from '../constants';

export const PlaceholderScreen = (): ReactNode => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swapi</Text>
      <Text style={styles.title}>Shop</Text>
    </View>
  );
};

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.SPLASH,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    transform: [{rotate: '-30deg'}],
    lineHeight: 110,
    top: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: 'transparent',
    margin: -8,
    fontSize: 120,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
});
