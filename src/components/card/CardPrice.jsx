import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Facebook, Whatsapp, Twitter } from "../button";

function CardPrice() {
  return (
    <Box
      bgColor="#f5f5f5"
      minW="20rem"
      w="20rem"
      h="15rem"
      border="1px"
      borderColor="gray.300"
      borderRadius="5px"
      padding="10px"
    >
      <Flex justify="space-between">
        <Flex flexDirection="column">
          <Heading size="sm" color="#6298c6">
            JAWA TENGAH
          </Heading>
          <Text color="#6298c6" fontSize="14px" marginTop="10px">
            REMBANG
          </Text>
          <Text fontSize="14px" marginTop="-5px">
            size 100:
          </Text>
          <Heading size="md" marginTop="10px">
            Rp 53.000
          </Heading>
        </Flex>
        <Flex flexDirection="column" alignItems="end">
          <Text fontSize="sm" marginBottom="10px">
            30 Maret 2023
          </Text>
          <Text fontSize="sm">Supplier:</Text>
          <Text fontSize="sm" fontWeight="bold" marginTop="-5px">
            aas*******lm
          </Text>
          <Text fontSize="sm" marginTop="10px">
            +6289xxxxxx
          </Text>
        </Flex>
      </Flex>
      <Flex paddingY="20px" justify="space-evenly">
        <Button
          bgColor="#007ff5"
          color="white"
          fontSize="sm"
          h="35px"
          borderRadius="3px"
          _hover={{ bgColor: "#004492" }}
        >
          LIHAT DETAIL
        </Button>
        <Button
          border="1px"
          borderColor="#007ff5"
          fontSize="sm"
          h="35px"
          borderRadius="3px"
          color="#007ff5"
          bgColor="#f5f5f5"
          _hover={{ bgColor: "#007ff5", color: "white" }}
        >
          LIHAT KONTAK
        </Button>
      </Flex>
      <Center gap="10px">
        <Text fontSize="sm">Bagikan: </Text>
        <Whatsapp />
        <Facebook />
        <Twitter />
      </Center>
    </Box>
  );
}

export default CardPrice;
