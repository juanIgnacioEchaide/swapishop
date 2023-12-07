import React from 'react';
import {ThumbNail} from '../../components';
import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {People, SwapiResponse} from '../../models';
import {Color} from '../../constants';
import {getIdFromURL} from '../../helpers';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import {DetailsModal} from '../organisms';

export const CharactersList = ({
  setSelectedItem,
  setModalVisible,
  characters,
  fetchNextPage,
  renderLoader,
  modalVisible,
  selectedItem,
}: {
  setSelectedItem: React.Dispatch<React.SetStateAction<People>>;
  selectedItem: People;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  characters: InfiniteData<SwapiResponse<People>, unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<SwapiResponse<People>, unknown>,
      Error
    >
  >;
  renderLoader: () => React.JSX.Element;
}) => {
  const renderThumbNail: ListRenderItem<People> = ({item}: {item: People}) => {
    return (
      <ThumbNail
        item={item}
        imageId={getIdFromURL(item.url)}
        setSelectedItem={setSelectedItem}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <View style={styles.screenContainer}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={characters?.pages?.flatMap(page => page?.results)}
        renderItem={renderThumbNail}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderLoader}
      />
      <DetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={selectedItem}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Color.SECONDARY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
});
