import React, {useState} from 'react';
import axios from 'axios';
import {useInfiniteQuery} from '@tanstack/react-query';
import {DetailsModal, ThumbNail} from '../components';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Dimensions,
  Text,
} from 'react-native';
import {People, SwapiResponse} from '../models';
import {URI, VIEW} from '../constants';

export const CharactersCatalogueScreen = () => {
  const getPeople = async (page: any) => {
    const {data} = await axios.get<SwapiResponse<People>>(
      !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
    );
    return data;
  };

  const [selectedItem, setSelectedItem] = useState<People>({} as People);
  const [showModalVisible, setShowModalVisible] = useState<boolean>(false);

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

  const renderThumbNail: ListRenderItem<People> = ({item}: {item: People}) => {
    return (
      <ThumbNail
        item={item}
        type={VIEW.PEOPLE}
        setSelectedItem={setSelectedItem}
        setModalVisible={() => setShowModalVisible(true)}
      />
    );
  };

  if (isLoading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters?.pages?.flatMap(page => page?.results)}
        renderItem={renderThumbNail}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.1}
        contentContainerStyle={styles.list}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListFooterComponent={() => (
          <>
            <Text>loadingmore...</Text>
          </>
        )}
      />
      {showModalVisible && (
        <DetailsModal
          visible={false}
          onClose={() => setShowModalVisible(false)}
          item={selectedItem}
        />
      )}
    </View>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
    width: 700,
    height: height,
  },
  list: {
    backgroundColor: 'green',
    width: width - 2,
    height: 700,
    marginVertical: 1,
  },
});
