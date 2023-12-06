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
} from 'react-native';
import {People, SwapiResponse} from '../models';
import {URI, VIEW} from '../constants';

export const CharactersCatalogueScreen = () => {
  const getPeople = async (page: any) => {
    console.log('getPeople', page);
    const {data} = await axios.get<SwapiResponse<People>>(
      !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
    );
    return data;
  };

  const [selectedItem, setSelectedItem] = useState<People>({} as People);
  const [showModalVisible, setShowModalVisible] = useState<boolean>(false);

  const {data: characters, fetchNextPage} = useInfiniteQuery<
    SwapiResponse<People>
  >({
    queryKey: ['characters'],
    initialPageParam: 1,
    queryFn: ({pageParam}) => getPeople(pageParam),
    getNextPageParam: (lastPage: SwapiResponse<People>) =>
      lastPage?.next ? lastPage?.next.split('=')[1] + 1 : undefined,
  });

  const renderThumbNail: ListRenderItem<People> = ({item}: {item: People}) => {
    return (
      <View>
        <ThumbNail
          item={item}
          type={VIEW.PEOPLE}
          setSelectedItem={setSelectedItem}
          setModalVisible={() => setShowModalVisible(true)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={characters?.pages?.flatMap(page => page?.results)}
        renderItem={renderThumbNail}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 0.1) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.1}
        contentContainerStyle={styles.list}
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
    justifyContent: 'center',
    alignContent: 'center',
    width: width,
    height: height,
  },
  list: {
    width: width - 2,
    height: 600,
    marginVertical: 10,
  },
});
