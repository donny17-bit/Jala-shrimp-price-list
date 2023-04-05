import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Whatsapp } from "../button/index";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

function PriceListTable({ size }) {
  const navigate = useNavigate();
  const [dataSet, setDataSet] = useState({
    data: [],
    links: {},
    meta: {},
  });
  const [data, setData] = useState([]);
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let keys;

  const openDetail = (item, data) => {
    navigate("/detail", {
      state: { item, data: data },
    });
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://app.jala.tech/api/shrimp_prices?not_null=size_${size}&with=country%2Cregion%2Ccurrency&appends=slug%2Cshrimp_price_per_week_region_id&page=1`
      );
      setDataSet(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getNext = async () => {
    try {
      const response = await axios.get(dataSet.links.next);
      setDataSet(response.data);
      setData([...data, ...response.data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const sizePrice = (item, size) => {
    keys = Object.keys(item).filter((word) => word.match(`size_${size}`));
    return item[keys[0]];
  };

  useEffect(() => {
    getData();
  }, [size]);

  return (
    <TableContainer
      paddingTop="10px"
      paddingX="20px"
      height="26rem"
      overflowY="scroll"
      id="tableList"
      display={{ base: "none", lg: "block" }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={getNext}
        hasMore={true}
        loader={<p>Loading...</p>}
        scrollableTarget="tableList"
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
              <Tr _hover={{ bgColor: "#e0e0e0" }} key={item.id}>
                {/* convert month number to word */}
                <Td fontSize="sm" color="gray.600">
                  {item.date.slice(8)}&nbsp;
                  {month[parseInt(item.date.slice(5, 7))]}
                  &nbsp;
                  {item.date.slice(0, 4)}
                </Td>
                <Td flexDirection="column">
                  <Text fontSize="sm" color="#1b72d3" fontWeight="bold">
                    {item.region.province_name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {item.region.name}
                  </Text>
                </Td>
                <Td fontSize="sm" color="gray.600" fontWeight="bold">
                  {item.creator.name}
                </Td>
                <Td fontSize="sm" color="gray.600">
                  {item.currency.symbol} {sizePrice(item, size)}
                </Td>
                <Td>
                  <Button
                    bgColor="#1b72d3"
                    color="white"
                    fontSize="sm"
                    height="8"
                    borderRadius="3px"
                    _hover={{ bgColor: "#1b72d3" }}
                    _active={{ bgColor: "#1767bf" }}
                    onClick={() => openDetail(item, data)}
                  >
                    LIHAT DETAIL
                  </Button>
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
      </InfiniteScroll>
    </TableContainer>
  );
}

export default PriceListTable;
