import React, {ReactNode} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

export const ModalContainer = ({
  children,
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>{children}</View>
    </Modal>
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
    backgroundColor: 'white',
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
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
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
