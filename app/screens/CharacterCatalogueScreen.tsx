import {useInfiniteQuery} from '@tanstack/react-query';
import React, {useCallback} from 'react';
import {View, Text, StyleSheet, ListRenderItem} from 'react-native';
import {getPeopleByPage} from '../services';
import {People, SwapiResponse} from '../models';
import {FlatList} from 'react-native-gesture-handler';

export const CharactersCatalogueScreen = () => {
  const getItems = useCallback(
    async (page: number): Promise<SwapiResponse<People> | Error> => {
      try {
        const res = await getPeopleByPage(page);
        return res;
      } catch (e: any) {
        return Error('items fetch failed');
      }
    },
    [],
  );

  const getPageParam = useCallback((lastPage: SwapiResponse<People>) => {
    const urlParams = new URLSearchParams(lastPage?.next?.split('?')[1]);
    return parseInt(urlParams.get('page') || '1', 10);
  }, []);

  const {data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: ({pageParam}: {pageParam: number}) => getItems(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: SwapiResponse<People>) => {
      if (lastPage && lastPage.next) {
        return getPageParam(lastPage);
      }
      return undefined;
    },
    getPreviousPageParam: firstPage => {
      if (firstPage && firstPage.previous) {
        const urlParams = new URLSearchParams(firstPage.previous.split('?')[1]);
        return parseInt(urlParams.get('page') || '1', 10);
      }
      return undefined;
    },
  });

  const renderItem: ListRenderItem<any> = ({item}: {item: {name: string}}) => {
    return (
      <View key={item.name}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.pages.flatMap(page => page.results) || []}
        renderItem={renderItem}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 0) {
            return;
          }
          fetchNextPage();
        }}
        onEndReachedThreshold={0.1}
        numColumns={2}
      />
      <View>{JSON.stringify(data)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
