import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import useCharacterData from '../hooks/UseCharacters';

export const CharacterCatalogueScreen = () => {
  const {characters, status} = useCharacterData();

  if (status === 'pending') {
    <View style={styles.container}>
      <Text>loading...</Text>
    </View>;
  }

  if (status === 'error') {
    <View style={styles.container}>
      <Text>error!</Text>
    </View>;
  }
  return (
    <View style={styles.container}>
      <Text>Characters catalogue</Text>
      <Text>{characters && JSON.stringify(characters)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
