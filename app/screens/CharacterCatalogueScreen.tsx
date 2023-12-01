import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
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
        <ActivityIndicator size={'large'} color={'#ffff'} />
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
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderThumbNail}
        keyExtractor={character => character.name}
        contentContainerStyle={styles.flatlistContainer}
        numColumns={2}
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

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: windowWidth,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  flatlistContainer: {
    width: 400,
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
