import {useQuery} from '@tanstack/react-query';
import {getAllPeople} from '../services';

const useCharacterData = () => {
  const {data: characters, status} = useQuery({
    queryKey: ['characters'],
    queryFn: getAllPeople,
  });

  return {characters, status};
};

export default useCharacterData;
