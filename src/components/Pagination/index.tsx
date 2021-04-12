import { Button } from "@chakra-ui/button";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegister: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;   
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  onPageChange,
  totalCountOfRegister,
  registerPerPage = 10,
  currentPage = 1
}: PaginationProps) {
  const lastPage = 
    Math.floor(totalCountOfRegister / registerPerPage)

  const previewPage = currentPage > 1
    ? generatePagesArray(
        currentPage - 1 - siblingsCount,
        currentPage -1
      )
    : []

  const nextPage = currentPage < lastPage
    ? generatePagesArray(
        currentPage, 
        Math.min(currentPage + siblingsCount, lastPage)
    )
    : []


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

        {currentPage > (1+ siblingsCount) && (
          <>
            <PaginationItem number={1} />
            { currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previewPage.length > 0 && previewPage.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        <PaginationItem number={currentPage} isCurrent />

        {nextPage.length > 0 && nextPage.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        {currentPage + siblingsCount < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem number={lastPage}/>
          </>
        )}

      </Stack>
    </Stack>
  )
}