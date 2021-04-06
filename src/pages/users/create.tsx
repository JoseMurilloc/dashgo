import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { SideBar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box pl={120} pr={120}>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" >
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar um usuário
          </Heading>
        
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="confirmation_password" type="password" label="Confirmação de senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  );
}