import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import useCharacterData from '../hooks/UseCharacters';
import {ThumbNail} from '../components/ThumbNail';
import {People} from '../models';
import {VIEW, defaultPeopleItem} from '../constants';
import {DetailsModal} from '../components';

export const CharacterCatalogueScreen = () => {
  const {characters, isLoading} = useCharacterData();
  const [selectedItem, setSelectedItem] = useState<People>(defaultPeopleItem);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderThumbNail = ({item}: {item: People}) => {
    return (
      <ThumbNail
        item={item}
        type={VIEW.PEOPLE}
        setSelectedItem={setSelectedItem}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderThumbNail}
        keyExtractor={character => character.name}
        contentContainerStyle={styles.container}
      />
      {modalVisible && (
        <DetailsModal
          visible={modalVisible}
          onClose={closeModal}
          item={selectedItem}
        />
      )}
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
