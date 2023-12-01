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
    setSelectedItem(item);
    setModalVisible(true);
  }, [item, setModalVisible, setSelectedItem]);

  return (
    <TouchableOpacity
      style={styles.thumbNailContainer}
      onPress={handleSelection}>
      <ThumbNailSummary item={item} type={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 7,
    width: 150,
    height: 150,
  },
  descriptionContainer: {
    marginTop: 10,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginRight: 20,
  },
  thumbNailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    display: 'flex',
    flexDirection: 'row',
  },
});
