import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {People} from '../../models';

export const ThumbNailSummaryContainer = ({
  children,
  item,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  uri,
}: {
  item: People;
  uri?: string;
  children: ReactNode;
}) => {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.text}>{item?.name}</Text>
      {children}
      <View style={styles.blur} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 100,
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'left',
    position: 'absolute',
    zIndex: 3,
    color: 'white',
  },
  summaryContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    justifyContent: 'space-around',
    height: 150,
    width: 370,
    backgroundColor: '#99fff',
    alignItems: 'center',
  },
  blur: {
    height: 100,
    backgroundColor: 'black',
    opacity: 0.9,
  },
});
