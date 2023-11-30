import React, {ReactNode} from 'react';
import {Text} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';

export const CharacterCatalogueScreen = (): ReactNode => {
  return (
    <View style={styles.container}>
      <Text>LPM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
