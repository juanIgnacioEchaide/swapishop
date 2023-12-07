import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Color} from '../../constants';

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={Color.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    height: 50,
  },
});
