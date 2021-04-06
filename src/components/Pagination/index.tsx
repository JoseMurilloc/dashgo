import { Button } from "@chakra-ui/button";
import { Box, Stack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Stack
      direction={isWideVersion ? 'row' : 'column'}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Stack>
  )
}