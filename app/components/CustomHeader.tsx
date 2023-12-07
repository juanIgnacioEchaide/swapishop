import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../constants';

export const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Swapishop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Color.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  headerTitle: {
    fontFamily: 'Verdana, sans-serif',
    fontSize: 25,
    fontWeight: '700',
    color: '#eeee',
    marginLeft: 40,
  },
  headerLeft: {
    marginLeft: 40,
  },
});
