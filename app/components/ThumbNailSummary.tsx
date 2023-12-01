import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Film, People, Planet, Specie, Starship} from '../models';
import {VIEW} from '../constants';

const PeopleThumbnail = (item: People) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{JSON.stringify(item?.name)}</Text>
    </View>
  );
};

const SpecieThumbnail = (item: Specie) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
};

const PlanetThumbnail = (item: Planet) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
};

const FilmThumbnail = (item: Film) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
};

const StarshipThumbnail = (item: Starship) => {
  return (
    <View style={styles.thumbNailContainer}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
};

export const ThumbNailSummary = ({
  item,
  type,
}: {
  item: People | Specie | Planet | Film | Starship;
  type: VIEW;
}) => {
  let thumbnailComponent;

  switch (type) {
    case VIEW.PEOPLE:
      thumbnailComponent = <PeopleThumbnail {...(item as People)} />;
      break;
    case VIEW.PLANETS:
      thumbnailComponent = <PlanetThumbnail {...(item as Planet)} />;
      break;
    case VIEW.STARSHIP:
      thumbnailComponent = <StarshipThumbnail {...(item as Starship)} />;
      break;
    case VIEW.SPECIES:
      thumbnailComponent = <SpecieThumbnail {...(item as Specie)} />;
      break;
    case VIEW.FILMS:
      thumbnailComponent = <FilmThumbnail {...(item as Film)} />;
      break;
    default:
      thumbnailComponent = (
        <View style={styles.thumbNailContainer}>
          <Text>Unsupported item type</Text>
        </View>
      );
      break;
  }

  return thumbnailComponent;
};

const styles = StyleSheet.create({
  thumbNailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
