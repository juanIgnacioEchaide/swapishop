import React, {useEffect} from 'react';
import {getAllPeople} from '../services';
import {StyleSheet, View, Text} from 'react-native';
import {useQuery} from '@tanstack/react-query';

export const CharacterCatalogueScreen = () => {
  const {data} = useQuery({
    queryKey: ['characters'],
    queryFn: () => getAllPeople(),
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>Characters catalogue</Text>
      <Text>{data && JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
