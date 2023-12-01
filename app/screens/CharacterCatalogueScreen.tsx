import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import useCharacterData from '../hooks/UseCharacters';
import {ThumbNail} from '../components/ThumbNail';
import {People} from '../models';
import {VIEW, defaultPeopleItem} from '../constants';
import {DetailsModal} from '../components';
import {PageNavigation} from '../components/PageNavigation';

export const CharacterCatalogueScreen = () => {
  const {characters, isLoading, error, setPage, pagination} =
    useCharacterData();

  const {current, totalPages} = pagination;

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

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Ups!</Text>
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
      <PageNavigation
        currentPage={current || 0}
        total={totalPages}
        setPage={setPage}
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
