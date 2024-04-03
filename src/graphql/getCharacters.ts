import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetAllCharacters(
    $page: Int
    $name: String
    $gender: String
    $status: String
    $species: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        gender: $gender
        status: $status
        species: $species
      }
    ) {
      results {
        id
        name
        status
        species
        gender
        image
      }
      info {
        pages
        next
        prev
      }
    }
  }
`;
