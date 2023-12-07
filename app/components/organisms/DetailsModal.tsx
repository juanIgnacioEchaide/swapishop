import React from 'react';
import {People} from '../../models';
import {ModalContainer} from '../atoms';
import {ModalContentContainer} from '../molecules/ModelContentContainer';
import {PeopleDetail} from '../molecules';

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
    <ModalContainer visible={visible} onClose={onClose}>
      <ModalContentContainer onClose={onClose}>
        <PeopleDetail {...item} />
      </ModalContentContainer>
    </ModalContainer>
  );
};
