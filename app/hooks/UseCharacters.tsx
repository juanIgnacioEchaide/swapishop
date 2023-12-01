import {useQuery} from '@tanstack/react-query';
import {getAllPeople} from '../services';
import {useCharacterStore} from '../store';
import {useEffect} from 'react';

const useCharacterData = () => {
  const {characters, setCharacters} = useCharacterStore();
  const {data: charactersData, isLoading} = useQuery({
    queryKey: ['allCharacters'],
    queryFn: getAllPeople,
  });

  useEffect(() => {
    if (charactersData?.results?.length) {
      setCharacters(charactersData?.results);
    }
  }, [charactersData, setCharacters]);

  return {characters, isLoading};
};

export default useCharacterData;
