import {
  Box,
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function PriceList() {
  return (
    <Box
      //   padding="10px"
      border="1px"
      backgroundColor="white"
      width="full"
      height="30rem"
      borderRadius="5px"
      borderColor="gray.200"
    >
      <Flex justify="space-between" marginX="20px" marginY="15px">
        <Text fontSize="md" color="gray.600" fontWeight="medium">
          List Harga Udang
        </Text>
        <Button
          width="fit-content"
          height="fit-content"
          padding="5px"
          backgroundColor="blue.400"
          color="white"
          fontSize="sm"
        >
          TAMBAHKAN HARGA
        </Button>
      </Flex>
      <hr></hr>
      <TableContainer paddingTop="10px" paddingX="20px">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead backgroundColor="#eaeff5">
            <Tr>
              <Th>Tanggal</Th>
              <Th>Lokasi</Th>
              <Th>Supplier</Th>
              <Th>Harga Size 100</Th>
              <Th />
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>30 Maret 2023</Td>
              <Td>Jawa Tengah</Td>
              <Td>An****asd</Td>
              <Td>Rp 53.000</Td>
              <Td>
                <Button
                  bgColor="#1b72d3"
                  color="white"
                  fontSize="sm"
                  height="8"
                  borderRadius="3px"
                >
                  LIHAT DETAIL
                </Button>
              </Td>
              <Td>sosmed</Td>
            </Tr>
            <Tr>
              <Td>30 Maret 2023</Td>
              <Td>Jawa Tengah</Td>
              <Td>An****asd</Td>
              <Td>Rp 53.000</Td>
              <Td>
                <Button
                  bgColor="#1b72d3"
                  color="white"
                  fontSize="sm"
                  height="8"
                  borderRadius="3px"
                >
                  LIHAT DETAIL
                </Button>
              </Td>
              <Td>sosmed</Td>
            </Tr>
            <Tr>
              <Td>30 Maret 2023</Td>
              <Td>Jawa Tengah</Td>
              <Td>An****asd</Td>
              <Td>Rp 53.000</Td>
              <Td>
                <Button
                  bgColor="#1b72d3"
                  color="white"
                  fontSize="sm"
                  height="8"
                  borderRadius="3px"
                >
                  LIHAT DETAIL
                </Button>
              </Td>
              <Td>sosmed</Td>
            </Tr>
            <Tr>
              <Td>30 Maret 2023</Td>
              <Td>Jawa Tengah</Td>
              <Td>An****asd</Td>
              <Td>Rp 53.000</Td>
              <Td>
                <Button
                  bgColor="#1b72d3"
                  color="white"
                  fontSize="sm"
                  height="8"
                  borderRadius="3px"
                >
                  LIHAT DETAIL
                </Button>
              </Td>
              <Td>sosmed</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PriceList;
