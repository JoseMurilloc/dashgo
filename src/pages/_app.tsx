import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { ReactQueryDevtools } from 'react-query/devtools'
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient();

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
