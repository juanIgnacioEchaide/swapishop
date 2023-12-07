import axios from 'axios';
import {URI} from '../constants';
import {AkababResponse} from '../models';

export const getImageArchive = async (id: number) => {
  const {data} = await axios.get<AkababResponse>(`${URI.IMAGES}${id}.json`);
  return data;
};
