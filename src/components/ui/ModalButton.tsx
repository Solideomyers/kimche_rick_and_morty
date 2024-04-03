import { Button } from '@nextui-org/react';

interface Props {
  handleOpen: () => void;
}

export const ModalButton: React.FC<Props> = ({ handleOpen }) => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button
        variant='shadow'
        // color='primary'
        onPress={() => handleOpen()}
        className='capitalize bg-background text-foreground'
      >
        Show
      </Button>
    </div>
  );
};
