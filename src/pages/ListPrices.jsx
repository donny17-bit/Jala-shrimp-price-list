import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import Filter from "../components/layout/Filter";
import CardTrend from "../components/card/CardPriceTrend";
import PriceListTable from "../components/table/PriceListTable";
import Footer from "../components/layout/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Select from "react-select";

function ListPrices() {
  const sizes = [
    {
      value: 20,
      label: "size 20",
    },
    {
      value: 30,
      label: "size 30",
    },
    {
      value: 40,
      label: "size 40",
    },
    {
      value: 50,
      label: "size 50",
    },
    {
      value: 60,
      label: "size 60",
    },
    {
      value: 70,
      label: "size 70",
    },
    {
      value: 80,
      label: "size 80",
    },
    {
      value: 90,
      label: "size 90",
    },
    {
      value: 100,
      label: "size 100",
    },
    {
      value: 110,
      label: "size 110",
    },
    {
      value: 120,
      label: "size 120",
    },
    {
      value: 130,
      label: "size 130",
    },
    {
      value: 140,
      label: "size 140",
    },
    {
      value: 150,
      label: "size 150",
    },
    {
      value: 160,
      label: "size 160",
    },
    {
      value: 170,
      label: "size 170",
    },
    {
      value: 180,
      label: "size 180",
    },
    {
      value: 190,
      label: "size 190",
    },
    {
      value: 200,
      label: "size 200",
    },
  ];

  const [dataRegion, setDataRegion] = useState({});
  const [region, setRegion] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [size, setSize] = useState(null);
  // const [options, setOptions] = useState([
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ]);

  let options = [];

  const getDataRegion = async () => {
    try {
      const response = await axios.get(
        "https://app.jala.tech/api/regions?has=shrimp_prices&page=1"
      );
      setDataRegion(response.data);
      setRegion(response.data.data);
      options = [response.data.data];
      // setOptions(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  const getNextRegion = async () => {
    try {
      const response = await axios.get(dataRegion.links.next);
      setDataRegion(response.data);
      setRegion([...data, ...response.data.data]);
      console.log("get data", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectSize = (e) => {
    setSize(e.value);
  };

  useEffect(() => {
    getDataRegion();
  }, []);

  useEffect(() => {
    region.map((item) =>
      options.push({ ...item, value: item.name, label: item.name })
    );
  }, [region]);

  return (
    <>
      {/* <Filter /> */}
      <HStack
        spacing="24px"
        paddingX="15px"
        paddingY="15px"
        backgroundColor="white"
      >
        <Text fontSize="md" fontWeight="bold" color="gray.600">
          Filter&nbsp;:
        </Text>

        <Select
          placeholder="pilih lokasi"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={true}
          className="w-1/3"
          id="selectRegion"
        >
          <InfiniteScroll
            dataLength={region.length}
            next={getNextRegion}
            hasMore={true}
            hasChildren={true}
            loader={<p>Loading...</p>}
            scrollableTarget="selectRegion"
          ></InfiniteScroll>
        </Select>

        {/* <Select placeholder="Pilih Lokasi" width="xl" id="selectRegion">
         
          {region.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
          
        </Select> */}
        <Select
          placeholder="Pilih size udang"
          onChange={(e) => selectSize(e)}
          defaultValue={size}
          options={sizes}
          className="w-1/4"
          isSearchable={false}
        />
        <Select
          placeholder="Pilih jenis udang"
          onChange={() => console.log("vannamei")}
          defaultValue={"vannamei"}
          options={[{ value: "vannamei", label: "Vannamei" }]}
          className="w-1/5"
          isSearchable={false}
        />
      </HStack>
      {/* filter */}
      <Container backgroundColor="gray.100" maxW="full" paddingY="15px">
        <Flex gap="20px">
          <Image
            flex="1"
            height="7rem"
            src="https://drive.google.com/uc?id=15_wFMILzgqt-NZ5A_lxqlonQVYSNjw2_&export=media"
            alt="Banner"
            objectFit="cover"
          />
          <Image
            flex="1"
            height="7rem"
            src="https://drive.google.com/uc?id=1YIyOuyXFoJ5e6FFtRKnnX_iKUuRBk7nX&export=media"
            alt="Banner"
            objectFit="cover"
          />
        </Flex>
        <Flex marginTop="20px" gap="20px">
          <Box
            flex="1.5"
            // width="60%"
            height="365px"
            backgroundColor="white"
            borderRadius="5px"
            paddingY="10px"
            border="1px"
            borderColor="gray.200"
          >
            <Text
              color="gray.500"
              fontSize="md"
              fontWeight="medium"
              paddingStart="15px"
            >
              Persebaran Harga Udang Size 100
            </Text>
          </Box>
          <Flex flexDirection="column" flex="1">
            <Text
              color="gray.600"
              fontWeight="bold"
              fontSize="md"
              marginBottom="10px"
            >
              Trend harga di berbagai daerah
            </Text>
            <Wrap
              spacingX="0px"
              spacingY="10px"
              // border="2px"
              justify="space-between"
            >
              <WrapItem>
                <CardTrend />
              </WrapItem>
              <WrapItem>
                <CardTrend />
              </WrapItem>
              <WrapItem>
                <CardTrend />
              </WrapItem>
              <WrapItem>
                <CardTrend />
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
        <Flex gap="20px" marginTop="20px">
          <Image
            flex="1"
            height="7rem"
            src="https://drive.google.com/uc?id=1ZeaUI_0OWkEYM7anqFGbcJl4fNRkHsa5&export=media"
            alt="Banner"
            objectFit="cover"
          />
          <Image
            flex="1"
            height="7rem"
            src="https://drive.google.com/uc?id=1g1UY_e2uPPwA3n3QOohHB0hrGB0K_mtd&export=media"
            alt="Banner"
            objectFit="cover"
          />
        </Flex>
        <Box marginTop="20px">
          <PriceListTable size={size} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ListPrices;
