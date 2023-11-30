import {People, SwapiResponse} from '../models';
import {api} from './api';

const getAllPeople = async (): Promise<SwapiResponse<People>> => {
  const {data} = await api.people.getAll();
  return data;
};
const getPeopleByPage = async (page: number) => {
  const {data} = await api.people.getByPage(page);
  return data;
};

export {getAllPeople, getPeopleByPage};
