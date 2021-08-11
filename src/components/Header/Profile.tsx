import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileInfo: boolean;
}

export function Profile({ showProfileInfo = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileInfo && (
        <Box mr="4" textAlign="right">
          <Text>Giuliana Bezerra</Text>
          <Text color="gray.300" fontSize="small">
            giu.drawer@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Giuliana Bezerra" bg="pink.500" />
    </Flex>
  );
}
