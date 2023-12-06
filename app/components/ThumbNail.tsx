import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {People} from '../models';
import {ThumbNailSummary} from './ThumbNailSummary';

export const ThumbNail = ({
  item,
  image,
  setSelectedItem,
  setModalVisible,
}: {
  item: People;
  image: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<People>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSelection = useCallback(() => {
    console.log(item);
    setSelectedItem(item);
    setModalVisible(true);
  }, [item, setModalVisible, setSelectedItem]);

  return (
    <TouchableOpacity
      key={item.name}
      style={styles.thumbNailContainer}
      onPress={handleSelection}>
      <ThumbNailSummary item={item} uri={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbNailContainer: {
    backgroundColor: 'red',
    height: 175,
    marginVertical: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
