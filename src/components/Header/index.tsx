import {
  Flex,
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { RiLogoutBoxLine, RiMenuLine } from 'react-icons/ri';
import { AuthContext } from '../../context/AuthContext';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const { signOut } = useContext(AuthContext);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open drawer"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      {/** Logout */}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <HStack
          spacing={['6', '8']}
          mx={['6', '8']}
          pr={['6', '8']}
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiLogoutBoxLine} fontSize="20" onClick={signOut} />
        </HStack>

        <Profile showProfileInfo={isWideVersion} />
      </Flex>
    </Flex>
  );
}
