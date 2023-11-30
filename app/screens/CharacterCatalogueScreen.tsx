import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import useCharacterData from '../hooks/UseCharacters';
import {ThumbNail} from '../components/ThumbNail';
import {People} from '../models';

export const CharacterCatalogueScreen = () => {
  const {characters, isLoading} = useCharacterData();

  if (isLoading) {
    <View style={styles.container}>
      <Text>loading...</Text>
    </View>;
  }

  const renderThumbNail = ({item}: {item: People}) => {
    return <ThumbNail item={item} />;
  };

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderThumbNail}
        keyExtractor={character => character.name}
        contentContainerStyle={styles.container}
      />
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
  descriptionContainer: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
});
