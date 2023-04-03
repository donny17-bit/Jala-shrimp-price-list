import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";

function PredictionTable({ price }) {
  const maxPrice100 = Math.floor(Math.random() * 2000 + price[0]);
  const minPrice100 = Math.floor(price[0] - Math.random() * 1000);

  const maxPrice70 = Math.floor(Math.random() * 2000 + price[2]);
  const minPrice70 = Math.floor(price[2] - Math.random() * 1000);

  const maxPrice40 = Math.floor(Math.random() * 2000 + price[4]);
  const minPrice40 = Math.floor(price[4] - Math.random() * 1000);

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="blackAlpha">
        <Thead backgroundColor="#eaeff5">
          <Tr>
            <Th fontSize="xs" color="#1b76dd">
              Size
            </Th>
            <Th fontSize="xs" color="#1b76dd">
              Harga Min
            </Th>
            <Th fontSize="xs" color="#1b76dd">
              Harga Max
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr _hover={{ bgColor: "#e0e0e0" }}>
            <Td fontSize="sm" fontWeight="bold" color="gray.600">
              40
            </Td>
            <Td fontSize="sm" color="gray.600">
              <Text>IDR {minPrice40}</Text>
            </Td>
            <Td fontSize="sm" color="gray.600">
              <Text>IDR {maxPrice40}</Text>
            </Td>
          </Tr>
          <Tr _hover={{ bgColor: "#e0e0e0" }}>
            <Td fontSize="sm" fontWeight="bold" color="gray.600">
              70
            </Td>
            <Td fontSize="sm" color="gray.600">
              <Text>IDR {minPrice70}</Text>
            </Td>
            <Td fontSize="sm" color="gray.600">
              <Text>IDR {maxPrice70}</Text>
            </Td>
          </Tr>
          <Tr _hover={{ bgColor: "#e0e0e0" }}>
            <Td fontSize="sm" fontWeight="bold" color="gray.600">
              100
            </Td>
            <Td fontSize="sm" color="gray.600">
              <Text>IDR {minPrice100}</Text>
            </Td>
            <Td fontSize="sm" color="gray.600">
              <Text>IDR {maxPrice100}</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default PredictionTable;
