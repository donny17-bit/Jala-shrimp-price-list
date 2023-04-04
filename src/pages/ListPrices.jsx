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
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
import { getPriceList } from "../store/action/priceList";
// import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/layout/Filter";
import CardTrend from "../components/card/CardPriceTrend";
import CardPrice from "../components/card/CardPrice";
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
  const [dataPrice, setDataPrice] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [size, setSize] = useState(100);
  const [dataPriceList, setDataPriceList] = useState([]);

  // const price = useSelector((state) => state.priceList);
  // const dispatch = useDispatch();

  let options = [];

  const getDataPrice = async () => {
    try {
      const response = await axios.get(
        `https://app.jala.tech/api/shrimp_prices?not_null=size_${size}&with=country%2Cregion%2Ccurrency&appends=slug%2Cshrimp_price_per_week_region_id&page=1`
      );
      setDataPrice(response.data);
      setDataPriceList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataPriceNext = async () => {
    try {
      const response = await axios.get(dataPrice.links.next);
      // const response = await dispatch(getPriceList(size, 1));
      setDataPrice(response.data);
      setDataPriceList([...dataPriceList, ...response.data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataRegion = async () => {
    try {
      const response = await axios.get(
        "https://app.jala.tech/api/regions?has=shrimp_prices&page=1"
      );
      setDataRegion(response.data);
      setRegion(response.data.data);
      options = [response.data.data];
    } catch (error) {
      console.error(error);
    }
  };

  const getNextRegion = async () => {
    try {
      const response = await axios.get(dataRegion.links.next);
      setDataRegion(response.data);
      setRegion([...data, ...response.data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const selectSize = (e) => {
    setSize(e.value);
  };

  useEffect(() => {
    getDataRegion();
    getDataPrice();
  }, [size]);

  useEffect(() => {
    region.map((item) =>
      options.push({ ...item, value: item.name, label: item.name })
    );
  }, [region]);

  if (dataPrice && dataRegion) {
    return (
      <>
        {/* <Filter /> */}
        <Stack
          spacing="20px"
          paddingX="15px"
          paddingBottom="15px"
          paddingTop={{ base: "0px", lg: "15px" }}
          backgroundColor="white"
          direction={{ base: "column", lg: "row" }}
        >
          <Text
            fontSize="md"
            fontWeight="bold"
            color="gray.600"
            marginTop="5px"
            display={{ base: "none", lg: "block" }}
          >
            Filter&nbsp;:
          </Text>
          <Select
            placeholder="pilih lokasi"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isSearchable={true}
            className="sm:w-full lg:w-full"
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
          <Flex
            gap="20px"
            width="100%"
            justify={{ base: "space-between", lg: "flex-start" }}
          >
            <Select
              placeholder="Pilih size udang"
              onChange={(e) => selectSize(e)}
              defaultValue={size}
              options={sizes}
              className="w-1/2 lg:w-1/2"
              isSearchable={false}
            />
            <Select
              placeholder="Pilih jenis udang"
              onChange={() => console.log("vannamei")}
              defaultValue={"vannamei"}
              options={[{ value: "vannamei", label: "Vannamei" }]}
              className="w-1/2 lg:w-2/5"
              isSearchable={false}
            />
          </Flex>
        </Stack>
        {/* filter */}
        <Container backgroundColor="gray.100" maxW="full" paddingY="15px">
          <Flex
            gap="20px"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Image
              flex="1"
              height={{ sm: "2rem", md: "5rem", xl: "7rem" }}
              src="https://drive.google.com/uc?id=15_wFMILzgqt-NZ5A_lxqlonQVYSNjw2_&export=media"
              alt="Banner"
              objectFit="cover"
            />
            <Image
              flex="1"
              height={{ sm: "2rem", md: "5rem", xl: "7rem" }}
              src="https://drive.google.com/uc?id=1YIyOuyXFoJ5e6FFtRKnnX_iKUuRBk7nX&export=media"
              alt="Banner"
              objectFit="cover"
            />
          </Flex>
          <Flex
            marginTop="20px"
            gap="20px"
            flexDirection={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
          >
            <Box
              flex="1.5"
              // width="60%"
              // height="365px"
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

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2894115.3889098424!2d110.43965071674377!3d-7.450174956058436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1680512283491!5m2!1sid!2sid"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4"
              ></iframe>
              <Center marginY="10px">
                <Flex gap="10px">
                  <Center w="25px" h="25px" bg="#676963"></Center>
                  <Text fontSize="sm" color="gray.600">
                    &gt; 1 Bulan
                  </Text>
                  <Center w="25px" h="25px" bg="#133878"></Center>
                  <Text fontSize="sm" color="gray.600">
                    &gt; 1 Minggu
                  </Text>
                  <Center w="25px" h="25px" bg="#1b77df"></Center>
                  <Text fontSize="sm" color="gray.600">
                    1 Baru
                  </Text>
                </Flex>
              </Center>
            </Box>
            <Flex flexDirection="column" flex="1">
              <Text
                color="gray.600"
                fontWeight="bold"
                fontSize="md"
                marginBottom="10px"
                display={{ base: "none", lg: "block" }}
              >
                Trend harga di berbagai daerah
              </Text>
              <Wrap
                justify="space-evenly"
                display={{ base: "none", lg: "block" }}
              >
                <WrapItem width="45%">
                  <CardTrend data={dataPrice.data[5]} size={size} />
                </WrapItem>
                <WrapItem width="45%">
                  <CardTrend data={dataPrice.data[3]} size={size} />
                </WrapItem>
                <WrapItem width="45%">
                  <CardTrend data={dataPrice.data[14]} size={size} />
                </WrapItem>
                <WrapItem width="45%">
                  <CardTrend data={dataPrice.data[7]} size={size} />
                </WrapItem>
              </Wrap>
              <Flex
                gap="20px"
                flexDirection={"row"}
                overflowX="scroll"
                display={{ base: "flex", lg: "none" }}
              >
                <CardTrend data={dataPrice.data[5]} size={size} />
                <CardTrend data={dataPrice.data[3]} size={size} />
                <CardTrend data={dataPrice.data[14]} size={size} />
                <CardTrend data={dataPrice.data[7]} size={size} />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="20px"
            marginTop="20px"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Image
              flex="1"
              height={{ sm: "2rem", md: "5rem", xl: "7rem" }}
              src="https://drive.google.com/uc?id=1ZeaUI_0OWkEYM7anqFGbcJl4fNRkHsa5&export=media"
              alt="Banner"
              objectFit="cover"
            />
            <Image
              flex="1"
              height={{ sm: "2rem", md: "5rem", xl: "7rem" }}
              src="https://drive.google.com/uc?id=1g1UY_e2uPPwA3n3QOohHB0hrGB0K_mtd&export=media"
              alt="Banner"
              objectFit="cover"
            />
          </Flex>

          <Box
            marginTop="20px"
            border="1px"
            backgroundColor="white"
            width="full"
            // height="30rem"
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
                onClick={() => {
                  navigate("/maps");
                }}
              >
                TAMBAHKAN HARGA
              </Button>
            </Flex>
            <hr></hr>
            <PriceListTable size={size} />
            <Flex
              flexDirection="column"
              padding="20px"
              height="40rem"
              overflow="scroll"
              gap="10px"
              display={{ base: "flex", lg: "none" }}
              id="cardList"
            >
              <InfiniteScroll
                dataLength={dataPriceList.length}
                next={getDataPriceNext}
                hasMore={true}
                loader={<p>Loading...</p>}
                scrollableTarget="cardList"
              >
                {dataPriceList.map((item) => (
                  <CardPrice
                    detail={item}
                    otherData={dataPriceList}
                    key={item.id}
                  />
                ))}
              </InfiniteScroll>
            </Flex>
          </Box>
        </Container>
        <Footer />
      </>
    );
  } else {
    <></>;
  }
}

export default ListPrices;
