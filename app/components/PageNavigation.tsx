import React, {useCallback} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

export const PageNavigation = ({
  currentPage,
  total,
  setLoadingPage,
  setPage,
}: {
  currentPage: number;
  total: number;
  limit: number;
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setLoadingPage(true);
      setPage(currentPage - 1);
    }
  }, [currentPage, setLoadingPage, setPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < total && total !== 0) {
      setLoadingPage(true);
      setPage(currentPage + 1);
    }
  }, [currentPage, total, setLoadingPage, setPage]);

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
