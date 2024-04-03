import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { AllCharacters, SearchBar, Filter } from '../components';
import { useBtnFloat, useAllCharacters } from '../hooks';
import { PiCaretCircleDoubleUpLight } from 'react-icons/pi';

export const Home = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [page, setPage] = useState(1);
  const { getCharacters, characters, fetchMore, info } = useAllCharacters();

  const goUp = useBtnFloat({
    icon: <PiCaretCircleDoubleUpLight size={25} />,
    variant: 'scroll',
    contenedor: false,
  });

  const handleSearch = () => {
    getCharacters({ variables: { page, name, gender, species, status } });
  };

  useEffect(() => {
    setPage(1);
    handleSearch();
  }, [name, gender, status, species]);

  console.log(info);

  const handleLoadmore = () => {
    fetchMore({
      variables: {
        page: page + 1,
        name,
        gender,
        species,
        status,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          characters: {
            ...prev.characters,
            results: [
              ...prev.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        };
      },
    });
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='flex flex-col gap-4 m-4 p-2 w-full border border-[#ccc] rounded-xl shadow'>
      <SearchBar
        name={name}
        handleSearch={handleSearch}
        setName={(e) => setName(e.target.value)}
      />
      <Filter
        data={characters}
        value={gender}
        species={species}
        status={status}
        setSpecies={setSpecies}
        setStatus={setStatus}
        setValue={setGender}
      />
      {goUp}
      <AllCharacters characters={characters} />
      <div className='w-full flex justify-center'>
        <Button
          size='lg'
          variant='ghost'
          className='bg-background/85 text-foreground'
          onPress={handleLoadmore}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};
