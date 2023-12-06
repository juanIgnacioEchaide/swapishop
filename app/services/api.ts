import {AxiosResponse} from 'axios';
import {URI} from '../constants';
import {People, Planet, SwapiResponse} from '../models';
import {apiClient} from './apiClient';

const api = {
  people: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(URI.PEOPLE);
      return data;
    },
    getByPage: (page: number) => {
      const data = apiClient.get<SwapiResponse<People>>(
        !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
      );
      return data;
    },
  },
  planets: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<Planet>>> => {
      const data = apiClient.get(URI.PLANET);
      return data;
    },
    getByPage: (
      page: string | number,
    ): Promise<AxiosResponse<SwapiResponse<Planet>>> => {
      const data = apiClient.get(`${URI.PLANET}/?page=${page}`);
      return data;
    },
  },
  starship: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(URI.STARSHIP);
      return data;
    },
    getByPage: (
      page: string | number,
    ): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(`${URI.STARSHIP}/?page=${page}`);
      return data;
    },
  },
  films: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(URI.FILMS);
      return data;
    },
    getByPage: (
      page: string | number,
    ): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(`${URI.FILMS}/?page=${page}`);
      return data;
    },
  },
  species: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(URI.SPECIES);
      return data;
    },
    getByPage: (
      page: string | number,
    ): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(`${URI.SPECIES}/?page=${page}`);
      return data;
    },
  },
  vehicles: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(URI.VEHICLES);
      return data;
    },
    getByPage: (
      page: string | number,
    ): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(`${URI.VEHICLES}/?page=${page}`);
      return data;
    },
  },
};

export {api};
