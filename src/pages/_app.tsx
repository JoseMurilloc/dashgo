import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { QueryClientProvider } from "react-query"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { ReactQueryDevtools } from 'react-query/devtools'
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"
import { queryClient } from "../services/queryClient"

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
