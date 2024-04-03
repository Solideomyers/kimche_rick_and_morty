import React from 'react';
import {
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { CharacterShow } from '../characters/CharacterShow';

interface Props {
  characterId: CharacterId;
}

export const ModalCard: React.FC<Props> = ({ characterId }) => {
  return (
    <ModalContent className='dark bg-background/85 text-foreground'>
      {(onClose) => (
        <>
          <ModalBody>
            <CharacterShow
              gender={characterId.gender}
              name={characterId.name}
              status={characterId.status}
              species={characterId.species}
              origin={characterId.origin.name}
              type={characterId.type}
              dimension={characterId.location.dimension}
              location={characterId.location.name}
              img={characterId.image}
            />
          </ModalBody>
          <ModalFooter>
            <Button color='danger' variant='light' onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};
