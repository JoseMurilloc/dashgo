import React from "react";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from '../../components/Header';
import { Pagination } from "../../components/Pagination";
import { SideBar } from '../../components/Sidebar';
import Link from 'next/link';
import { Spinner } from "@chakra-ui/spinner";
import { useUser } from "../../services/hooks/useUser";

export default function UserList() {
  const { data, isLoading, error, isFetching } = useUser()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
            
              { !isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              ) }
            </Heading>

            <Link href="/users/create">
              <Button
                as="a"
                size="sm"
                colorScheme="pink"
                cursor="pointer"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
        
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Text>Error ao carregar os dados do usúario</Text>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px="6" color="gray.300" width="8">
                      <Checkbox colorScheme="pink"/>
                    </Th>
                    <Th>Usuários</Th>
                    { isWideVersion && <Th>Data de cadastro</Th>}
                    { isWideVersion && <Th>Ações</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => (
                    <Tr key={user.id} px={["4", "4", "6"]}>
                      <Td>
                        <Checkbox colorScheme="pink"/>
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>{user.createAt}</Td>
                      )}
                      {isWideVersion && (
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
                      )}
                    </Tr>
                  ))}
                  
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}