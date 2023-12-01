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
    <View>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '800',
  },
  value: {
    fontWeight: '600',
  },
});
