import {useState, useEffect, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useCharacterStore} from '../store';
import {getAllPeople, getPeopleByPage} from '../services';
import {getPageNumberFromString, getTotalPages} from '../helpers';

type DataFetchingFunction<T> = () => Promise<T>;

const useCharacterData = () => {
  const [page, setPage] = useState<number | undefined>(undefined);
  const {characters, setCharacters, setPagination, pagination} =
    useCharacterStore();

  const fetchData: DataFetchingFunction<any> = useCallback(async () => {
    let data = null;
    if (typeof page === 'undefined') {
      const {results, next, previous, count} = await getAllPeople();

      setCharacters(results);
      setPagination({
        current: 1,
        next: getPageNumberFromString(next),
        previous: getPageNumberFromString(previous),
        totalPages: getTotalPages(count),
      });
      data = results;
    } else {
      const {results, next, previous, count} = await getPeopleByPage(page);
      setCharacters(results);
      setPagination({
        current: page,
        next: getPageNumberFromString(next),
        previous: getPageNumberFromString(previous),
        totalPages: getTotalPages(count),
      });

      data = results;
    }
    return data;
  }, [page, setCharacters, setPagination]);

  const {isLoading, error} = useQuery({
    queryKey: ['characters', page],
    queryFn: fetchData,
  });

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  return {
    characters,
    isLoading,
    error,
    setPage,
    pagination,
  };
};

export default useCharacterData;
