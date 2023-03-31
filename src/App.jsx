import { useState } from "react";
import { Box, Container, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Filter from "./components/Filter";
import CardTrend from "./components/CardPriceTrend";
import PriceList from "./components/PriceList";

function App() {
  return (
    <>
      <Filter />
      <Container backgroundColor="gray.100" maxW="full" paddingY="15px">
        <Flex gap="20px">
          <Box width="0.5" flex="1" height="7rem" border="2px"></Box>
          <Box width="0.5" flex="1" height="7rem" border="2px"></Box>
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
          <Box width="0.5" flex="1" height="7rem" border="2px"></Box>
          <Box width="0.5" flex="1" height="7rem" border="2px"></Box>
        </Flex>
        <Box marginTop="20px">
          <PriceList />
        </Box>
      </Container>
    </>
  );
}

export default App;
