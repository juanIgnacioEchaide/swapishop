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
    const {data} = await axios.get<SwapiResponse<People>>(
      !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
    );
    return data;
  };

  const [selectedItem, setSelectedItem] = useState<People>({} as People);
  const [showModalVisible, setShowModalVisible] = useState<boolean>(false);

  const {data, fetchNextPage} = useInfiniteQuery<SwapiResponse<People>>({
    queryKey: ['characters'],
    initialPageParam: 1,
    queryFn: ({pageParam = 1}) => getPeople(pageParam),
    getNextPageParam: (lastPage: SwapiResponse<People>) => {
      if (!lastPage?.next) {
        return undefined;
      }
      return lastPage.next.split('=')[1] + 1;
    },
  });

  const renderThumbNail: ListRenderItem<People> = ({item}: {item: People}) => {
    return (
      <View>
        <ThumbNail
          item={item}
          type={VIEW.PEOPLE}
          setSelectedItem={setSelectedItem}
          setModalVisible={setShowModalVisible}
        />
      </View>
    );
  };
  const columns = 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.pages?.flatMap(page => page?.results)}
        renderItem={renderThumbNail}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.4}
        numColumns={columns}
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
    width: width - 10,
    height: height - 10,
  },
});
