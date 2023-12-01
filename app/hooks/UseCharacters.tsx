import {useState, useEffect, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useCharacterStore} from '../store';
import {getAllPeople, getPeopleByPage} from '../services';
import {getPageNumberFromString, getTotalPages} from '../helpers';

type DataFetchingFunction<T> = () => Promise<T>;

const useCharacterData = () => {
  const [page, setPage] = useState<number | undefined>(1);
  const {characters, setCharacters, setPagination, pagination} =
    useCharacterStore();

  const fetchData: DataFetchingFunction<any> = useCallback(async () => {
    let data = null;
    if (page === 1 || !page) {
      const {results, next, previous, count} = await getAllPeople();

      const totalItems = count;
      setCharacters(results);
      setPagination({
        current: page,
        next: getPageNumberFromString(next),
        previous: getPageNumberFromString(previous),
        totalPages: getTotalPages(totalItems),
      });
      data = results;
    } else {
      const peopleByPage = await getPeopleByPage(page);
      setCharacters(peopleByPage.results);
      data = peopleByPage.results;
    }

    return data;
  }, [page, setCharacters, setPagination]);

  const {isLoading, error} = useQuery({
    queryKey: ['characters'],
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
