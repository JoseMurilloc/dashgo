import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import Icon from "@chakra-ui/icon"
import { Link } from '@chakra-ui/react';
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from '../../components/Header';
import { Pagination } from "../../components/Pagination";
import { SideBar } from '../../components/Sidebar';
import NextLink from 'next/link';
import { Spinner } from "@chakra-ui/spinner";
import { useUser } from "../../services/hooks/useUser";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUser(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser (userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`/users/${userId}`)

        return response.data
      },
      { staleTime: 1000 * 60 * 10 } // 10 minutes
    )
  }

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

            <NextLink href="/users/create">
              <Button
                as="a"
                size="sm"
                colorScheme="pink"
                cursor="pointer"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </NextLink>
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
                  {data.users.map(user => (
                    <Tr key={user.id} px={["4", "4", "6"]}>
                      <Td>
                        <Checkbox colorScheme="pink"/>
                      </Td>
                      <Td>
                        <Box>
                          <Link 
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(user.id)}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
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

              <Pagination 
                totalCountOfRegister={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}