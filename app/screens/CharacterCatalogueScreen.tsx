import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useInfiniteQuery} from '@tanstack/react-query';
import {ThumbNail} from '../components';
import {View, StyleSheet, Text, FlatList, ListRenderItem} from 'react-native';
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

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

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

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        renderItem={renderThumbNail}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
