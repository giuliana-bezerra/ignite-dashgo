import { Flex, Icon, Input, SimpleGrid } from '@chakra-ui/react';
import { useRef } from 'react';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  // Controlled components
  // const [text, setText] = useState('');

  // Uncontrolled components
  //const searchInputRef = useRef<HTMLInputElement>(null);
  // console.log(searchInputRef.current.value)

  // debounce - busca apenas quando a pessoa para de digitar

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      justify="space-between"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <SimpleGrid minChildWidth="240px">
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
          //Controlled components
          //value={text}
          //onChange={(event) => setText(event.target.value)}
          //Uncontrolled components
          //ref={searchInputRef}
        />
      </SimpleGrid>
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
