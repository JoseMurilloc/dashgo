import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { RiSearchLine } from "react-icons/ri";

export function SearchNav() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      position="relative"
      color="gray.200"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{color:"gray.400"}}
      />
      <Icon fontSize="20" as={RiSearchLine} />
    </Flex>
  );
}