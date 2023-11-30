export const BASE_URL = 'https://swapi.dev/api/';

export enum URI {
  BASE = 'https://swapi.dev/api/',
  PEOPLE = 'https://swapi.dev/api/people',
  STARSHIP = 'https://swapi.dev/api/starships',
  PLANET = 'https://swapi.dev/api/planets',
  FILMS = 'https://swapi.dev/api/films',
  SPECIES = 'https://swapi.dev/api/species',
  VEHICLES = 'https://swapi.dev/api/vehicles',
}

export enum ROUTES {
  DEFAULT = '',
  BASE = '/',
  HOME = '/home',
  PEOPLE = '/people',
  PLANETS = '/planets',
  STARSHIP = '/starship',
  FILMS = '/films',
  VEHICLES = '/vehicles',
  SPECIES = '/species',
  SEARCH = '/search',
}

export enum VIEW {
  DEFAULT = '',
  HOME = 'home',
  PEOPLE = 'people',
  PLANETS = 'planets',
  STARSHIP = 'starship',
  FILMS = 'films',
  VEHICLES = 'vehicles',
  SPECIES = 'species',
  SEARCH = 'search',
}
