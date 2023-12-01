import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const RowSingleValue = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value || 'unknow'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
  },
  value: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '600',
  },
});
