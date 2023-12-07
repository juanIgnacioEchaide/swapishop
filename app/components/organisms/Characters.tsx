import React, {useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {People, SwapiResponse} from '../../models';
import {Color} from '../../constants';
import {CharactersList} from '../../components/molecules';
import {Loader} from '../../components/atoms';
import {Dimensions, StyleSheet, View} from 'react-native';
import {getPeople} from '../../services';

export const Characters = () => {
  const [selectedItem, setSelectedItem] = useState<People>({} as People);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {
    data: characters,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery<SwapiResponse<People>>({
    queryKey: ['characters'],
    initialPageParam: 0,
    queryFn: ({pageParam}) => getPeople(pageParam),
    getNextPageParam: (lastPage: SwapiResponse<People>) => {
      return lastPage?.next ? lastPage?.next.split('=')[1] : undefined;
    },
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }

  return (
    <CharactersList
      setSelectedItem={setSelectedItem}
      selectedItem={selectedItem}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      characters={characters}
      fetchNextPage={fetchNextPage}
      renderLoader={() => <Loader />}
    />
  );
};

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  loaderContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    backgroundColor: Color.SECONDARY,
  },
});
