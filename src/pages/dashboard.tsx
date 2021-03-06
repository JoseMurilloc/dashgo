import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import dynamic from 'next/dynamic';
import theme from "@chakra-ui/theme";

const Chart  = dynamic(() => import('react-apexcharts'))

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]      
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.6,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}
const series = [
  {name: 'serie1', data: [32, 12, 123, 65, 15, 100]}
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" pl={120} pr={120} >
      <Header />

      <Flex
        flex="1"
        my="6"
        maxWidth={1480}
      >
        <SideBar />
        <SimpleGrid
          flex="1"
          gap="4"
          maxWidth="320px"
          align="flex-start"
        >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />

          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}