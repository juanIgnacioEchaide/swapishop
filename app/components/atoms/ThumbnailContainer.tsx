import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {People} from '../../models';

export const ThumbNail = ({
  children,
  handleSelection,
  item,
}: {
  children: ReactNode;
  handleSelection: () => void;
  item: People;
}) => {
  return (
    <TouchableOpacity
      key={item.name}
      style={styles.thumbNailContainer}
      onPress={handleSelection}>
      {children}
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
