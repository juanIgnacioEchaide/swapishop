import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {People} from '../models';
import {ThumbNailSummary} from './ThumbNailSummary';
import {getImageArchive} from '../services';

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
      {uri && (
        <ThumbNailSummary item={item} uri={uri} notAvailable={notAvailable} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbNailContainer: {
    height: 175,
    marginVertical: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
