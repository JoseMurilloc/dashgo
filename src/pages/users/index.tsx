import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from '../../components/Header';
import { Pagination } from "../../components/Pagination";
import { SideBar } from '../../components/SideBar';

export default function UserList() {
  return (
    <Box pl={120} pr={120}>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" >
        <SideBar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              colorScheme="pink"
              cursor="pointer"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar novo usuário
            </Button>
          </Flex>
        
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">José Murillo</Text>
                    <Text fontSize="sm" color="gray.300">
                      jooseemurillo@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  04 de Abril de 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                    cursor="pointer"
                  >
                    Editar
              </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">José Murillo</Text>
                    <Text fontSize="sm" color="gray.300">
                      jooseemurillo@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  04 de Abril de 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                    cursor="pointer"
                  >
                    Editar
              </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">José Murillo</Text>
                    <Text fontSize="sm" color="gray.300">
                      jooseemurillo@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  04 de Abril de 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                    cursor="pointer"
                  >
                    Editar
              </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}