import React, { useEffect } from 'react';
import { Modal, Spinner, useDisclosure } from '@nextui-org/react';
import { ModalButton } from './ModalButton';
import { ModalCard } from './ModalCard';
import { useCharacterGetById } from '../../hooks/apollo/useCharacterGetById';

interface Props {
  characterId: string;
}

export const ModalContainer: React.FC<Props> = ({ characterId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur');

  const handleOpen = () => {
    setBackdrop(backdrop);
    onOpen();
  };

  const { getCharacter, loading, character, error } = useCharacterGetById();

  useEffect(() => {
    getCharacter({ variables: { id: characterId } });
  }, []);

  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <p>Error </p>;

  return (
    <>
      <ModalButton handleOpen={handleOpen} />
      <Modal className='p-4' backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalCard characterId={character} />
      </Modal>
    </>
  );
};
