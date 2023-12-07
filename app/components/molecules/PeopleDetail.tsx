import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {People} from '../../models';
import {RowSingleValue} from '../atoms';

export const PeopleDetail = (item: People) => {
  return (
    <View>
      <Text style={styles.title}>{item?.name}</Text>
      <RowSingleValue label="Birth year" value={item?.birthYear} />
      <RowSingleValue label="Eye color" value={item?.eyeColor} />
      <RowSingleValue label="Gender" value={item?.gender} />
      <RowSingleValue label="Hair color" value={item?.hairColor} />
      <RowSingleValue label="Birth Year" value={item?.height} />
      <RowSingleValue label="Birth Year" value={item?.mass} />
      <RowSingleValue label="Birth Year" value={item?.skinColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    bottom: 10,
    marginBottom: 10,
  },
});
