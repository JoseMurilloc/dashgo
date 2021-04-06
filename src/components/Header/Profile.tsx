import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

export function Profile() {
  return (
    <Flex align="center" ml="4">
      <Box mr="4" textAlign="right">
        <Text>José Murillo</Text>
        <Text color="gray.300" fontSize="small">
          jooseemurillo@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="José Murillo"
        src="https://github.com/JoseMurilloc.png"
      />

    </Flex>
  )
}