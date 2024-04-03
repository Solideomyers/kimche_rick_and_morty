import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTER_BY_ID } from '../../graphql/getCharacterById';

export const useCharacterGetById = () => {
  const [getCharacter, { loading, data, error }] =
    useLazyQuery(GET_CHARACTER_BY_ID);

  return {
    getCharacter,
    loading,
    character: data?.character,
    error,
  };
};
