import {useState, useEffect, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useCharacterStore} from '../store';
import {getAllPeople, getPeopleByPage} from '../services';

type DataFetchingFunction<T> = () => Promise<T>;

const useCharacterData = () => {
  const [page, setPage] = useState<number | undefined>(0);
  const {characters, setCharacters} = useCharacterStore();

  const fetchData: DataFetchingFunction<any> = useCallback(async () => {
    if (page === 0 || typeof page === 'undefined') {
      const allPeople = await getAllPeople();
      setCharacters(allPeople.results);
    } else {
      const peopleByPage = await getPeopleByPage(page);
      setCharacters(peopleByPage.results);
    }
  }, [page, setCharacters]);

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
