import { Box, Flex, Text } from "@chakra-ui/react";

function CardPriceTrend() {
  return (
    <Box
      padding="15px"
      width="15.7rem"
      height="10rem"
      backgroundColor="white"
      borderRadius="5px"
      border="1px"
      paddingTop="10px"
      borderColor="gray.200"
    >
      <Flex flexDirection="column">
        <Text color={"gray.600"} fontWeight="semibold" fontSize={"md"}>
          Lampung
        </Text>
        <Text
          color={"gray.600"}
          fontWeight="bold"
          fontSize="smaller"
          marginTop="3px"
        >
          Rp 52.000
        </Text>
        <Text
          color={"gray.600"}
          fontWeight="normal"
          fontSize="small"
          marginTop="5px"
        >
          19 Feb - 26 Feb
        </Text>
      </Flex>
    </Box>
  );
}

export default CardPriceTrend;
