import {AxiosResponse} from 'axios';
import {URI} from '../constants';
import {People, Planet, Starship, SwapiResponse} from '../models';
import {apiClient} from './apiClient';

const api = {
  people: {
    getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(URI.PEOPLE);
      return data;
    },
    getByPage: (
      page: number,
    ): Promise<AxiosResponse<SwapiResponse<People>>> => {
      const data = apiClient.get(`${URI.PEOPLE}/?page=${page}`);
      return data;
    },
    getById: (
      id: string | number,
    ): Promise<AxiosResponse<SwapiResponse<People>>> => {
      const data = apiClient.get(`${URI.PEOPLE}/${id}`);
      return data;
    },
    search: (params: string): Promise<AxiosResponse<SwapiResponse<People>>> => {
      const data = apiClient.get(`${URI.PEOPLE}?search=${params}`);
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
    getById: (id: number): Promise<AxiosResponse<SwapiResponse<Planet>>> => {
      const data = apiClient.get(`${URI.PLANET}/${id}`);
      return data;
    },
    search: (params: string): Promise<AxiosResponse<SwapiResponse<Planet>>> => {
      const data = apiClient.get(`${URI.PLANET}/?search=${params}`);
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
    getById: (
      id: string | number,
    ): Promise<AxiosResponse<SwapiResponse<Starship>>> => {
      const data = apiClient.get(`${URI.STARSHIP}/${id}`);
      return data;
    },
    search: (params: string): Promise<AxiosResponse<SwapiResponse<People>>> => {
      const data = apiClient.get(`${URI.STARSHIP}/?search=${params}`);
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
    getById: (
      id: string | number,
    ): Promise<AxiosResponse<SwapiResponse<Starship>>> => {
      const data = apiClient.get(`${URI.FILMS}/${id}`);
      return data;
    },
    search: (params: string): Promise<AxiosResponse<SwapiResponse<People>>> => {
      const data = apiClient.get(`${URI.FILMS}/?search=${params}`);
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
    getById: (id: string | number): Promise<AxiosResponse<any>> => {
      const data = apiClient.get(`${URI.SPECIES}/${id}`);
      return data;
    },
    search: (params: string): Promise<AxiosResponse<SwapiResponse<People>>> => {
      const data = apiClient.get(`${URI.SPECIES}/?search=${params}`);
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
    getById: (id: string | number): Promise<AxiosResponse<any>> => {
      const data = apiClient.get(`${URI.VEHICLES}/${id}`);
      return data;
    },
    search: (params: string): Promise<AxiosResponse<SwapiResponse<any>>> => {
      const data = apiClient.get(`${URI.VEHICLES}/?search=${params}`);
      return data;
    },
  },
};

export {api};
