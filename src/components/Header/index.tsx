import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchNav } from "./SearchNav";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      align="center"
    >
      <Logo />

      { isWideVersion && <SearchNav />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
      
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}