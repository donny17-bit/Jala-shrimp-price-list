import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Filter from "../components/Filter";
import CardTrend from "../components/CardPriceTrend";
import PriceList from "../components/PriceList";
import Footer from "../components/Footer";

function ListPrices() {
  return (
    <>
      <Filter />
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
          <PriceList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ListPrices;
