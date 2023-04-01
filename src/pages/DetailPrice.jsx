import {
  Container,
  Flex,
  Box,
  Text,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import React from "react";
import DetailHeader from "../components/DetailHeader";

function DetailPrice() {
  return (
    <>
      <DetailHeader />
      <Container backgroundColor="gray.100" maxW="full" paddingY="15px">
        <Flex gap="20px">
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
              color="gray.600"
              fontSize="md"
              fontWeight="medium"
              paddingStart="15px"
            >
              Detail Harga Udang
            </Text>
          </Box>
          <Box
            flex="1"
            height="365px"
            backgroundColor="white"
            borderRadius="5px"
            paddingY="10px"
            border="1px"
            borderColor="gray.200"
          >
            <Text
              color="gray.600"
              fontSize="md"
              fontWeight="medium"
              paddingStart="15px"
            >
              Riwayat Harga Di Daerah Jawa Tengah
            </Text>
          </Box>
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
          // width="60%"
          height="365px"
          backgroundColor="white"
          borderRadius="5px"
          paddingY="10px"
          border="1px"
          borderColor="gray.200"
        >
          <Text
            color="gray.600"
            fontSize="md"
            fontWeight="medium"
            paddingStart="15px"
          >
            Harga Lainnya
          </Text>
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
    </>
  );
}

export default DetailPrice;
