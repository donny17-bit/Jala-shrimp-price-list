import {
  Flex,
  Box,
  Text,
  VStack,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  HStack,
} from "@chakra-ui/react";

function DetailPriceTable() {
  return (
    <Box
      flex="1.5"
      backgroundColor="white"
      borderRadius="5px"
      border="1px"
      borderColor="gray.200"
    >
      <Text color="gray.600" fontSize="md" fontWeight="medium" padding="15px">
        Detail Harga Udang
      </Text>
      <hr></hr>
      <Flex flexDirection={"row"} padding="15px">
        <VStack flex="2" alignItems="start" spacing="5px">
          <Text fontSize="sm" color="gray.600">
            27 Oktober 2021
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="gray.600">
            Udang Vannamei (Penaeus Vannamei)
          </Text>
        </VStack>
        <VStack flex="1" alignItems="start" spacing="5px">
          <Text fontSize="sm" color="gray.600">
            Supplier:
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="gray.600">
            a****jjasdl
          </Text>
        </VStack>
        <VStack flex="1" alignItems="start" spacing="5px">
          <Text fontSize="sm" color="gray.600">
            Kontak
          </Text>
          <Text fontSize="sm" color="gray.600">
            +628******
          </Text>
          <Link
            color="blue"
            fontSize="sm"
            textDecoration="underline"
            fontWeight="semibold"
            href="/"
          >
            Lihat Kontak
          </Link>
        </VStack>
      </Flex>
      <TableContainer padding="20px">
        <Table variant="unstyled" size="sm">
          <Thead>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr borderTop="2px" borderTopColor="gray.300">
              <Td fontSize="sm" color="gray.600" fontWeight="bold">
                Size 30
              </Td>
              <Td fontSize="sm" color="gray.600">
                Rp 90.000
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderTop="2px" borderTopColor="gray.300">
              <Td fontSize="sm" color="gray.600" fontWeight="bold">
                Size 30
              </Td>
              <Td fontSize="sm" color="gray.600">
                Rp 90.000
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderTop="2px" borderTopColor="gray.300">
              <Td fontSize="sm" color="gray.600" fontWeight="bold">
                Size 30
              </Td>
              <Td fontSize="sm" color="gray.600">
                Rp 90.000
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex>
        <Text fontSize="sm" fontWeight="bold" color="gray.600" padding="15px">
          Catatan
        </Text>
        <HStack border="1px" borderColor="gray.500" borderRadius="5px">
          <Text>1</Text>
          <HStack>
            <IconButton
              icon={
                <Icon as={TiSocialFacebook} color="white" fontSize="20px" />
              }
              paddingX="0px"
              bgColor="#4267b2"
              borderRadius="full"
              size="sm"
              _hover={{ bg: "#6885c1", marginTop: "-5px" }}
            />
            <IconButton
              icon={<Icon as={FaWhatsapp} color="white" fontSize="18px" />}
              paddingX="0px"
              bgColor="#25d366"
              borderRadius="full"
              size="sm"
              _hover={{ bg: "#51dc85", marginTop: "-5px" }}
            />
            <IconButton
              icon={<Icon as={TiSocialTwitter} color="white" fontSize="20px" />}
              paddingX="0px"
              bgColor="#55acee"
              borderRadius="full"
              size="sm"
              _hover={{ bg: "#77bdf1", marginTop: "-5px" }}
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default DetailPriceTable;
