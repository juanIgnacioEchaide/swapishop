import React, {useEffect} from 'react';
import axios from 'axios';
import {useInfiniteQuery} from '@tanstack/react-query';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {People, SwapiResponse} from '../models';
import {URI} from '../constants';

export const CharactersCatalogueScreen = () => {
  const getPeople = async (page: any) => {
    const {data} = await axios.get<SwapiResponse<People>>(
      !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
    );
    return data;
  };

  const {data, fetchNextPage} = useInfiniteQuery<SwapiResponse<People>>({
    queryKey: ['starwars'],
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => fetchNextPage()}>
        <Text>next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
