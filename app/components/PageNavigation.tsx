import React, {useCallback} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

export const PageNavigation = ({
  currentPage,
  total,
  setPage,
}: {
  currentPage: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  }, [currentPage, setPage]);

  const handleNextPage = useCallback(() => {
    setPage(currentPage + 1);
  }, [currentPage, setPage]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="<"
          onPress={handlePreviousPage}
          disabled={currentPage === 1} // Disable if on the first page
        />
      </View>
      <View style={styles.paginationDisplay}>
        <Text style={styles.paginationText}>{`${currentPage}/${total}`}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title=">"
          onPress={handleNextPage}
          disabled={currentPage === total} // Disable if on the last page
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    overflow: 'hidden',
    borderRadius: 8,
    flexDirection: 'row',
    bottom: 10,
    justifyContent: 'center',
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
