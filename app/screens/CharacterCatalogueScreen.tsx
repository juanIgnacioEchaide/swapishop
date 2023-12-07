import React, {useState} from 'react';
import axios from 'axios';
import {useInfiniteQuery} from '@tanstack/react-query';
import {DetailsModal, ThumbNail} from '../components';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Text,
  ActivityIndicator,
} from 'react-native';
import {People, SwapiResponse} from '../models';
import {Color, URI} from '../constants';
import {getIdFromURL} from '../helpers';

export const CharactersCatalogueScreen = () => {
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

  const renderLoader = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Color.PRIMARY} />
      </View>
    );
  };

  const renderThumbNail: ListRenderItem<People> = ({item}: {item: People}) => {
    return (
      <ThumbNail
        item={item}
        imageId={getIdFromURL(item.url)}
        setSelectedItem={setSelectedItem}
        setModalVisible={setModalVisible}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Color.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={characters?.pages?.flatMap(page => page?.results)}
        renderItem={renderThumbNail}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderLoader}
      />
      <DetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={selectedItem}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  descriptionContainer: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  screenContainer: {
    backgroundColor: Color.SECONDARY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  loader: {
    height: 50,
  },
});
