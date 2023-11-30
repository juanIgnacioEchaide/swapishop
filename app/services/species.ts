import {api} from './api';

const getAllSpecies = async () => {
  const {data} = await api.species.getAll();
  return data;
};

const getSpeciesByPage = async (page: string | number) => {
  const {data} = await api.species.getByPage(page);
  return data;
};

export {getAllSpecies, getSpeciesByPage};
