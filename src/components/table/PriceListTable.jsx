import {
  Box,
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import { data } from "../../data/shrimp_prices.json";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Whatsapp } from "../button/index";

function PriceListTable() {
  console.log(data[0].date.slice(5, 7) === "05");
  console.log(data[0].creator.name);
  const size = 100;
  let username = [];

  // censor name
  data.map((item) => {
    let stars = "*";
    for (let i = 0; i < item.creator.name.length - 2; i++) {
      stars += "*";
    }
    username.push(item.creator.name[0] + stars + item.creator.name.slice(-2));

    // item.creator.name.replace(
    //   item.creator.name.slice(1, item.creator.name.length - 2), stars
    // )
  });

  return (
    <Box
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
      <TableContainer
        paddingTop="10px"
        paddingX="20px"
        height="26rem"
        overflowY="scroll"
      >
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead backgroundColor="#eaeff5">
            <Tr>
              <Th>Tanggal</Th>
              <Th>Lokasi</Th>
              <Th>Supplier</Th>
              <Th>Harga Size {size}</Th>
              <Th />
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr _hover={{ bgColor: "#e0e0e0" }}>
                {/* convert month number to word */}
                <Td>
                  {item.date.slice(8)}&nbsp;
                  {item.date.slice(5, 7) === "01"
                    ? "Januari"
                    : item.date.slice(5, 7) === "02"
                    ? "Februari"
                    : item.date.slice(5, 7) === "03"
                    ? "Maret"
                    : item.date.slice(5, 7) === "04"
                    ? "April"
                    : item.date.slice(5, 7) === "05"
                    ? "Mei"
                    : item.date.slice(5, 7) === "06"
                    ? "Juni"
                    : item.date.slice(5, 7) === "07"
                    ? "Juli"
                    : item.date.slice(5, 7) === "08"
                    ? "Agustus"
                    : item.date.slice(5, 7) === "09"
                    ? "September"
                    : item.date.slice(5, 7) === "10"
                    ? "Oktober"
                    : item.date.slice(5, 7) === "11"
                    ? "November"
                    : "Desember"}
                  &nbsp;
                  {item.date.slice(0, 4)}
                </Td>
                <Td flexDirection="col">
                  <Text>{item.region.province_name}</Text>
                  <Text>{item.region.name}</Text>
                </Td>
                <Td>{username[index]}</Td>
                <Td>Rp {item.size_100}</Td>
                <Td>
                  <Link to={"detail"}>
                    <Button
                      bgColor="#1b72d3"
                      color="white"
                      fontSize="sm"
                      height="8"
                      borderRadius="3px"
                      _hover={{ bgColor: "#1b72d3" }}
                      _active={{ bgColor: "#1767bf" }}
                    >
                      LIHAT DETAIL
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <HStack>
                    <Facebook />
                    <Whatsapp />
                    <Twitter />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PriceListTable;
