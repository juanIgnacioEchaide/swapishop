import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const CloseButton = ({onClose}: {onClose: () => void}) => {
  return (
    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
      <Text style={styles.closeText}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    zIndex: 2,
    top: 55,
    left: -170,
    justifyContent: 'flex-start',
    width: 30,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  closeText: {
    color: 'white',
    textAlign: 'center',
  },
});
