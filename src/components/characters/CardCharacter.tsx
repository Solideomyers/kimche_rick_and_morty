import { Card, CardFooter, CardHeader, Chip, Image } from '@nextui-org/react';
import { ModalContainer } from '../ui/ModalContainer';

interface Props {
  name: string;
  img: string;
  gender: string;
  species: string;
  id: string;
  handleRoute?: () => void;
}

export const CardCharacter: React.FC<Props> = ({
  name,
  gender,
  img,
  id,
  species,
}) => {
  return (
    <Card isFooterBlurred className='w-full col-span-1 hover:scale-105'>
      <CardHeader className='absolute z-10 top-1 flex-col items-start'>
        <Chip variant='faded' className='text-foregorund'>
          {species}
        </Chip>
      </CardHeader>
      <Image
        removeWrapper
        alt='character_img'
        className='z-0 w-full h-full -translate-y-6 object-cover'
        src={img}
      />
      <CardFooter className='bg-background/50 absolute bottom-0 border-t-1 border-foreground z-10 justify-between'>
        <div>
          <p className='text-foreground text-tiny font-bold capitalize'>
            {gender}
          </p>
          <p className='text-foreground text-tiny font-extrabold'>
            {name.toUpperCase()}
          </p>
        </div>

        <ModalContainer characterId={id} />
      </CardFooter>
    </Card>
  );
};
