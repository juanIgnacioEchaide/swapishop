import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {People} from '../models';
import {getImageArchive} from '../services';
import {ThumbNailSummary} from './molecules/ThumbnailSummary';
import {Color} from '../constants';

export const CelulloidEffect = ({side}: {side: 'left' | 'right'}) => (
  <View
    style={
      side === 'left' ? styles.celluloidParentLeft : styles.celluloidParentRight
    }>
    <View style={styles.celluloidChildren} />
    <View style={styles.celluloidChildren} />
    <View style={styles.celluloidChildren} />
    <View style={styles.celluloidChildren} />
    <View style={styles.celluloidChildren} />
  </View>
);

export const ThumbNail = ({
  item,
  imageId,
  setSelectedItem,
  setModalVisible,
}: {
  item: People;
  imageId: any;
  setSelectedItem: React.Dispatch<React.SetStateAction<People>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [notAvailable, setNotAvailable] = useState<boolean>(false);
  const [uri, setUri] = useState<string>('');

  const handleSelection = useCallback(() => {
    setSelectedItem(item);
    setModalVisible(true);
  }, [item, setModalVisible, setSelectedItem]);

  const handleFetchImage = useCallback(async () => {
    try {
      if (imageId) {
        const {image} = await getImageArchive(imageId);
        setUri(image);
      } else {
        setNotAvailable(true);
      }
    } catch (e) {
      setNotAvailable(true);
    }
  }, [imageId]);

  useEffect(() => {
    handleFetchImage();
  }, [handleFetchImage, imageId]);

  return (
    <TouchableOpacity
      key={item.name}
      style={styles.thumbNailContainer}
      onPress={handleSelection}>
      <CelulloidEffect side={'left'} />
      <View style={styles.middleContainer}>
        {uri && (
          <ThumbNailSummary item={item} uri={uri} notAvailable={notAvailable} />
        )}
      </View>
      <CelulloidEffect side={'right'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbNailContainer: {
    backgroundColor: 'grey',
    height: 175,
    marginVertical: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    height: 175,
    marginVertical: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  celluloidParentLeft: {
    left: 10,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  celluloidParentRight: {
    right: 10,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  celluloidChildren: {
    height: 20,
    width: 20,
    backgroundColor: Color.SECONDARY,
  },
});
