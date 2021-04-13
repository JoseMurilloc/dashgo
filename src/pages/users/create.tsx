import { Button } from "@chakra-ui/button";
import { 
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/layout";
import React from "react";
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { SideBar } from '../../components/Sidebar';
import Link from 'next/link';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateFormData = {
  email: string;
  name: string;
  password: string;
}

const createFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().required('E-mail obrigatória').email(),
  password: Yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
  confirmation_password: Yup.string().oneOf([
    null,
    Yup.ref('password')
  ], 'Ás senhas precisam ser iguais')
})

export default function CreateUser() {
  const router = useRouter()
  const createUser = useMutation(async (user: CreateFormData) => {
    const response = await api.post(`/users`, {
      user: {
        ...user,
        create_at: new Date()
      }
    }) 

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(createFormSchema)
  })

  const { errors } = formState

  const handlerCreateUser: SubmitHandler<CreateFormData> = async (values) => {
    await createUser.mutateAsync(values)
  
    router.push('/users')
  }

  return (
    <Box pl={120} pr={120}>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" >
        <SideBar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["4","8"]}
          onSubmit={handleSubmit(handlerCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar um usuário
          </Heading>
        
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
              <Input 
                {...register('name')}
                name="name"
                type="text"
                label="Nome completo" 
                error={errors.name}
              />
              <Input 
                {...register('email')}
                name="email"
                type="email" 
                label="E-mail" 
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
              <Input 
                {...register('password')}
                name="password"
                type="password" 
                label="Senha" 
                error={errors.password}
              />
              <Input 
                {...register('confirmation_password')}
                name="confirmation_password"
                type="password" 
                label="Confirmação de senha" 
                error={errors.confirmation_password}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/dashboard">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  );
}