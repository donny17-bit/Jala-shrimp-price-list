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
import { useLocation } from "react-router-dom";

function DetailPrice() {
  const location = useLocation();

  const detail = location.state.item;
  const otherData = location.state.data;

  return (
    <>
      <DetailHeader
        province={detail.region.province_name}
        city={detail.region.name}
      />
      <Container backgroundColor="gray.100" maxW="full" paddingY="15px">
        <Flex gap="20px" flexDirection={["column", "column", "row"]}>
          <DetailPriceTable detail={detail} />
          <PriceHistory detail={detail} />
        </Flex>
        <Flex
          gap="20px"
          marginTop="20px"
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
        <Box
          marginTop="20px"
          flex="1"
          backgroundColor="white"
          borderRadius="5px"
          border="1px"
          borderColor="gray.200"
          paddingBottom="15px"
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
          <Flex padding="15px" overflowX="scroll" direction="row" gap="20px">
            <CardPrice detail={otherData[0]} otherData={otherData} />
            <CardPrice detail={otherData[3]} otherData={otherData} />
            <CardPrice detail={otherData[4]} otherData={otherData} />
            <CardPrice detail={otherData[2]} otherData={otherData} />
            <CardPrice detail={otherData[5]} otherData={otherData} />
            <CardPrice detail={otherData[1]} otherData={otherData} />
          </Flex>
        </Box>
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
      </Container>
      <Footer />
    </>
  );
}

export default DetailPrice;
