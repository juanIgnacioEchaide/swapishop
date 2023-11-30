import {api} from './api';

const getAllFilms = async () => {
  const {data} = await api.films.getAll();
  return data;
};

const getFilmsByPage = async (page: number) => {
  const {data} = await api.films.getByPage(page);
  return data;
};

export {getFilmsByPage, getAllFilms};
