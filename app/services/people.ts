import {People, SwapiResponse} from '../models';
import {api} from './api';

const getPeopleById = async (id: string | number) => {
  const {data} = await api.people.getById(id);
  return data;
};

const getAllPeople = async (): Promise<SwapiResponse<People>> => {
  const {data} = await api.people.getAll();
  return data;
};
const getPeopleByPage = async (page: number) => {
  const {data} = await api.people.getByPage(page);
  return data;
};

const searchPeople = async (params: string) => {
  const {data} = await api.people.search(params);
  return data;
};

export {getPeopleById, getAllPeople, getPeopleByPage, searchPeople};
