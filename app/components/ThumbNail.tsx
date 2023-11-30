import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Film, People, Planet, Specie, Starship} from '../models';
//import {ThumbnailSummary} from './ThumbNailSummary';

export const ThumbNail = ({
  item,
}: {
  item: People | Starship | Specie | Planet | Film;
}) => {
  return (
    <TouchableOpacity style={styles.thumbNailContainer}>
      <Text>{JSON.stringify(item)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 7,
    width: 150,
    height: 150,
  },
  descriptionContainer: {
    marginTop: 10,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginRight: 20,
  },
  artistName: {
    fontSize: 20,
    fontWeight: '700',
  },
  year: {
    fontWeight: '400',
  },
  artworkTitle: {
    textAlign: 'justify',
  },
  imageContainer: {
    width: 200,
  },
  thumbNailContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  unavailableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3333',
  },
  unavailableText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
