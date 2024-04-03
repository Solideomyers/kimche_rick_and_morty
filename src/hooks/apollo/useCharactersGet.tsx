import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../graphql/getCharacters';

export const useAllCharacters = () => {
  const [getCharacters, { loading, data, error, fetchMore }] = useLazyQuery(
    GET_CHARACTERS,
    { fetchPolicy: 'cache-and-network' }
  );

  return {
    getCharacters,
    loading,
    info: data?.characters?.info,
    characters: data?.characters.results,
    error,
    fetchMore,
  };
};
