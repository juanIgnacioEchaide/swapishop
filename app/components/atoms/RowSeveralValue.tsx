import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const RowSeveralValue = ({
  label,
  value,
}: {
  label: string;
  value: string[];
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontWeight: '800',
  },
  value: {
    fontWeight: '600',
  },
});
