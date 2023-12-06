import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {People} from '../models';
import {ThumbNailSummary} from './ThumbNailSummary';
import {VIEW} from '../constants';

export const ThumbNail = ({
  item,
  type,
  setSelectedItem,
  setModalVisible,
}: {
  item: People;
  type: VIEW;
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
      <ThumbNailSummary item={item} type={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1, // Change from height: height
    justifyContent: 'center',
    alignContent: 'center',
  },
  list: {
    backgroundColor: 'green',
    flex: 1,
    marginVertical: 2,
  },
  thumbNailContainer: {
    width: '100%',
    height: 100, // Change to a fixed pixel value
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  descriptionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 20,
    width: '100%',
    height: '10%', // Review and adjust height if necessary
  },
});
