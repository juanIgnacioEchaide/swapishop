import React, {useCallback} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {SwapiResponse} from '../models';

export const PageNavigation = ({
  currentPage,
  total,
  setLoadingPage,
}: {
  currentPage: number;
  total: number;
  limit: number;
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>;
  fetchByPage?: (page: number) => Promise<SwapiResponse<any>>;
}) => {
  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setLoadingPage(true);
      /* fetchByPage(currentPage - 1)
        .then(() => setLoadingPage(false))
        .catch(() => setLoadingPage(false));*/
    }
  }, [currentPage, setLoadingPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < total && total !== 0) {
      setLoadingPage(true);
      /*fetchByPage(currentPage + 1)
        .then(() => setLoadingPage(false))
        .catch(() => setLoadingPage(false));*/
    }
  }, [currentPage, total, setLoadingPage]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="<"
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
        />
      </View>
      <View style={styles.paginationDisplay}>
        <Text style={styles.paginationText}>{`${currentPage}/${total}`}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title=">"
          onPress={handleNextPage}
          disabled={currentPage === total || total === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 20,
    justifyContent: 'space-between',
  },
  paginationDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  paginationText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '700',
    fontSize: 20,
  },
  button: {
    borderRadius: 30,
  },
});
