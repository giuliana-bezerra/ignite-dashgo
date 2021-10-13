import { Box, Stack, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  total: number;
  perPage?: number;
  page: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page >= 1);
}

export function Pagination({
  total,
  perPage = 10,
  page = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(total / perPage);
  const previousPages =
    page > 1 ? generatePagesArray(page - 1 - siblingsCount, page - 1) : [];
  const nextPages =
    page < lastPage
      ? generatePagesArray(page, Math.min(page + siblingsCount, lastPage))
      : [];

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {page > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {page > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}
        {previousPages.length > 0 &&
          previousPages.map((pageNumber) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={pageNumber}
            />
          ))}
        <PaginationItem onPageChange={onPageChange} number={page} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map((pageNumber) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={pageNumber}
            />
          ))}
        {page + siblingsCount < lastPage && (
          <>
            {page + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
