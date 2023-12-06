import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {People} from '../models';
import {PeopleDetail} from './PeopleDetail';

export const DetailsModal = ({
  visible,
  onClose,
  item,
}: {
  visible: boolean;
  onClose: () => void;
  item: People;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        <View style={styles.modalView}>
          <PeopleDetail {...item} />
        </View>
      </View>
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
