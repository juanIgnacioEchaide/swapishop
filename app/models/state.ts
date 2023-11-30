import {SwapiResponse} from './api';

export interface BaseState<T> {
  data: T;
  currentPage: number;
  previousPage: number | undefined;
  nextPage: number | undefined;
  totalPages: number;
  fetchData: () => SwapiResponse<T>;
  setData: (data: T[]) => void;
}
