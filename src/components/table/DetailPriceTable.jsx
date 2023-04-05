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
  HStack,
} from "@chakra-ui/react";
import { Facebook, Twitter, Whatsapp, Messenger } from "../button/index";

function DetailPriceTable({ detail }) {
  const share = Math.round(Math.random() * 10);
  const keys = Object.keys(detail).filter((word) => word.match("size"));
  let table = [];

  for (let element of keys) {
    if (detail[element] === null) {
      continue;
    }

    table.push(
      <Tr borderTop="2px" borderTopColor="gray.300" key={element}>
        <Td fontSize="sm" color="gray.600" fontWeight="bold">
          {element[0].toUpperCase() +
            element.slice(1, 4) +
            " " +
            element.slice(5)}
        </Td>
        <Td fontSize="sm" color="gray.600">
          Rp {detail[element]}
        </Td>
        <Td></Td>
        <Td></Td>
      </Tr>
    );
  }

  return (
    <Box
      width={{ base: "full", lg: "60%" }}
      backgroundColor="white"
      height="fit-content"
      borderRadius="5px"
      border="1px"
      borderColor="gray.200"
    >
      <Text
        color="gray.600"
        fontSize={["sm", "md"]}
        fontWeight="medium"
        padding="15px"
      >
        Detail Harga Udang
      </Text>
      <hr></hr>
      <Flex flexDirection={{ base: "column", md: "row" }} padding="15px">
        <VStack
          flex="2"
          alignItems="start"
          spacing={{ base: "0px", md: "5px" }}
          marginBottom={{ base: "10px", md: "0px" }}
        >
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
            {detail.date.slice(8)}&nbsp;
            {detail.date.slice(5, 7) === "01"
              ? "Januari"
              : detail.date.slice(5, 7) === "02"
              ? "Februari"
              : detail.date.slice(5, 7) === "03"
              ? "Maret"
              : detail.date.slice(5, 7) === "04"
              ? "April"
              : detail.date.slice(5, 7) === "05"
              ? "Mei"
              : detail.date.slice(5, 7) === "06"
              ? "Juni"
              : detail.date.slice(5, 7) === "07"
              ? "Juli"
              : detail.date.slice(5, 7) === "08"
              ? "Agustus"
              : detail.date.slice(5, 7) === "09"
              ? "September"
              : detail.date.slice(5, 7) === "10"
              ? "Oktober"
              : detail.date.slice(5, 7) === "11"
              ? "November"
              : "Desember"}
            &nbsp;
            {detail.date.slice(0, 4)}
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold"
            color="gray.600"
            w={{ base: "full", md: "10rem" }}
            // marginBottom={{ base: "50px" }}
          >
            Udang Vannamei (Penaeus Vannamei)
          </Text>
        </VStack>
        <VStack
          flex="1"
          alignItems="start"
          spacing={{ base: "0px", md: "5px" }}
          marginBottom={{ base: "10px", md: "0px" }}
        >
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
            Supplier:
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold"
            color="gray.600"
          >
            {detail.creator.name}
          </Text>
        </VStack>
        <VStack
          flex="1"
          alignItems="start"
          spacing={{ base: "0px", md: "5px" }}
          marginBottom={{ base: "10px", md: "0px" }}
        >
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
            Kontak
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
            {detail.creator.phone}
          </Text>
          <Link
            color="#1767bf"
            fontSize={{ base: "xs", md: "sm" }}
            textDecoration="underline"
            fontWeight="semibold"
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
          <Tbody>{table}</Tbody>
        </Table>
      </TableContainer>
      <Flex
        padding="15px"
        flexDirection={{ base: "column", sm: "row" }}
        gap="15px"
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="gray.600"
          // justifySelf="start"
        >
          Catatan
        </Text>
        <Flex justify="end" flex="1">
          <HStack
            border="1px"
            borderColor="gray.400"
            borderRadius="5px"
            paddingX="10px"
            paddingY="5px"
          >
            <Flex flexDirection="column">
              <Text fontSize="md" color="gray.600" textAlign="center">
                {share}
              </Text>
              <Text fontSize="xs" color="gray.500">
                Shares
              </Text>
            </Flex>
            <HStack>
              <Facebook />
              <Whatsapp />
              <Twitter />
              <Messenger />
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default DetailPriceTable;
