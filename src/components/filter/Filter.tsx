import { Button } from '@nextui-org/react';
import { SelectProperty } from '../ui/SelectProporty';

interface Props {
  data: Character[];
  setValue: (value: React.SetStateAction<string>) => void;
  setSpecies: (value: React.SetStateAction<string>) => void;
  setStatus: (value: React.SetStateAction<string>) => void;
  value: string;
  species: string;
  status: string;
}
export const Filter: React.FC<Props> = ({
  data,
  value,
  species,
  status,
  setValue,
  setSpecies,
  setStatus,
}) => {
  const handleClear = () => {
    setValue('');
    setSpecies('');
    setStatus('');
  };

  return (
    <div className='flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-center'>
      <div className='flex flex-col gap-2 sm:flex-row sm:justify-between w-full'>
        <SelectProperty
          data={data}
          property={'gender'}
          value={value}
          setValue={setValue}
        />
        <SelectProperty
          data={data}
          property={'species'}
          value={species}
          setValue={setSpecies}
        />
        <SelectProperty
          data={data}
          property={'status'}
          value={status}
          setValue={setStatus}
        />
      </div>
      <Button onClick={handleClear} variant='solid' color='default'>
        Clear
      </Button>
    </div>
  );
};
