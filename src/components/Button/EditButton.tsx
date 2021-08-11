import { Button, Icon } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

interface EditButtonProps {
  small: boolean;
}

export function EditButton({ small }: EditButtonProps) {
  return small ? (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="whiteAlpha"
      cursor="pointer"
    >
      <Icon as={RiPencilLine} fontSize="16" />
    </Button>
  ) : (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="whiteAlpha"
      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
      cursor="pointer"
    >
      Editar
    </Button>
  );
}
