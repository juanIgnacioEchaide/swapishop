import axios from 'axios';
import {URI} from '../constants';
import {SwapiResponse, People} from '../models';

export const getPeople = async (page: any) => {
  const {data} = await axios.get<SwapiResponse<People>>(
    !page ? URI.PEOPLE : `${URI.PEOPLE}/?page=${page}`,
  );
  return data;
};
