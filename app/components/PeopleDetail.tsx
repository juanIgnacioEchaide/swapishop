import React from 'react';
import {RowSingleValue} from './RowSingleValue';
import {View} from 'react-native';
import {People} from '../models';

export const PeopleDetail = (item: People) => {
  return (
    <View>
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
