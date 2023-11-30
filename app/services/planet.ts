import {api} from './api';

const getAllPlanets = async () => {
  const {data} = await api.planets.getAll();
  return data;
};

const getPlanetsByPage = async (page: string | number) => {
  const {data} = await api.planets.getByPage(page);
  return data;
};

export {getAllPlanets, getPlanetsByPage};
