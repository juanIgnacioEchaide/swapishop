import {api} from './api';

const getFilmsById = async (id: string | number) => {
  const {data} = await api.films.getById(id);
  return data;
};

const getAllFilms = async () => {
  const {data} = await api.films.getAll();
  return data;
};

const getFilmsByPage = async (page: number) => {
  const {data} = await api.films.getByPage(page);
  return data;
};

const searchFilms = async (stringParam: string) => {
  const {data} = await api.films.search(stringParam);
  return data;
};

export {getFilmsByPage, getAllFilms, getFilmsById, searchFilms};
