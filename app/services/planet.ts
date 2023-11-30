import {api} from './api';

const getAllPlanets = async () => {
  const {data} = await api.planets.getAll();
  return data;
};

const getPlanetsByPage = async (page: string | number) => {
  const {data} = await api.planets.getByPage(page);
  return data;
};

const getPlanetsById = async (id: number) => {
  const {data} = await api.planets.getById(id);
  return data;
};

const searchPlanets = async (params: string) => {
  const {data} = await api.planets.search(params);
  return data;
};

export {getPlanetsById, getAllPlanets, getPlanetsByPage, searchPlanets};
