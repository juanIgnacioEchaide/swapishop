import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
      <View style={styles.celluloidParent}>
        <View style={styles.celluloidChildren} />
        <View style={styles.celluloidChildren} />
        <View style={styles.celluloidChildren} />
        <View style={styles.celluloidChildren} />
        <View style={styles.celluloidChildren} />
      </View>
      <View style={styles.middleContainer}> {children}</View>
      <View style={styles.celluloidParent} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbNailContainer: {
    flexDirection: 'row',
  },
  middleContainer: {
    elevation: 5,
    height: 175,
    marginVertical: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  celluloidParent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  celluloidChildren: {
    height: 20,
    width: 20,
    backgroundColor: 'black',
  },
});
