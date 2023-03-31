import { Box, Button, Flex, Text } from "@chakra-ui/react";

function PriceList() {
  return (
    <Box
      //   padding="10px"
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
    </Box>
  );
}

export default PriceList;
