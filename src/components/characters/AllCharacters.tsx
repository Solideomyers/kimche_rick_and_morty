import { Spinner } from '@nextui-org/react';
import { CardCharacter } from './CardCharacter';

interface Props {
  characters: Character[];
}

export const AllCharacters: React.FC<Props> = ({ characters }) => {
  if (!characters) {
    return <Spinner />;
  }
  console.log(characters);
  return (
    <div className='gap-4 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3'>
      {characters &&
        characters?.map((character) => (
          <CardCharacter
            key={character.id}
            name={character?.name}
            img={character?.image}
            gender={character?.gender}
            species={character.species}
            id={character.id}
          />
        ))}
    </div>
  );
};
