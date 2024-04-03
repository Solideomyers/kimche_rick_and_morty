import { gql } from '@apollo/client';

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      type
      image
      location {
        name
        type
        dimension
      }
      origin {
        name
        type
        dimension
      }
    }
  }
`;
