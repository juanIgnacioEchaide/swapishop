import {useState, useEffect, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useCharacterStore} from '../store';
import {getAllPeople, getPeopleByPage} from '../services';

type DataFetchingFunction<T> = () => Promise<T>;

const useCharacterData = () => {
  const [page, setPage] = useState<number | undefined>(0);
  const {characters, setCharacters, setPagination} = useCharacterStore();

  const fetchData: DataFetchingFunction<any> = useCallback(async () => {
    let data = null;
    if (page === 0 || typeof page === 'undefined') {
      const allPeople = await getAllPeople();
      setCharacters(allPeople.results);
      setPagination({current: page, next: 0, previous: 0, totalPages: 0});
      data = allPeople.results;
    } else {
      const peopleByPage = await getPeopleByPage(page);
      setCharacters(peopleByPage.results);
      data = peopleByPage.results;
    }
    return data;
  }, [page, setCharacters, setPagination]);

  const {isLoading} = useQuery({
    queryKey: ['allCharacters'],
    queryFn: fetchData,
  });

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  return {characters, isLoading, setPage};
};

export default useCharacterData;
