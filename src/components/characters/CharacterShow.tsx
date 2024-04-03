import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';

interface Props {
  status: string;
  gender: string;
  name: string;
  origin: string;
  location: string;
  dimension: string;
  species: string;
  type: string;
  img: string;
}

export const CharacterShow: React.FC<Props> = ({
  status,
  gender,
  name,
  origin,
  location,
  type,
  species,
  dimension,
  img,
}) => {
  return (
    <Card className='max-w-[400px] bg-background'>
      <CardHeader className='flex gap-3'>
        <div className='flex flex-col'>
          <p className='text-md font-bold'>{name}</p>
        </div>
      </CardHeader>
      <div className='flex justify-center my-2'>
        <Image
          src={img}
          alt='character_img'
          width={'full'}
          className='object-cover '
        />
      </div>
      <Divider />
      <CardBody>
        <p>
          <strong className='text-primary'>Status:</strong> {status}
        </p>
        <p>
          <strong className='text-primary'>Gender:</strong> {gender}
        </p>
        <p>
          <strong className='text-primary'>Species:</strong> {species}
        </p>
        <p>
          <strong className='text-primary'>Origin:</strong> {origin}
        </p>
        <p>
          <strong className='text-primary'>Type:</strong> {type}
        </p>
        <p>
          <strong className='text-primary'>Location: </strong>
          {location}
        </p>
        <p>
          <strong className='text-primary'>Dimension: </strong>
          {dimension}
        </p>
      </CardBody>
      <Divider />
    </Card>
  );
};
