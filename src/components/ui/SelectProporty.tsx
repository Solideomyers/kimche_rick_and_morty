import { Select, SelectItem } from '@nextui-org/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  data: Character[];
  property: keyof Character;
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
}

export const SelectProperty: React.FC<Props> = ({
  data,
  property,
  value,
  setValue,
}) => {
  const uniqueValues = Array.from(
    new Set(data && data?.map((character) => character[property]))
  );

  return (
    <Select
      label={property.charAt(0).toUpperCase() + property.slice(1)}
      fullWidth
      variant='faded'
      className='bg-background/85 text-foreground'
      selectionMode='single'
      selectedKeys={new Set([value])}
      placeholder={`Select a ${
        property.charAt(0).toUpperCase() + property.slice(1)
      }`}
      labelPlacement='outside'
      disableSelectorIconRotation
      selectorIcon={<MdKeyboardArrowDown />}
      onSelectionChange={(key) => setValue(String(Array.from(key)))}
    >
      {uniqueValues.map((value) => (
        <SelectItem
          className='bg-background/85 text-foreground'
          key={value}
          value={value}
        >
          {value}
        </SelectItem>
      ))}
    </Select>
  );
};
