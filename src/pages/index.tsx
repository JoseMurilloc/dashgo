import { Flex, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from '../components/Input';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatória').email(),
  password: Yup.string().required('Senha obrigatória'),
})


export default function SignIn() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async(values) => {
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input 
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
          /> 
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
