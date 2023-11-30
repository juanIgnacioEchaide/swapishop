import {useQuery} from '@tanstack/react-query';
import {getAllPeople} from '../services';
import {useCharacterStore} from '../store';
import {useEffect} from 'react';

const useCharacterData = () => {
  const {characters, setCharacters} = useCharacterStore();
  const {data: charactersData, status} = useQuery({
    queryKey: ['characters'],
    queryFn: getAllPeople,
  });

  useEffect(() => {
    if (charactersData?.results?.length) {
      setCharacters(charactersData?.results);
    }
  }, [charactersData, setCharacters]);

  return {characters, status};
};

export default useCharacterData;
