import React, {useState} from 'react';
import axios from 'axios';
import {useInfiniteQuery} from '@tanstack/react-query';
import {People, SwapiResponse} from '../../models';
import {URI} from '../../constants';
import {CharactersList} from '../../components/molecules';
import {Loader} from '../../components/atoms';
import {StyleSheet, View} from 'react-native';

export const Characters = () => {
  const getPeople = async (page: any) => {
    const {data} = await axios.get<SwapiResponse<People>>(
      !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
    );
    return data;
  };

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

const styles = StyleSheet.create({
  loaderContainer: {
    marginTop: 20,
  },
});
