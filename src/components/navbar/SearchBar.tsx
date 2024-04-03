import { Button, Input } from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  name: string;
  setName: React.ChangeEventHandler<HTMLInputElement>;
  handleSearch: () => void;
}

export const SearchBar: React.FC<Props> = ({ name, setName, handleSearch }) => {
  return (
    <>
      <Input
        classNames={{
          inputWrapper: 'pl-2 pr-[0.03rem] dark',
        }}
        variant='bordered'
        className='bg-background/85 text-foreground'
        placeholder='Name character...'
        size='md'
        value={name}
        onChange={setName}
        type='search'
        endContent={
          <Button
            variant='solid'
            className='bg-background/85 text-foreground rounded-lg'
            size='md'
            isIconOnly
            onClick={handleSearch}
            aria-label='search'
            endContent={<FaSearch size={18} />}
          ></Button>
        }
      />
    </>
  );
};
