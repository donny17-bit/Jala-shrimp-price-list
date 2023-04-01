import {
  Container,
  Flex,
  Box,
  Text,
  Wrap,
  WrapItem,
  Image,
  VStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import DetailHeader from "../components/layout/DetailHeader";
import Footer from "../components/layout/Footer";
import DetailPriceTable from "../components/table/DetailPriceTable";
import PriceHistory from "../components/card/PriceHistory";
import CardPrice from "../components/card/CardPrice";

function DetailPrice() {
  return (
    <>
      <DetailHeader />
      <Container backgroundColor="gray.100" maxW="full" paddingY="15px">
        <Flex gap="20px">
          <DetailPriceTable />
          <PriceHistory />
        </Flex>
        <Flex gap="20px" marginTop="20px">
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
        <Box
          marginTop="20px"
          flex="1"
          height="365px"
          backgroundColor="white"
          borderRadius="5px"
          border="1px"
          borderColor="gray.200"
        >
          <Text
            color="gray.600"
            fontSize="md"
            fontWeight="medium"
            padding="15px"
          >
            Harga Lainnya
          </Text>
          <hr></hr>
          <Wrap padding="15px">
            <WrapItem>
              <CardPrice />
            </WrapItem>
          </Wrap>
        </Box>
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
      </Container>
      <Footer />
    </>
  );
}

export default DetailPrice;
