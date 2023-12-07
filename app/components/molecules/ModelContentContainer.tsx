import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {CloseButton} from '../atoms';
import {Color} from '../../constants';

export const ModalContentContainer = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <View style={styles.centeredView}>
      <CloseButton onClose={onClose} />
      <View style={styles.modalView}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 420,
    height: 500,
    margin: 10,
    backgroundColor: Color.SECONDARY,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
