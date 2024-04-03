interface Location {
  __typename: 'Location';
  dimension: string;
  name: string;
  type: string;
}

interface CharacterId {
  __typename: 'Character';
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  location: Location;
  origin: Location;
}
