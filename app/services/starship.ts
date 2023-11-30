import {api} from './api';

const getAllStarships = async () => {
  const {data} = await api.starship.getAll();
  return data;
};

const getStarshipsByPage = async (page: string | number) => {
  const {data} = await api.starship.getByPage(page);
  return data;
};

const getStarshipsById = async (id: number) => {
  const {data} = await api.starship.getById(id);
  return data;
};

const searchStarship = async (stringParam: string) => {
  const {data} = await api.starship.search(stringParam);
  return data;
};

export {getStarshipsById, getAllStarships, getStarshipsByPage, searchStarship};
