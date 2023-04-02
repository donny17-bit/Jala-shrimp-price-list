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
  getSlideTransition,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Whatsapp } from "../button/index";
import InfiniteScroll from "react-infinite-scroll-component";
// import axiosInstance from "../../utils/axios";
import axios from "axios";

function PriceListTable({ size }) {
  const [dataSet, setDataSet] = useState({
    data: [],
    links: {},
    meta: {},
  });
  const [data, setData] = useState([]);

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

  // change size price not work
  const sizePrice = (item, size) => {
    switch (size) {
      case 20:
        return item.size_20;
        break;
      case 30:
        return item.size_30;
        break;
      case 40:
        return item.size_40;
        break;
      case 50:
        return item.size_50;
        break;
      case 60:
        return item.size_60;
        break;
      case 70:
        return item.size_70;
        break;
      case 80:
        return item.size_80;
        break;
      case 90:
        return item.size_90;
        break;
      case 100:
        return item.size_100;
        break;
      case 110:
        return item.size_110;
        break;
      case 120:
        return item.size_120;
        break;
      case 130:
        return item.size_130;
        break;
      case 140:
        return item.size_140;
        break;
      case 150:
        return item.size_150;
        break;
      case 160:
        return item.size_160;
        break;
      case 170:
        return item.size_170;
        break;
      case 180:
        return item.size_180;
        break;
      case 190:
        return item.size_190;
        break;
      case 200:
        return item.size_200;
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getData();
  }, [size]);

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
        id="tableList"
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
                  <Td flexDirection="column">
                    <Text>{item.region.province_name}</Text>
                    <Text>{item.region.name}</Text>
                  </Td>
                  <Td>{item.creator.name}</Td>
                  <Td>
                    {item.currency.symbol}{" "}
                    {() => {
                      sizePrice(item, size);
                    }}
                  </Td>
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
        </InfiniteScroll>
      </TableContainer>
    </Box>
  );
}

export default PriceListTable;
