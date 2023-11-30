export interface People {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string[];
  edited: string[];
  url: string[];
}

export interface Planet {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  MGLT: string;
  starshipClass: string;
  pilots: [];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Vehicle {
  cargoCapacity: string;
  consumables: string;
  costInCredits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  length: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  url: string;
  vehicleClass: string;
}

export interface Film {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episodeId: 4;
  openingCrawl: string;
  planets: string[];
  producer: string;
  releaseDate: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface Specie {
  averageHeight: string;
  averageLifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eyeColors: string;
  films: string[];
  hairColors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  skinColors: string;
  url: string;
}
export interface SwapiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
