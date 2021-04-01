import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface Props extends ChakraInputProps {
  label?: string;
  name: string;
}

export function Input({name, label, ...rest}:Props) {
  return (
    <FormControl>
     {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput 
        name={name}
        type="email"
        id="email"
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900" 
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}